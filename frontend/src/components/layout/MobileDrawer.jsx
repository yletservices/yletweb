import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CONTACT, NAV_LINKS } from "../../data/content";
import useSectionNav from "../../hooks/useSectionNav";
import useLockBody from "../../hooks/useLockBody";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";

// Slide-in menu from the right for phones and tablets.
export default function MobileDrawer({ open, onClose, active }) {
  const goTo = useSectionNav();
  const closeBtn = useRef(null);
  useLockBody(open);

  useEffect(() => {
    if (!open) return undefined;
    setTimeout(() => closeBtn.current?.focus(), 50);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 861px)");
    const onMq = (e) => e.matches && onClose();
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[80] bg-espresso/55 backdrop-blur-[2px] transition-opacity duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      />
      <aside
        aria-label="Menu"
        inert={open ? undefined : ""}
        className={`fixed inset-y-0 right-0 z-[81] flex w-[min(360px,88vw)] flex-col bg-paper shadow-[-20px_0_50px_-20px_rgba(0,0,0,.35)] transition-transform duration-500 ease-brand ${
          open ? "translate-x-0" : "translate-x-[102%]"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-center justify-between border-b border-line py-3.5 pl-[18px] pr-4">
          <Logo onClick={onClose} small />
          <button ref={closeBtn} type="button" onClick={onClose} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-xl bg-lav text-violet">
            <Icon name="close" strokeWidth={1.8} />
          </button>
        </div>

        <div className="no-scrollbar flex-1 overflow-y-auto overscroll-contain p-4">
          <Link to="/start-project" onClick={onClose} className="relative block overflow-hidden rounded-2xl bg-violet-grad p-[18px] text-white">
            <span className="absolute -right-8 -top-8 h-[120px] w-[120px] rounded-full border border-white/25" />
            <small className="text-[10.5px] font-semibold uppercase tracking-[.2em] text-gold-light">Have an idea?</small>
            <b className="mb-1 mt-2 block text-lg">Let’s Talk →</b>
            <span className="text-[13px] opacity-85">Share your project requirements in 2 minutes.</span>
          </Link>

          <h5 className="mb-1.5 mt-[18px] px-1.5 text-[11px] font-semibold uppercase tracking-[.2em] text-muted">Explore</h5>
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={l.id === "home" ? "/" : `/#${l.id}`}
              onClick={(e) => {
                onClose();
                goTo(l.id)(e);
              }}
              className={`flex items-center gap-3.5 rounded-xl px-2 py-3 text-[15px] font-medium transition ${
                active === l.id ? "bg-lav text-violet-deep" : "text-espresso hover:bg-lav"
              }`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-ivory text-violet">
                <Icon name={l.icon} className="h-[18px] w-[18px]" />
              </span>
              {l.label}
              <Icon name="right" className="ml-auto h-4 w-4 text-muted" />
            </a>
          ))}
        </div>

        <div className="grid gap-1 border-t border-line px-[18px] py-4 text-[13px] text-muted">
          <span>Call or WhatsApp</span>
          <b className="font-semibold text-espresso">{CONTACT.phone}</b>
          <span>{CONTACT.email} · Hyderabad</span>
        </div>
      </aside>
    </>
  );
}
