import { COUNTRY_CODES } from "../../data/forms";
import Icon from "../ui/Icon";

// Renders one form field from a definition object (see data/forms.js).
// values / errors are plain objects keyed by field name; onChange(name, value).
export default function FormField({ field, values, errors, onChange, onBlur, idPrefix }) {
  const id = `${idPrefix}-${field.name}`;
  const error = errors[field.name];
  const tag = field.required ? <span className="req"> *</span> : <span className="opt"> (optional)</span>;
  const full = field.full || field.type === "chips" || field.type === "textarea" ? "sm:col-span-2" : "";

  if (field.type === "chips") {
    const selected = values[field.name] || [];
    const toggle = (opt) => onChange(field.name, selected.includes(opt) ? selected.filter((o) => o !== opt) : [...selected, opt]);
    return (
      <div className={`field ${full}`} role="group" aria-labelledby={`${id}-label`}>
        <span className="label" id={`${id}-label`}>
          {field.label}
          {tag} <span className="opt">(choose one or more)</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {field.options.map((opt) => (
            <label key={opt} className="pill relative">
              <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} />
              <span>{opt}</span>
            </label>
          ))}
        </div>
        {error && <span className="err">{error}</span>}
      </div>
    );
  }

  if (field.type === "tel") {
    return (
      <div className={`field ${full}`}>
        <label htmlFor={id}>{field.label}{tag}</label>
        <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-2">
          <select aria-label="Country code" className="input" value={values.countryCode || "+91"} onChange={(e) => onChange("countryCode", e.target.value)}>
            {COUNTRY_CODES.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
          </select>
          <input
            id={id}
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={15}
            placeholder="98765 43210"
            className={`input ${error ? "bad" : ""}`}
            value={values[field.name] || ""}
            onChange={(e) => onChange(field.name, e.target.value.replace(/[^\d\s]/g, ""))}
            onBlur={() => onBlur?.(field)}
            aria-invalid={Boolean(error)}
          />
        </div>
        {error && <span className="err">{error}</span>}
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div className={`field ${full}`}>
        <label htmlFor={id}>{field.label}{tag}</label>
        <select id={id} className={`input ${error ? "bad" : ""}`} value={values[field.name] || ""} onChange={(e) => onChange(field.name, e.target.value)} aria-invalid={Boolean(error)}>
          <option value="">Select an option</option>
          {field.options.map((o) => <option key={o}>{o}</option>)}
        </select>
        {error && <span className="err">{error}</span>}
      </div>
    );
  }

  if (field.type === "textarea") {
    const v = values[field.name] || "";
    return (
      <div className={`field ${full}`}>
        <label htmlFor={id}>{field.label}{tag}</label>
        <textarea id={id} maxLength={1000} rows={5} placeholder={field.placeholder} className="input min-h-[110px] resize-y" value={v} onChange={(e) => onChange(field.name, e.target.value)} />
        <div className="text-right text-xs text-muted">{v.length} / 1000</div>
      </div>
    );
  }

  // text / email
  const icon = field.type === "email" ? "mail" : field.icon;
  return (
    <div className={`field ${full}`}>
      <label htmlFor={id}>{field.label}{tag}</label>
      <div className="relative">
        {icon && <Icon name={icon} className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted" />}
        <input
          id={id}
          type={field.type}
          inputMode={field.type === "email" ? "email" : undefined}
          autoComplete={field.type === "email" ? "email" : field.autoComplete}
          placeholder={field.placeholder || (field.type === "email" ? "you@company.com" : "")}
          className={`input ${icon ? "has-icon" : ""} ${error ? "bad" : ""}`}
          value={values[field.name] || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          onBlur={() => onBlur?.(field)}
          aria-invalid={Boolean(error)}
        />
      </div>
      {error && <span className="err">{error}</span>}
    </div>
  );
}
