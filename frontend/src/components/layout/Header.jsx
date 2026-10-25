import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../data/content";
import useSectionNav from "../../hooks/useSectionNav";
import useScrollSpy from "../../hooks/useScrollSpy";
import Logo from "../ui/Logo";
import Icon from "../ui/Icon";
import MobileDrawer from "./MobileDrawer";

const SPY_IDS = ["home", "about", "services", "work", "why", "team", "contact"];
const SPY_ALIASES = { work: "services", why: "about", team: "about" };

export default function Header() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const goTo = useSectionNav();
  const active = useScrollSpy(SPY_IDS, SPY_ALIASES, onHome);
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 bg-paper/95 backdrop-blur-md transition-shadow ${
          shadow ? "shadow-[0_1px_0_#E8DDD0,0_12px_30px_-20px_rgba(28,21,18,.35)]" : "shadow-[0_1px_0_#E8DDD0]"
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="wrap grid h-[66px] grid-cols-[auto_1fr] items-center gap-4 md:h-[76px] min-[861px]:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-start">
            <Logo />
          </div>

          {/* Centre navigation (desktop) */}
          <nav aria-label="Main" className="hidden items-center gap-1 justify-self-center rounded-full border border-line bg-ivory p-1.5 min-[861px]:flex">
            {NAV_LINKS.map((l) => {
              const isOn = onHome && active === l.id;
              return (
                <a
                  key={l.id}
                  href={l.id === "home" ? "/" : `/#${l.id}`}
                  onClick={goTo(l.id)}
                  aria-current={isOn ? "true" : undefined}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium leading-none transition ${
                    isOn ? "bg-violet text-white shadow-[0_8px_18px_-10px_rgba(109,63,192,.8)]" : "text-espresso hover:bg-paper hover:text-violet"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Right corner: Let's Talk + menu */}
          <div className="flex items-center gap-2.5 justify-self-end">
            <Link
              to="/start-project"
              className={`btn btn-violet min-h-[42px] whitespace-nowrap rounded-full px-4 text-[13px] md:min-h-[46px] md:px-6 md:text-sm ${
                pathname === "/start-project" ? "!bg-espresso" : ""
              }`}
            >
              Let’s Talk <Icon name="arrow" className="hidden h-4 w-4 min-[341px]:block" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-[46px] w-[46px] place-items-center rounded-[14px] bg-lav text-violet min-[861px]:hidden"
            >
              <Icon name="menu" className="h-[22px] w-[22px]" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>
      <MobileDrawer open={open} onClose={() => setOpen(false)} active={onHome ? active : ""} />
    </>
  );
}
