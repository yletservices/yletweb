import { useMemo, useState } from "react";
import { BUDGETS, PROJECT_OPTIONS, START_TIMES } from "../../data/forms";
import { validateEmail, validateName, validatePhone, validateRequiredChoice } from "../../utils/validation";
import { makeReference, whatsappLink } from "../../utils/whatsapp";
import { sendLeadEmail } from "../../utils/email";
import FormField from "./FormField";
import ContactMethod from "./ContactMethod";
import SuccessMessage from "./SuccessMessage";
import Icon from "../ui/Icon";

const INITIAL = { name: "", phone: "", email: "", company: "", services: [], budget: "", timeline: "", description: "", countryCode: "+91", via: "WhatsApp", consent: false };

function SectionTitle({ n, children, hint }) {
  return (
    <>
      <h2 className="flex items-center gap-3 text-lg">
        <span className="grid h-8 w-8 flex-none place-items-center rounded-[10px] bg-lav text-sm text-violet">{n}</span>
        <span>{children}</span>
      </h2>
      {hint && <p className="mt-1 text-[13px] text-muted sm:ml-11">{hint}</p>}
    </>
  );
}

// The "Let's Talk" / Start a Project form.
export default function ProjectForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState(makeReference);

  const set = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const validate = () => ({
    name: validateName(values.name),
    phone: validatePhone(values.phone, values.countryCode),
    email: validateEmail(values.email),
    services: validateRequiredChoice(values.services, "Please choose at least one service."),
    consent: values.consent ? "" : "Please tick this box so we can contact you.",
  });

  const message = useMemo(() => {
    const v = values;
    return [
      `New project enquiry (${reference})`,
      "",
      `Name: ${v.name.trim()}`,
      `Mobile: ${v.countryCode} ${v.phone.trim()}`,
      `Email: ${v.email.trim()}`,
      v.company ? `Company: ${v.company.trim()}` : null,
      `Services: ${v.services.join(", ") || "-"}`,
      v.budget ? `Budget: ${v.budget}` : null,
      v.timeline ? `Start: ${v.timeline}` : null,
      `Preferred contact: ${v.via}`,
      "",
      `Project details: ${v.description.trim() || "-"}`,
    ].filter((l) => l !== null).join("\n");
  }, [values, reference]);
  const link = whatsappLink(message);

  const submit = async (e) => {
    e?.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      document.querySelector('#project-form [aria-invalid="true"], #project-form .err')?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    setSubmitting(true);
    try {
      const cleanPhone = `${values.countryCode || "+91"}${(values.phone || "").replace(/\D/g, "")}`;
      const waNum = `${(values.countryCode || "+91").replace(/\D/g, "")}${(values.phone || "").replace(/\D/g, "")}`;

      await sendLeadEmail({
        form_type: "Start a Project Enquiry",
        name: values.name.trim(),
        business: values.company.trim() || "-",
        phone: `${values.countryCode || "+91"} ${values.phone.trim()}`,
        clean_phone: cleanPhone,
        whatsapp_num: waNum,
        email: values.email.trim(),
        via: values.via || "WhatsApp",
        needs: values.services.join(", ") || "-",
        budget: values.budget || "-",
        timeline_or_goal: values.timeline || "-",
        extra_info: values.company || "-",
        message: values.description.trim() || "No additional message.",
      });
    } catch (err) {
      console.error("Email send failed:", err);
    } finally {
      setSubmitting(false);
      const summary = [
        ["Name", values.name], ["Mobile", `${values.countryCode} ${values.phone}`], ["Email", values.email],
        values.company && ["Company", values.company], ["Services", values.services.join(", ")],
        values.budget && ["Budget", values.budget], values.timeline && ["Start", values.timeline], ["Contact via", values.via],
      ].filter(Boolean);
      setDone({ name: values.name.trim().split(" ")[0], summary, message, link });
      setTimeout(() => {
        const formCard = document.getElementById("project-form-wrap");
        if (formCard) {
          formCard.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  if (done) {
    return (
      <SuccessMessage
        name={done.name}
        reference={reference}
        summary={done.summary}
        message={done.message}
        link={done.link}
        onReset={() => { setValues(INITIAL); setErrors({}); setDone(null); setReference(makeReference()); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      />
    );
  }

  const toggleService = (key) => set("services", values.services.includes(key) ? values.services.filter((s) => s !== key) : [...values.services, key]);

  return (
    <form id="project-form" noValidate onSubmit={submit}>
      {/* 1. Details */}
      <section>
        <SectionTitle n="1" hint="So we know who to contact.">Your details</SectionTitle>
        <div className="mt-[18px] grid gap-4 sm:grid-cols-2">
          <FormField field={{ type: "text", name: "name", label: "Full name", required: true, icon: "user", placeholder: "e.g. Ravi Kumar", autoComplete: "name", full: true }} values={values} errors={errors} onChange={set} idPrefix="p" />
          <FormField field={{ type: "tel", name: "phone", label: "Mobile number", required: true }} values={values} errors={errors} onChange={set} idPrefix="p" />
          <FormField field={{ type: "email", name: "email", label: "Email address", required: true }} values={values} errors={errors} onChange={set} idPrefix="p" />
          <FormField field={{ type: "text", name: "company", label: "Company / brand name", icon: "brief", placeholder: "Your business name", autoComplete: "organization", full: true }} values={values} errors={errors} onChange={set} idPrefix="p" />
        </div>
      </section>

      {/* 2. Services */}
      <section className="mt-7 border-t border-dashed border-line pt-7">
        <SectionTitle n="2" hint="Choose one or more services.">
          What do you need from Ylet? <span className="req">*</span>
        </SectionTitle>
        <div className="mt-[18px] grid grid-cols-2 gap-3 min-[760px]:grid-cols-3" role="group" aria-label="Services">
          {PROJECT_OPTIONS.map((o) => {
            const on = values.services.includes(o.key);
            return (
              <label key={o.key} className="relative block cursor-pointer">
                <input type="checkbox" className="peer absolute h-px w-px opacity-0" checked={on} onChange={() => toggleService(o.key)} />
                <span className={`flex h-full flex-col gap-2 rounded-2xl border-[1.5px] p-4 transition peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-violet ${on ? "border-violet bg-lav shadow-[0_10px_24px_-18px_rgba(109,63,192,.8)]" : "border-line bg-white hover:border-lav-2"}`}>
                  <span className={`grid h-[42px] w-[42px] place-items-center rounded-xl transition ${on ? "bg-violet text-white" : "bg-lav text-violet"}`}>
                    <Icon name={o.icon} className="h-[21px] w-[21px]" strokeWidth={1.5} />
                  </span>
                  <b className="text-[14.5px] font-semibold text-espresso">{o.key}</b>
                  <small className="text-xs leading-snug text-muted">{o.desc}</small>
                  <span className={`absolute right-3 top-3 grid h-[22px] w-[22px] place-items-center rounded-[7px] border-[1.5px] text-white transition ${on ? "border-violet bg-violet" : "border-sand"}`}>
                    {on && <Icon name="check" className="h-3.5 w-3.5" />}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
        {errors.services && <p className="err mt-2.5">{errors.services}</p>}
        <div className="mt-[18px] grid gap-4 sm:grid-cols-2">
          <FormField field={{ type: "select", name: "budget", label: "Estimated budget", options: BUDGETS }} values={values} errors={errors} onChange={set} idPrefix="p" />
          <FormField field={{ type: "select", name: "timeline", label: "When do you want to start?", options: START_TIMES }} values={values} errors={errors} onChange={set} idPrefix="p" />
        </div>
      </section>

      {/* 3. Description */}
      <section className="mt-7 border-t border-dashed border-line pt-7">
        <SectionTitle n="3" hint="Your idea, goals, features you have in mind or websites you like.">
          Tell us about your project <span className="text-[13px] font-normal text-muted">(optional)</span>
        </SectionTitle>
        <div className="mt-[18px] grid gap-4 sm:grid-cols-2">
          <FormField
            field={{ type: "textarea", name: "description", label: "Project description", placeholder: "e.g. I run a clothing store in Hyderabad and need an online shop with payments and Instagram marketing." }}
            values={values}
            errors={errors}
            onChange={set}
            idPrefix="p"
          />
          <ContactMethod value={values.via} onChange={(v) => set("via", v)} />
        </div>
        <label className="mt-[22px] flex cursor-pointer items-start gap-3 text-[13.5px]">
          <input type="checkbox" className="mt-0.5 h-5 w-5 flex-none accent-violet" checked={values.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={Boolean(errors.consent)} />
          <span>I agree to be contacted by Ylet about this enquiry. <span className="req">*</span></span>
        </label>
        {errors.consent && <p className="err mt-2.5">{errors.consent}</p>}
      </section>

      <div className="mt-[26px] flex flex-col gap-2.5">
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-violet min-h-[56px] w-full rounded-[14px] text-[15.5px] disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending Project Enquiry..." : "Submit Project Enquiry"} <Icon name="arrow" />
        </button>
        <small className="text-center text-[12.5px] text-muted">
          By submitting, your enquiry is delivered directly to the Ylet team. We reply within one working day.
        </small>
      </div>
    </form>
  );
}
