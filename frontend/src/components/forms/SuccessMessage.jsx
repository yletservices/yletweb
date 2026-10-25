import { CONTACT } from "../../data/content";
import { copyText } from "../../utils/whatsapp";
import { useToast } from "../ui/Toast";
import Icon from "../ui/Icon";

// Thank-you screen shown after an enquiry is submitted.
export default function SuccessMessage({ name, reference, message, link, summary = [], onClose, onReset, label = "enquiry" }) {
  const toast = useToast();
  const copy = async () => {
    const ok = await copyText(message);
    toast(ok ? "Details copied" : `Copy isn’t available here. Please email ${CONTACT.email}`);
  };

  return (
    <div className="py-[clamp(10px,3vw,30px)] text-center">
      <span className="mx-auto grid h-[76px] w-[76px] place-items-center rounded-full bg-violet-grad text-white shadow-[0_18px_40px_-18px_rgba(109,63,192,.8)]">
        <Icon name="check" className="h-9 w-9" />
      </span>
      <h2 className="mt-[18px] text-2xl md:text-[32px]">Thank you, {name}!</h2>
      {reference && <span className="mt-2.5 inline-block rounded-full bg-lav px-3 py-2 text-xs font-semibold tracking-[.14em] text-violet">Reference {reference}</span>}
      <p className="mx-auto mt-3.5 max-w-[52ch]">
        WhatsApp has opened in a new tab with your {label} filled in. Tap <b>Send</b> there to deliver it to the Ylet team, and we’ll contact you within one working day.
      </p>

      {summary.length > 0 && (
        <dl className="mx-auto mt-[22px] max-w-[520px] overflow-hidden rounded-2xl border border-line text-left">
          {summary.map(([k, v]) => (
            <div key={k} className="grid gap-0.5 border-t border-line px-4 py-[11px] text-sm first:border-t-0 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-3">
              <dt className="text-muted">{k}</dt>
              <dd className="break-words">{v}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-[22px] flex flex-wrap justify-center gap-2.5">
        <a className="btn btn-violet" href={link} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" /> Open WhatsApp again
        </a>
        <button type="button" className="btn btn-line" onClick={copy}>Copy details</button>
        {onReset && <button type="button" className="btn btn-line" onClick={onReset}>New enquiry</button>}
        {onClose && <button type="button" className="btn btn-line" onClick={onClose}>Close</button>}
      </div>
      <p className="mt-3.5 text-[13px] text-muted">
        Prefer email? Paste your copied details into an email to <b className="text-espresso">{CONTACT.email}</b>.
      </p>
    </div>
  );
}
