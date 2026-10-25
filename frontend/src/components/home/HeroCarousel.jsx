import { BANNERS } from "../../data/content";
import useAutoplay from "../../hooks/useAutoplay";
import useSwipe from "../../hooks/useSwipe";
import useSectionNav from "../../hooks/useSectionNav";
import ProgressDots from "../ui/ProgressDots";
import Icon from "../ui/Icon";

const DELAY = 5000; // banners change every 5 seconds

export default function HeroCarousel() {
  const [index, go] = useAutoplay(BANNERS.length, DELAY);
  const swipe = useSwipe(() => go(index + 1), () => go(index - 1));
  const goTo = useSectionNav();

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Ylet highlights"
      className="relative overflow-hidden"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      {...swipe}
    >
      <div className="flex transition-transform duration-700 ease-brand" style={{ transform: `translateX(-${index * 100}%)` }}>
        {BANNERS.map((b, i) => {
          const on = i === index;
          const Heading = i === 0 ? "h1" : "h2";
          return (
            <article
              key={b.tag}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${BANNERS.length}: ${b.tag}`}
              aria-hidden={!on}
              className="relative h-[min(500px,124vw)] flex-[0_0_100%] overflow-hidden bg-espresso sm:h-[clamp(460px,46vw,640px)]"
            >
              <img
                src={b.image}
                alt={b.alt}
                fetchpriority={i === 0 ? "high" : "low"}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[6000ms] ease-linear ${on ? "scale-100" : "scale-[1.06]"}`}
                style={{ objectPosition: b.pos }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(28,21,18,.95)_0%,rgba(40,20,70,.7)_50%,rgba(28,21,18,.15)_100%)] sm:bg-[linear-gradient(90deg,rgba(28,21,18,.92)_0%,rgba(40,20,70,.62)_48%,rgba(28,21,18,.05)_100%)]" />

              {on && (
                <div className="wrap relative z-[2] flex h-full flex-col justify-end pb-14 pt-10 sm:justify-center sm:pb-[70px]">
                  <span className="max-w-fit animate-rise rounded-full border border-white/20 bg-white/10 px-3.5 py-[7px] text-[11px] font-semibold uppercase tracking-[.18em] text-gold-light backdrop-blur">
                    {b.tag}
                  </span>
                  <Heading className="mb-3.5 mt-[18px] max-w-[620px] animate-rise text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-white [animation-delay:.08s] md:text-[clamp(32px,4.6vw,62px)]">
                    {b.title}
                    <span className="script block text-[1.25em] leading-[.95] text-gold-light">{b.script}</span>
                  </Heading>
                  <p className="max-w-[44ch] animate-rise text-[13.5px] text-white/85 [animation-delay:.16s] md:text-base">{b.text}</p>
                  <div className="mt-6 flex animate-rise flex-wrap gap-2.5 [animation-delay:.24s]">
                    <a href={`/#${b.cta.to}`} onClick={goTo(b.cta.to)} className="btn btn-light">
                      {b.cta.label} <Icon name="arrow" />
                    </a>
                  </div>
                  <div className="mt-5 hidden animate-rise flex-wrap gap-2 [animation-delay:.32s] sm:flex">
                    {b.chips.map((c) => (
                      <span key={c} className="rounded-full border border-white/20 bg-violet/55 px-3 py-1.5 text-xs text-white">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <ProgressDots
        className="absolute inset-x-0 bottom-[18px] z-[3]"
        count={BANNERS.length}
        active={index}
        onSelect={go}
        duration={DELAY}
        labels={BANNERS.map((b, i) => `Banner ${i + 1}: ${b.tag}`)}
        track="rgba(255,255,255,.45)"
        fill="#D7B26E"
      />
    </section>
  );
}
