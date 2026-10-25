import { Link } from "react-router-dom";
import { CONTACT, FOOTER_LINKS, SERVICES, SOCIALS } from "../../data/content";
import useSectionNav from "../../hooks/useSectionNav";
import { useToast } from "../ui/Toast";
import Icon from "../ui/Icon";

// Rounded dark footer card with the office photo fading in on the right.
export default function Footer() {
  const goTo = useSectionNav();
  const toast = useToast();
  const soon = (what) => (e) => {
    e.preventDefault();
    toast(`${what} is coming soon.`);
  };

  return (
    <div
      className="pt-10 md:pt-20"
      style={{
        paddingLeft: "max(12px, env(safe-area-inset-left))",
        paddingRight: "max(12px, env(safe-area-inset-right))",
        paddingBottom: "calc(12px + env(safe-area-inset-bottom))",
      }}
    >
      <footer id="footer" className="relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-[20px] bg-espresso-footer text-[#CFC3B6] md:rounded-3xl">
        {/* Office photo */}
        <div aria-hidden="true" className="absolute right-0 top-0 -z-10 h-[270px] w-full opacity-80 sm:h-full sm:w-[80%] sm:opacity-70 lg:bottom-0 lg:w-[44%] lg:opacity-100">
          <img src="/img/footer-office.jpg" alt="" loading="lazy" className="h-full w-full object-cover object-[70%_40%] lg:object-[60%_45%]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#141110_5%,rgba(20,17,16,.6)_60%,rgba(20,17,16,.35)_100%)] lg:bg-[linear-gradient(90deg,#141110_0%,rgba(20,17,16,.8)_16%,rgba(20,17,16,.2)_42%,rgba(20,17,16,.05)_100%),linear-gradient(0deg,rgba(20,17,16,.7),transparent_35%)]" />
        </div>

        <div className="px-[22px] pt-9 md:px-16 md:pt-14">
          <div className="grid grid-cols-2 gap-x-[18px] gap-y-7 sm:grid-cols-3 lg:grid-cols-[1.5fr_.9fr_1.1fr_1.2fr] lg:gap-x-12">
            {/* Brand */}
            <div className="col-span-2 min-w-0 pt-1.5 sm:col-span-3 lg:col-span-1">
              <a href="/" onClick={goTo("home")} aria-label="Ylet home" className="inline-block">
                <img
                  src="/img/ylet-logo-light.png"
                  alt="Ylet — Create | Capture | Build. Digital Marketing & IT Solutions"
                  width="900"
                  height="698"
                  className="h-auto w-[210px] lg:w-[clamp(200px,18vw,250px)]"
                />
              </a>
              <p className="mt-[18px] text-[15px] text-[#E7DCCF]">Your partner in digital growth.</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url || "#footer"}
                    {...(s.url ? { target: "_blank", rel: "noopener noreferrer" } : { onClick: soon(`Our ${s.name} page`) })}
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-[10px] text-white transition hover:-translate-y-0.5 hover:bg-gold-light/15 hover:text-gold-light"
                  >
                    <Icon name={s.name} className="h-[18px] w-[18px]" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div className="min-w-0">
              <h4 className="mb-4 mt-1.5 text-[15px] font-semibold tracking-normal text-gold-light">Explore</h4>
              <ul className="grid gap-0.5">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.id}>
                    <a href={`/#${l.id}`} onClick={goTo(l.id)} className="inline-block py-1 text-[13.5px] text-[#E7DCCF] transition hover:translate-x-[3px] hover:text-gold-light md:text-sm">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="min-w-0">
              <h4 className="mb-4 mt-1.5 text-[15px] font-semibold tracking-normal text-gold-light">Services</h4>
              <ul className="grid gap-0.5">
                {SERVICES.map((s) => (
                  <li key={s.key}>
                    <a href="/#services" onClick={goTo("services")} className="inline-block py-1 text-[13.5px] text-[#E7DCCF] transition hover:translate-x-[3px] hover:text-gold-light md:text-sm">
                      {s.key}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 min-w-0 sm:col-span-1">
              <h4 className="mb-4 mt-1.5 text-[15px] font-semibold tracking-normal text-gold-light">Contact</h4>
              <ul className="grid">
                {[
                  ["pin", CONTACT.city],
                  ["phone", CONTACT.phone],
                  ["mail", CONTACT.email],
                ].map(([icon, text]) => (
                  <li key={icon} className="flex items-center gap-3 break-words py-1.5 text-[13.5px] text-[#E7DCCF] md:text-sm">
                    <Icon name={icon} className="h-[18px] w-[18px] flex-none text-gold-light" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-1 border-t border-[#E7DCCF]/15 py-[18px] pb-5 text-[13px] text-[#BFB2A5] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:mt-11">
            <span>© {new Date().getFullYear()} Ylet. All rights reserved.</span>
            <nav aria-label="Legal" className="flex flex-wrap gap-6">
              <Link to="/privacy" className="py-2 transition hover:text-gold-light">Privacy Policy</Link>
              <Link to="/terms" className="py-2 transition hover:text-gold-light">Terms &amp; Conditions</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
