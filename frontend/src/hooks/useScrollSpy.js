import { useEffect, useState } from "react";

// Returns the id of the section currently in view.
// `aliases` maps sub-sections to a nav item (e.g. work -> services).
export default function useScrollSpy(ids, aliases = {}, enabled = true) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!enabled) return undefined;
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= y) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1];
      setActive(aliases[current] || current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, aliases, enabled]);

  return active;
}
