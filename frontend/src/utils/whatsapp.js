import { CONTACT } from "../data/content";

// Builds a WhatsApp link to the Ylet business number with a pre-filled message.
// When the backend is ready, replace this with an API call (e.g. POST /api/enquiries).
export function whatsappLink(message) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function makeReference() {
  return "YL-" + Date.now().toString(36).toUpperCase().slice(-6);
}

export async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
