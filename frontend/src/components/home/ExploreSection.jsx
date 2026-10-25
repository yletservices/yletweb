import { EXPLORE } from "../../data/content";
import useSectionNav from "../../hooks/useSectionNav";
import SectionHeading from "../ui/SectionHeading";

export default function ExploreSection() {
  const goTo = useSectionNav();
  return (
    <section className="section pb-0">
      <div className="wrap">
        <SectionHeading eyebrow="Explore" title="What can we" script="build" after="for you?" large />
        <div className="reveal mx-auto grid max-w-[900px] grid-cols-4 gap-[clamp(10px,3vw,40px)]">
          {EXPLORE.map((e) => (
            <a key={e.title} href="/#services" onClick={goTo("services")} className="group block min-w-0 text-center">
              <span className="block aspect-square w-full rounded-full bg-[conic-gradient(from_210deg,#6D3FC0,#D7B26E,#8B5CF6,#6D3FC0)] p-[3px] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_30px_-18px_rgba(109,63,192,.7)]">
                <span className="block h-full w-full overflow-hidden rounded-full border-[3px] border-paper bg-cream">
                  <img src={e.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </span>
              </span>
              <b className="mt-2 block text-[12px] font-semibold leading-tight text-espresso md:mt-3 md:text-base">{e.title}</b>
              <small className="mt-0.5 hidden text-[13px] leading-snug text-muted sm:block">{e.sub}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
