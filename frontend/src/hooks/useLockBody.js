import { useEffect } from "react";

// Prevents the page behind an open menu / modal from scrolling.
export default function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [locked]);
}
