import { useEffect, useState } from "react";
import { PROMO_MESSAGES } from "../../data/content";

// Thin violet strip at the very top with rotating messages.
export default function PromoBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % PROMO_MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative z-[61] bg-violet-deep text-[11.5px] text-[#EDE4FB] md:text-[12.5px]">
      <div className="wrap flex min-h-[38px] items-center justify-center">
        <div className="relative h-5 w-full overflow-hidden">
          {PROMO_MESSAGES.map((m, k) => (
            <span
              key={k}
              className={`absolute inset-0 truncate text-center leading-5 transition-all duration-500 ease-brand ${
                k === i ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
            >
              ✦ {m.lead && <b className="font-semibold text-gold-light">{m.lead}</b>} {m.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
