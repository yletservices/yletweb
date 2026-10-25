import { ABOUT } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading eyebrow="About Ylet" title="Your growth partner for the" script="digital world" />
        <div className="reveal grid overflow-hidden rounded-[28px] bg-espresso text-[#EADFD2] min-[900px]:grid-cols-[.9fr_1.1fr]">
          <div className="relative min-h-[320px]">
            <img src="/img/about.jpg" alt="The Ylet team collaborating" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[40%_40%]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(28,21,18,.75),transparent_50%)]" />
            <div className="absolute inset-x-5 bottom-5 z-[2] text-white">
              <span className="script text-[30px] leading-none text-gold-light md:text-[42px]">Let’s build something amazing.</span>
              <small className="mt-1.5 block text-xs tracking-wide text-[#EADFD2]">{ABOUT.founder} · Founder, Ylet</small>
            </div>
          </div>
          <div className="p-[clamp(26px,4.5vw,56px)]">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className={`max-w-[58ch] text-[#D9CCBF] ${i ? "mt-3.5" : ""}`}>{p}</p>
            ))}
            <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
              {ABOUT.values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-gold-light/20 bg-white/5 p-4">
                  <b className="text-gold-grad block text-xs uppercase tracking-[.22em]">{v.title}</b>
                  <span className="mt-1.5 block text-[13px] leading-relaxed text-[#CDBFB1]">{v.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4 border-t border-gold-light/20 pt-5">
              {ABOUT.facts.map((f) => (
                <div key={f.text} className="flex items-center gap-2.5 text-[13.5px]">
                  <Icon name={f.icon} className="h-5 w-5 text-gold-light" />
                  {f.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
