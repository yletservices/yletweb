import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  error,
  ariaInvalid,
  isCountry = false,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
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

  // Normalize options to { value, label, sub }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }
    return {
      value: opt.value ?? opt.label,
      label: opt.country ? opt.country : (opt.label ?? opt.value),
      badge: opt.label, // for compact display
      flag: opt.flag,
    };
  });

  const selectedOpt = normalizedOptions.find((o) => o.value === value);

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        name={name}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={ariaInvalid}
        onClick={() => setOpen((prev) => !prev)}
        className={`input flex w-full items-center justify-between text-left transition select-none cursor-pointer ${
          error ? "bad" : ""
        } ${open ? "border-violet ring-2 ring-violet/20" : ""}`}
      >
        <span className="truncate pr-2">
          {selectedOpt ? (
            <span className="flex items-center gap-2 text-espresso font-medium">
              {isCountry ? (selectedOpt.badge || selectedOpt.value) : selectedOpt.label}
            </span>
          ) : (
            <span className="text-muted">{placeholder}</span>
          )}
        </span>
        <span
          className={`grid h-5 w-5 flex-none place-items-center text-muted transition-transform duration-200 ${
            open ? "rotate-180 text-violet" : ""
          }`}
        >
          <Icon name="chevron" className="h-4 w-4" />
        </span>
      </button>

      {/* Dynamic Popover Dropdown Menu */}
      {open && (
        <div
          role="listbox"
          tabIndex={-1}
          className="absolute left-0 top-[calc(100%+6px)] z-[100] max-h-64 w-full min-w-[190px] overflow-y-auto rounded-[18px] border border-line bg-paper p-1.5 shadow-[0_20px_45px_-12px_rgba(20,17,16,0.35)] backdrop-blur-md animate-pop focus:outline-none"
        >
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[14px] cursor-pointer transition select-none ${
                  isSelected
                    ? "bg-lav text-violet font-semibold"
                    : "text-espresso hover:bg-lav/60 hover:text-violet"
                }`}
              >
                <span className="flex items-center gap-2 truncate">
                  {opt.flag && <span className="text-base leading-none">{opt.flag}</span>}
                  <span className="truncate">{opt.label}</span>
                </span>
                {isSelected && (
                  <span className="ml-2 flex-none text-violet">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
