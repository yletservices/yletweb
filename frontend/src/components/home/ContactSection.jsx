import { useState } from "react";
import LogoMark from "../ui/LogoMark";
import Icon from "../ui/Icon";
import EnquiryModal from "../forms/EnquiryModal";

const BUTTONS = [
  { key: "marketing", title: "Digital Marketing", sub: "Social media, SEO, ads & content", icon: "mkt", cls: "bg-violet-grad shadow-[0_18px_36px_-20px_rgba(109,63,192,.8)] hover:shadow-[0_26px_44px_-22px_rgba(109,63,192,.9)]" },
  { key: "it", title: "IT Solutions", sub: "Websites, apps & custom software", icon: "it", cls: "bg-espresso-grad shadow-[0_18px_36px_-20px_rgba(28,21,18,.8)] hover:shadow-[0_26px_44px_-22px_rgba(28,21,18,.9)]" },
];

export default function ContactSection() {
  const [form, setForm] = useState(null);

  return (
    <section id="contact" className="section pt-0">
      <div className="wrap">
        <div className="reveal relative overflow-hidden rounded-[28px] border border-lav-2 bg-[linear-gradient(160deg,#F2ECFC_0%,#FFFCF8_60%,#F6EEDF_100%)] px-[clamp(18px,4vw,56px)] py-[clamp(34px,5vw,64px)]">
          <LogoMark className="pointer-events-none absolute -bottom-[60px] -right-10 w-[min(380px,60vw)] text-violet/[.06]" />
          <div className="section-head !mb-0">
            <span className="eyebrow">Get in touch</span>
            <h2 className="text-[30px] md:text-[52px]">
              Contact <span className="script text-[1.35em] leading-[.8] text-violet">Us</span>
            </h2>
            <p className="mx-auto mt-2 max-w-[56ch] text-muted">
              Tell us what you need and the right Ylet team will get back to you within one working day. Choose a service to get started.
            </p>
          </div>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            {BUTTONS.map((b) => (
              <button
                key={b.key}
                type="button"
                onClick={() => setForm(b.key)}
                className={`group flex min-w-[min(330px,100%)] flex-[0_1_360px] items-center gap-4 rounded-[20px] py-4 pl-4 pr-[18px] text-left text-white transition duration-300 hover:-translate-y-1 max-[480px]:basis-full ${b.cls}`}
              >
                <span className="grid h-[54px] w-[54px] flex-none place-items-center rounded-2xl bg-white/15 text-gold-light">
                  <Icon name={b.icon} className="h-[26px] w-[26px]" strokeWidth={1.5} />
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-[16.5px] font-semibold md:text-lg">{b.title}</b>
                  <small className="mt-0.5 block text-[13px] opacity-80">{b.sub}</small>
                </span>
                <Icon name="arrow" className="h-[22px] w-[22px] flex-none transition group-hover:translate-x-1.5" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <EnquiryModal formKey={form} onClose={() => setForm(null)} />
    </section>
  );
}
