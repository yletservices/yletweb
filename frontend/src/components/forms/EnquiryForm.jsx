import { useMemo, useState } from "react";
import { validateEmail, validateName, validatePhone, validateRequiredChoice } from "../../utils/validation";
import { whatsappLink } from "../../utils/whatsapp";
import FormField from "./FormField";
import ContactMethod from "./ContactMethod";
import SuccessMessage from "./SuccessMessage";
import Icon from "../ui/Icon";

// Generic enquiry form driven by a definition from data/forms.js (Digital Marketing / IT Solutions).
export default function EnquiryForm({ definition, formKey, onClose }) {
  const [values, setValues] = useState({ countryCode: "+91", via: "WhatsApp" });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);

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

  const submit = (e) => {
    const nextErrors = {};
    definition.fields.forEach((f) => {
      const err = validateField(f);
      if (err) nextErrors[f.name] = err;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      e.preventDefault();
      const first = document.querySelector(`[aria-invalid="true"], #${formKey}-form .err`);
      first?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    // Valid: the link opens WhatsApp in a new tab; show the thank-you screen.
    setTimeout(() => setDone({ name: (values.name || "").trim().split(" ")[0], message, link }), 350);
  };

  if (done) return <SuccessMessage name={done.name} message={done.message} link={done.link} onClose={onClose} label={definition.title.toLowerCase()} />;

  return (
    <form id={`${formKey}-form`} noValidate onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        {definition.fields.map((f) => (
          <FormField key={f.name} field={f} values={values} errors={errors} onChange={onChange} onBlur={onBlur} idPrefix={formKey} />
        ))}
        <ContactMethod value={values.via} onChange={(v) => onChange("via", v)} name={`${formKey}-via`} />
      </div>
      <div className="mt-6 flex flex-col gap-2.5">
        <a href={link} target="_blank" rel="noopener noreferrer" role="button" onClick={submit} className="btn btn-violet min-h-[56px] w-full rounded-[14px] text-[15.5px]">
          Submit Enquiry <Icon name="arrow" />
        </a>
        <small className="text-center text-[12.5px] text-muted">Your enquiry is delivered to the Ylet team on WhatsApp. We reply within one working day.</small>
      </div>
    </form>
  );
}
