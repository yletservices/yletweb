import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../data/content";
import ProjectForm from "../components/forms/ProjectForm";
import LogoMark from "../components/ui/LogoMark";
import Icon from "../components/ui/Icon";

const NEXT_STEPS = [
  { title: "We review your enquiry", text: "Our team reads your requirements carefully." },
  { title: "We call you", text: "A short call to understand your goals and answer questions." },
  { title: "You get a proposal", text: "Clear scope, timeline and cost, so you can decide with confidence." },
];

export default function StartProject() {
  useEffect(() => {
    document.title = "Let’s Talk — Start a Project | Ylet";
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="wrap">
      <nav aria-label="Breadcrumb" className="pt-[22px] text-[13px] text-muted">
        <Link to="/" className="text-violet hover:underline">Home</Link> / Start a Project
      </nav>

      <section className="relative mt-3.5 overflow-hidden rounded-[26px] bg-violet-grad p-[clamp(26px,4.5vw,52px)] text-white">
        <LogoMark className="absolute -bottom-10 -right-8 w-[min(360px,60vw)] text-white/[.08]" />
        <span className="eyebrow left !text-gold-light">Start a Project</span>
        <h1 className="relative mt-3 text-[30px] text-white md:text-[clamp(30px,4.4vw,54px)]">
          Let’s bring your idea <span className="script text-[1.25em] font-normal text-gold-light">to life</span>
        </h1>
        <p className="relative mt-2.5 max-w-[60ch] text-white/90">
          Tell us a little about yourself and what you’d like to build. Our team will review your requirements and contact you within one working day.
        </p>
        <div className="relative mt-[22px] flex flex-wrap gap-x-[22px] gap-y-2.5 text-[13.5px]">
          {["Free consultation", "Reply within 1 working day", "No obligation"].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <Icon name="check" className="h-[18px] w-[18px] text-gold-light" /> {t}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-[22px] grid items-start gap-[22px] min-[1000px]:grid-cols-[minmax(0,1fr)_340px]">
        <div id="project-form-wrap" className="rounded-[22px] border border-line bg-paper p-[clamp(20px,3vw,34px)]">
          <ProjectForm />
        </div>

        <aside className="grid gap-4 min-[1000px]:sticky min-[1000px]:top-[100px]">
          <div className="relative overflow-hidden rounded-[22px] bg-espresso p-6 text-[#D9CCBF]">
            <h3 className="text-lg text-white">What happens next?</h3>
            <ol className="mt-4 grid gap-3.5">
              {NEXT_STEPS.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[30px_minmax(0,1fr)] gap-3 text-[13.5px] leading-relaxed">
                  <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-gold-grad text-[13px] font-semibold text-espresso">{i + 1}</span>
                  <div><b className="block font-medium text-white">{s.title}</b>{s.text}</div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[22px] border border-line bg-paper p-[22px]">
            <h3 className="mb-2.5 text-base">Prefer to talk directly?</h3>
            {[
              ["whatsapp", "WhatsApp", CONTACT.phone, `https://wa.me/${CONTACT.whatsapp}`],
              ["phone", "Call us", CONTACT.phone],
              ["mail", "Email", CONTACT.email],
              ["pin", "Office", CONTACT.city],
            ].map(([icon, label, value, href]) => {
              const Tag = href ? "a" : "div";
              return (
                <Tag
                  key={label}
                  {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 break-words border-t border-line py-2.5 text-sm text-espresso first-of-type:border-t-0"
                >
                  <span className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[11px] bg-lav text-violet">
                    <Icon name={icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span><small className="block text-[11px] tracking-wide text-muted">{label}</small>{value}</span>
                </Tag>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
