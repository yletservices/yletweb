import { CONTACT_METHODS } from "../../data/forms";
import Icon from "../ui/Icon";

// "Preferred way to reach you" radio pills.
export default function ContactMethod({ value, onChange, name = "via" }) {
  return (
    <div className="field sm:col-span-2">
      <span className="label">Preferred way to reach you</span>
      <div className="flex flex-wrap gap-2">
        {CONTACT_METHODS.map((m) => (
          <label key={m.value} className="pill relative">
            <input type="radio" name={name} value={m.value} checked={value === m.value} onChange={() => onChange(m.value)} />
            <span>
              <Icon name={m.icon} />
              {m.value}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
