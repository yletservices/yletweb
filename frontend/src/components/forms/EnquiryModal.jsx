import { useEffect, useRef } from "react";
import { CONTACT } from "../../data/content";
import { ENQUIRY_FORMS } from "../../data/forms";
import useLockBody from "../../hooks/useLockBody";
import LogoMark from "../ui/LogoMark";
import Icon from "../ui/Icon";
import EnquiryForm from "./EnquiryForm";

// Pop-up (full screen on phones) containing the Digital Marketing or IT Solutions form.
export default function EnquiryModal({ formKey, onClose }) {
  const open = Boolean(formKey);
  const def = open ? ENQUIRY_FORMS[formKey] : null;
  const panel = useRef(null);
  useLockBody(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    if (window.matchMedia("(min-width: 761px)").matches) setTimeout(() => panel.current?.querySelector("input")?.focus(), 60);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-espresso/70 backdrop-blur-sm md:p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative grid h-[100dvh] w-full animate-pop grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-paper shadow-[0_50px_100px_-40px_rgba(0,0,0,.6)] min-[761px]:h-[min(860px,calc(100dvh-32px))] min-[761px]:w-[min(980px,calc(100vw-32px))] min-[761px]:grid-cols-[.8fr_1.2fr] min-[761px]:grid-rows-1 min-[761px]:rounded-[26px]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="absolute right-3.5 top-3.5 z-[3] grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-espresso/35 text-white transition hover:rotate-90 min-[761px]:border-line min-[761px]:bg-paper min-[761px]:text-espresso"
          style={{ top: "calc(14px + env(safe-area-inset-top))" }}
        >
          <Icon name="close" className="h-[18px] w-[18px]" strokeWidth={1.7} />
        </button>

        {/* Side panel */}
        <aside className="relative flex items-center gap-3.5 overflow-hidden bg-violet-grad py-4 pl-5 pr-[70px] text-[#EDE4FB] min-[761px]:flex-col min-[761px]:items-start min-[761px]:gap-4 min-[761px]:px-8 min-[761px]:py-[38px]" style={{ paddingTop: "calc(16px + env(safe-area-inset-top))" }}>
          <span className="absolute -bottom-[70px] -right-[70px] hidden h-60 w-60 rounded-full border border-white/20 min-[761px]:block" />
          <LogoMark className="w-11 flex-none text-white min-[761px]:w-[62px]" />
          <h2 className="text-[17px] text-white min-[761px]:text-[28px]">
            {def.sideTitle}
            <span className="script block text-[1.5em] font-normal leading-none text-gold-light min-[761px]:text-[1.4em]">{def.sideScript}</span>
          </h2>
          <p className="hidden text-sm text-white/85 min-[761px]:block">{def.sideText}</p>
          <ul className="mt-auto hidden w-full gap-3 border-t border-white/20 pt-[18px] min-[761px]:grid">
            {[
              ["phone", "Call / WhatsApp", CONTACT.phone],
              ["mail", "Email", CONTACT.email],
              ["pin", "Office", CONTACT.city],
              ["clock", "Working hours", CONTACT.hours],
            ].map(([icon, label, value]) => (
              <li key={label} className="flex items-center gap-3 break-words text-sm text-white">
                <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-white/15 text-gold-light">
                  <Icon name={icon} className="h-[17px] w-[17px]" />
                </span>
                <span>
                  <small className="block text-[11px] opacity-75">{label}</small>
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Form */}
        <div className="no-scrollbar overflow-y-auto overscroll-contain px-[18px] pb-[calc(26px+env(safe-area-inset-bottom))] pt-[22px] min-[761px]:px-10 min-[761px]:pb-7 min-[761px]:pt-[34px]">
          <h3 id="enquiry-title" className="text-xl min-[761px]:pr-12 min-[761px]:text-2xl">{def.title}</h3>
          <p className="mb-5 mt-1 text-sm text-muted">
            {def.lead} Fields marked <span className="req">*</span> are required.
          </p>
          <EnquiryForm key={formKey} definition={def} formKey={formKey} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
