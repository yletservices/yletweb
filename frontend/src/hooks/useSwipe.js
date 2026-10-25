import { useRef } from "react";

// Returns touch handlers that call onLeft / onRight on a horizontal swipe.
export default function useSwipe(onLeft, onRight, threshold = 45) {
  const start = useRef(null);
  return {
    onTouchStart: (e) => {
      start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    },
    onTouchEnd: (e) => {
      if (!start.current) return;
      const dx = e.changedTouches[0].clientX - start.current.x;
      const dy = e.changedTouches[0].clientY - start.current.y;
      if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? onLeft : onRight)();
      start.current = null;
    },
  };
}
