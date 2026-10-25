import { useEffect } from "react";

// Fades in `.reveal` elements as they scroll into view.
// Elements already on screen at load stay visible (no flash of hidden content).
export default function useReveal(deps = []) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.remove("hidden-state");
          io.unobserve(en.target);
        }
      }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add("hidden-state");
        io.observe(el);
      }
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
