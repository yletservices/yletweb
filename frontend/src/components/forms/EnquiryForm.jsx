import { useMemo, useState } from "react";
import { validateEmail, validateName, validatePhone, validateRequiredChoice } from "../../utils/validation";
import { whatsappLink } from "../../utils/whatsapp";
import { sendLeadEmail } from "../../utils/email";
import FormField from "./FormField";
import ContactMethod from "./ContactMethod";
import SuccessMessage from "./SuccessMessage";
import Icon from "../ui/Icon";

// Generic enquiry form driven by a definition from data/forms.js (Digital Marketing / IT Solutions).
export default function EnquiryForm({ definition, formKey, onClose }) {
  const [values, setValues] = useState({ countryCode: "+91", via: "WhatsApp" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const validateField = (f, v = values) => {
    const value = v[f.name] ?? (f.type === "chips" ? [] : "");
    if (f.type === "email") return validateEmail(value);
    if (f.type === "tel") return validatePhone(value, v.countryCode);
    if (!f.required) return "";
    if (f.type === "chips") return validateRequiredChoice(value);
    if (f.type === "select") return validateRequiredChoice(value, "Please select an option.");
    return validateName(value, f.label);
  };

  const onChange = (name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    const f = definition.fields.find((x) => x.name === name);
    if (f && errors[name]) setErrors((e) => ({ ...e, [name]: validateField(f, next) }));
  };
  const onBlur = (f) => values[f.name] && setErrors((e) => ({ ...e, [f.name]: validateField(f) }));

  const message = useMemo(() => {
    const lines = definition.fields
      .map((f) => {
        let v = values[f.name];
        if (f.type === "tel" && v) v = `${values.countryCode} ${v}`;
        if (Array.isArray(v)) v = v.join(", ");
        return v && String(v).trim() ? `${f.label}: ${v}` : null;
      })
      .filter(Boolean);
    return `New ${definition.title} from the Ylet website\n\n${lines.join("\n")}\nPreferred contact: ${values.via}`;
  }, [values, definition]);
  const link = whatsappLink(message);

  const submit = async (e) => {
    e?.preventDefault();
    const nextErrors = {};
    definition.fields.forEach((f) => {
      const err = validateField(f);
      if (err) nextErrors[f.name] = err;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = document.querySelector(`[aria-invalid="true"], #${formKey}-form .err`);
      first?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    try {
      const cleanPhone = `${values.countryCode || "+91"}${(values.phone || "").replace(/\D/g, "")}`;
      const waNum = `${(values.countryCode || "+91").replace(/\D/g, "")}${(values.phone || "").replace(/\D/g, "")}`;

      await sendLeadEmail({
        form_type: definition.title,
        name: (values.name || "").trim(),
        business: (values.business || "").trim() || "-",
        phone: `${values.countryCode || "+91"} ${(values.phone || "").trim()}`,
        clean_phone: cleanPhone,
        whatsapp_num: waNum,
        email: (values.email || "").trim(),
        via: values.via || "WhatsApp",
        needs: Array.isArray(values.needs) ? values.needs.join(", ") : (values.needs || "-"),
        budget: values.budget || "-",
        timeline_or_goal: values.goal || values.timeline || values.stage || "-",
        extra_info: values.link || values.role || values.industry || "-",
        message: (values.message || "").trim() || "No additional message.",
      });
    } catch (err) {
      console.error("Email send failed:", err);
    } finally {
      setSubmitting(false);
      setDone({ name: (values.name || "").trim().split(" ")[0], message, link });
    }
  };

  if (done) return <SuccessMessage name={done.name} message={done.message} link={done.link} onClose={onClose} label={definition.title.toLowerCase()} />;

  return (
    <form id={`${formKey}-form`} noValidate onSubmit={submit}>
      <div className="grid gap-4 sm:grid-cols-2">
        {definition.fields.map((f) => (
          <FormField key={f.name} field={f} values={values} errors={errors} onChange={onChange} onBlur={onBlur} idPrefix={formKey} />
        ))}
        <ContactMethod value={values.via} onChange={(v) => onChange("via", v)} name={`${formKey}-via`} />
      </div>
      <div className="mt-6 flex flex-col gap-2.5">
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-violet min-h-[56px] w-full rounded-[14px] text-[15.5px] disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending Enquiry..." : "Submit Enquiry"} <Icon name="arrow" />
        </button>
        <small className="text-center text-[12.5px] text-muted">
          Your enquiry is sent directly to the Ylet team. We reply within one working day.
        </small>
      </div>
    </form>
  );
}
