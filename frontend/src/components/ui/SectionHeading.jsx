// Centered section heading: small eyebrow label, title with an optional script word, optional caption.
export default function SectionHeading({ eyebrow, title, script, after, caption, large = false, className = "" }) {
  return (
    <div className={`section-head reveal ${className}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={large ? "text-[30px] md:text-[52px]" : "h2"}>
        {title} {script && <span className="script text-[1.35em] leading-[.8] text-violet">{script}</span>}
        {after && <> {after}</>}
      </h2>
      {caption && <p className="mx-auto mt-2 max-w-[56ch] text-muted">{caption}</p>}
    </div>
  );
}
