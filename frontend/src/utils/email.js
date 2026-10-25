import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: "service_b4y5nay",
  templateId: "template_253izum",
  publicKey: "2FNHeG0050A_ycgpv",
};

/**
 * Send enquiry or project lead directly to yletservices@gmail.com
 */
export async function sendLeadEmail(params) {
  return await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    params,
    EMAILJS_CONFIG.publicKey
  );
}
