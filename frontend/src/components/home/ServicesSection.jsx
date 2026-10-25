import { SERVICES } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

export default function ServicesSection() {
  return (
    <section id="services" className="section pt-0">
      <div className="wrap">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need to"
          script="grow online"
          caption="Four focused services, delivered by one team that understands both marketing and technology."
        />
        <div className="grid gap-[18px] min-[700px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.key}
              className="reveal group flex flex-col overflow-hidden rounded-[20px] border border-line bg-paper transition duration-500 hover:-translate-y-1.5 hover:border-lav-2 hover:shadow-[0_30px_50px_-32px_rgba(62,29,115,.55)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition duration-1000 ease-brand group-hover:scale-[1.07]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(28,21,18,.55),transparent_55%)]" />
                <span className={`absolute left-3.5 top-3.5 z-[2] rounded-full px-[11px] py-[7px] text-[10.5px] font-semibold uppercase tracking-[.12em] ${s.badgeGold ? "bg-gold-grad text-espresso" : "bg-violet text-white"}`}>
                  {s.badge}
                </span>
                <span className="absolute bottom-3.5 left-4 z-[2] grid h-[46px] w-[46px] place-items-center rounded-[14px] bg-white/90 text-violet">
                  <Icon name={s.icon} className="h-[22px] w-[22px]" strokeWidth={1.5} />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 px-[18px] pb-5 pt-[18px]">
                <h3 className="text-[19px]">{s.key}</h3>
                <p className="text-sm">{s.desc}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {s.items.map((x) => (
                    <li key={x} className="rounded-full bg-lav px-2.5 py-[5px] text-xs text-violet-deep">{x}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
