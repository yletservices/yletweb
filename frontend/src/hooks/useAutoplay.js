import { useCallback, useEffect, useRef, useState } from "react";

// Index that advances every `delay` ms; restarts the timer whenever the index changes.
// Pauses while the browser tab is hidden.
export default function useAutoplay(count, delay) {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);
  const timer = useRef();

  const go = useCallback((n) => {
    setIndex(((n % count) + count) % count);
    setTick((t) => t + 1);
  }, [count]);

  useEffect(() => {
    clearTimeout(timer.current);
    if (document.hidden) return undefined;
    timer.current = setTimeout(() => go(index + 1), delay);
    return () => clearTimeout(timer.current);
  }, [index, tick, delay, go]);

  useEffect(() => {
    const onVis = () => setTick((t) => t + 1);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return [index, go];
}
