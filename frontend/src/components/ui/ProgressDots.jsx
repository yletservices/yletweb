// Carousel indicators whose active dot fills up over `duration` ms.
export default function ProgressDots({ count, active, onSelect, duration, labels = [], track, fill, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`} role="tablist">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={`${i}-${i === active ? active : "x"}`}
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-label={labels[i] || `Show item ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`pdot ${i === active ? "on" : ""}`}
          style={{ "--dur": `${duration}ms`, "--track": track, "--fill": fill }}
        >
          <i />
        </button>
      ))}
    </div>
  );
}
