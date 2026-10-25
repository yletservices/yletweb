import { useRef, useState } from "react";
import { PROJECTS, SERVICES } from "../../data/content";
import { useToast } from "../ui/Toast";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";

const TABS = ["All", ...SERVICES.map((s) => s.key)];

export default function WorkSection() {
  const [tab, setTab] = useState("All");
  const rail = useRef(null);
  const toast = useToast();
  const list = PROJECTS.filter((p) => tab === "All" || p.service === tab);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * rail.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section id="work" className="section pt-0">
      <div className="wrap">
        <SectionHeading eyebrow="Our Work" title="Selected" script="projects" />

        <div className="no-scrollbar mb-5 flex gap-2 overflow-x-auto pb-0.5 [justify-content:safe_center]" role="toolbar" aria-label="Filter projects">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={tab === t}
              onClick={() => {
                setTab(t);
                if (rail.current) rail.current.scrollLeft = 0;
              }}
              className={`min-h-[40px] flex-none rounded-full border px-4 text-[13px] font-medium transition ${
                tab === t ? "border-violet bg-violet text-white" : "border-line bg-paper text-body hover:border-violet hover:text-violet"
              }`}
            >
              {t === "All" ? "All Projects" : t}
            </button>
          ))}
        </div>

        <div ref={rail} className="no-scrollbar flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth px-0.5 pb-[18px] pt-1">
          {list.map((p, i) => (
            <a
              key={`${p.image}-${i}`}
              href={p.link || "#work"}
              {...(p.link ? { target: "_blank", rel: "noopener noreferrer" } : { onClick: (e) => { e.preventDefault(); toast("This case study is coming soon."); } })}
              className="group flex w-[clamp(250px,26vw,320px)] flex-none snap-start flex-col overflow-hidden rounded-[18px] border border-line bg-paper transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgba(62,29,115,.5)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <img src={p.image} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-1000 ease-brand group-hover:scale-[1.07]" />
                <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-violet-deep">{p.service}</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 pb-[18px]">
                <h3 className="text-base">{p.title}</h3>
                <p className="text-[13px] text-muted">{p.note}</p>
                <span className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-violet">
                  View case study <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-1.5 flex justify-center gap-2">
          {[["left", -1, "Scroll projects left"], ["right", 1, "Scroll projects right"]].map(([icon, dir, label]) => (
            <button key={icon} type="button" onClick={() => scroll(dir)} aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper text-espresso transition hover:border-violet hover:bg-violet hover:text-white">
              <Icon name={icon} className="h-[18px] w-[18px]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
