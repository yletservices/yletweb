import { MARQUEE } from "../../data/content";
import useSectionNav from "../../hooks/useSectionNav";
import Icon from "../ui/Icon";

// Endless scrolling band of service names (the list is rendered twice for a seamless loop).
export default function ServiceMarquee() {
  const goTo = useSectionNav();
  const items = (hidden) =>
    MARQUEE.map((m, i) => (
      <span key={`${hidden}-${i}`} className="flex flex-none items-center" aria-hidden={hidden || undefined}>
        <a
          href="/#services"
          onClick={goTo("services")}
          tabIndex={hidden ? -1 : undefined}
          className="inline-flex items-center gap-3 whitespace-nowrap px-6 text-[15px] font-medium text-white transition hover:text-gold-light md:text-xl"
        >
          <Icon name={m.icon} className="h-[22px] w-[22px] text-gold-light" />
          {m.label}
        </a>
        <span className="h-2 w-2 rotate-45 bg-gold-grad" />
      </span>
    ));

  return (
    <div
      aria-label="Our services"
      className="group relative mt-7 overflow-hidden bg-violet-grad py-4 md:mt-12 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {items(false)}
        {items(true)}
      </div>
    </div>
  );
}
