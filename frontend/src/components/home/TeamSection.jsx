import { TEAM } from "../../data/content";
import useAutoplay from "../../hooks/useAutoplay";
import useSwipe from "../../hooks/useSwipe";
import SectionHeading from "../ui/SectionHeading";
import ProgressDots from "../ui/ProgressDots";
import Icon from "../ui/Icon";

const DELAY = 3000; // team members change every 3 seconds

export default function TeamSection() {
  const [index, go] = useAutoplay(TEAM.length, DELAY);
  const swipe = useSwipe(() => go(index + 1), () => go(index - 1), 40);

  return (
    <section id="team" className="section pt-0">
      <div className="wrap">
        <SectionHeading eyebrow="Our Team" title="The people" script="behind Ylet" />
        <div className="reveal overflow-hidden rounded-[26px]" aria-roledescription="carousel" aria-label="Team members" {...swipe}>
          <div className="flex transition-transform duration-700 ease-brand" style={{ transform: `translateX(-${index * 100}%)` }}>
            {TEAM.map((m, i) => (
              <article
                key={i}
                aria-hidden={i !== index}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${TEAM.length}`}
                className="relative grid min-h-[420px] flex-[0_0_100%] content-center justify-items-center gap-[clamp(22px,4vw,56px)] overflow-hidden bg-espresso p-[clamp(24px,4.5vw,56px)] text-center text-[#D9CCBF] sm:min-h-[300px] sm:grid-cols-[auto_1fr] sm:items-center sm:justify-items-start sm:text-left"
              >
                <span className="absolute -right-[90px] -top-[90px] h-[300px] w-[300px] rounded-full border border-gold-light/20" />
                <div className="aspect-square w-[clamp(130px,20vw,220px)] rounded-full bg-[conic-gradient(from_200deg,#6D3FC0,#D7B26E,#8B5CF6,#6D3FC0)] p-1">
                  <span className="grid h-full w-full place-items-center overflow-hidden rounded-full border-4 border-espresso bg-[#2E2420] text-[#8E7F72]">
                    {m.photo ? <img src={m.photo} alt={`Portrait of ${m.name}`} className="h-full w-full object-cover" /> : <Icon name="user" className="h-[40%] w-[40%]" strokeWidth={1.2} />}
                  </span>
                </div>
                <div className="relative">
                  <div className="text-xs font-semibold uppercase tracking-[.2em] text-gold-light">{m.role}</div>
                  <h3 className="mt-2 text-2xl text-white md:text-[40px]">{m.name}</h3>
                  <p className="mx-auto mt-3 max-w-[56ch] text-[15px] sm:mx-0">{m.bio}</p>
                  {m.featured && <span className="script mt-3 block text-[28px] leading-none text-[#C9B2F5] md:text-[38px]">Let’s build something amazing.</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
        <ProgressDots className="mt-3.5" count={TEAM.length} active={index} onSelect={go} duration={DELAY} labels={TEAM.map((m) => `Show ${m.name}`)} track="#E3D5C3" fill="#6D3FC0" />
      </div>
    </section>
  );
}
