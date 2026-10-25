import { PROCESS, REASONS } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

export default function WhySection() {
  return (
    <section id="why" className="section pt-0">
      <div className="wrap">
        <SectionHeading eyebrow="Why Choose Ylet" title="A team that treats your goals" script="as its own" />

        <div className="grid gap-3 sm:grid-cols-2 min-[980px]:grid-cols-4">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="reveal flex items-start gap-3.5 rounded-[18px] border border-line bg-paper p-5 transition hover:-translate-y-[3px] hover:border-lav-2"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-[14px] bg-lav text-violet">
                <Icon name={r.icon} className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-[15.5px]">{r.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal relative mt-[22px] overflow-hidden rounded-[28px] bg-lav p-[clamp(24px,4vw,48px)]">
          <span className="absolute -bottom-20 -right-20 h-[260px] w-[260px] rounded-full border border-lav-2" />
          <div className="section-head !mb-0">
            <span className="eyebrow">How we work</span>
            <h2 className="text-[22px] md:text-[30px]">
              From first call to <span className="script text-[1.35em] leading-[.8] text-violet">launch day</span>
            </h2>
          </div>
          <ol className="relative z-[1] mt-6 grid gap-4 min-[760px]:grid-cols-2 min-[1100px]:grid-cols-4">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="rounded-[18px] bg-paper p-5">
                <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-violet-grad text-sm font-semibold text-white">0{i + 1}</span>
                <h3 className="mb-1.5 mt-3.5 text-base">{s.title}</h3>
                <p className="text-[13.5px] leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
