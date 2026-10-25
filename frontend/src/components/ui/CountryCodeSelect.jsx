import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { COUNTRY_CODES } from "../../data/forms";

export default function CountryCodeSelect({ value = "+91", onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = COUNTRY_CODES.find((c) => c.value === value) || COUNTRY_CODES[0];

  return (
    <div ref={containerRef} className="relative flex-none self-stretch">
      {/* Trigger Button inside phone input container */}
      <button
        type="button"
        aria-label="Country code"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-full items-center gap-1.5 rounded-l-[10px] border-r border-line bg-cream/35 px-3.5 py-3 text-[14.5px] font-semibold text-espresso transition hover:bg-cream/60 focus:outline-none select-none cursor-pointer"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.value}</span>
        <span
          className={`text-[10px] text-muted transition-transform duration-200 ${
            open ? "rotate-180 text-violet" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Dynamic Animated Menu */}
      {open && (
        <div
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 top-[calc(100%+8px)] z-[100] w-[270px] max-h-64 overflow-y-auto rounded-2xl border border-line bg-paper p-1.5 shadow-[0_20px_45px_-12px_rgba(20,17,16,0.35)] backdrop-blur-md animate-pop focus:outline-none"
        >
          {COUNTRY_CODES.map((c) => {
            const isSelected = c.value === value;
            return (
              <div
                key={c.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(c.value);
                  setOpen(false);
                }}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[14px] cursor-pointer transition select-none ${
                  isSelected
                    ? "bg-lav text-violet font-semibold"
                    : "text-espresso hover:bg-lav/60 hover:text-violet"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base leading-none">{c.flag}</span>
                  <span className="font-medium">{c.country}</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-[13.5px]">
                  <span className="opacity-75">{c.value}</span>
                  {isSelected && (
                    <Icon name="check" className="h-3.5 w-3.5 text-violet" strokeWidth={2.4} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
