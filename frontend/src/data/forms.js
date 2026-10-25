// Form definitions. Field types: text | email | tel | select | chips | textarea

export const COUNTRY_CODES = [
  { value: "+91", label: "IN +91" },
  { value: "+1", label: "US +1" },
  { value: "+44", label: "UK +44" },
  { value: "+971", label: "AE +971" },
  { value: "+966", label: "SA +966" },
  { value: "+65", label: "SG +65" },
  { value: "+61", label: "AU +61" },
];

export const ENQUIRY_FORMS = {
  marketing: {
    title: "Digital Marketing Enquiry",
    sideTitle: "Grow your brand",
    sideScript: "with Ylet",
    sideText: "Share your business and goals. Our marketing team will review them and come back with a clear plan within one working day.",
    lead: "Tell us about your business and what you want to achieve online.",
    fields: [
      { type: "text", name: "name", label: "Full name", required: true, icon: "user", placeholder: "Your full name", autoComplete: "name", full: true },
      { type: "text", name: "business", label: "Business / brand name", required: true, icon: "brief", placeholder: "e.g. Sai Fashions", autoComplete: "organization" },
      { type: "text", name: "industry", label: "Industry", placeholder: "e.g. Retail, Restaurant, Real estate" },
      { type: "email", name: "email", label: "Email address", required: true },
      { type: "tel", name: "phone", label: "Mobile number", required: true },
      { type: "text", name: "link", label: "Website or Instagram page", placeholder: "www.yourbusiness.com or @yourpage", full: true },
      { type: "chips", name: "needs", label: "Which services are you interested in?", required: true,
        options: ["Social Media Marketing", "SEO", "Google Ads", "Meta / Instagram Ads", "Content & Creatives", "Reels & Video", "Branding", "Not sure yet"] },
      { type: "select", name: "goal", label: "Main goal", required: true,
        options: ["Get more leads / enquiries", "Increase online sales", "Build brand awareness", "Grow social media followers", "Increase website traffic"] },
      { type: "select", name: "budget", label: "Monthly marketing budget",
        options: ["Under ₹10,000", "₹10,000 – ₹25,000", "₹25,000 – ₹50,000", "₹50,000 – ₹1,00,000", "Above ₹1,00,000", "Not sure yet"] },
      { type: "textarea", name: "message", label: "Anything else we should know?", placeholder: "Your target customers, locations, current marketing, competitors you admire…" },
    ],
  },
  it: {
    title: "IT Solutions Enquiry",
    sideTitle: "Build smarter",
    sideScript: "with Ylet",
    sideText: "Tell us about the solution you need. Our technical team will study your requirements and get back to you within one working day.",
    lead: "Tell us about the website, app or software you need.",
    fields: [
      { type: "text", name: "name", label: "Full name", required: true, icon: "user", placeholder: "Your full name", autoComplete: "name", full: true },
      { type: "text", name: "business", label: "Company / organisation", required: true, icon: "brief", placeholder: "Your company name", autoComplete: "organization" },
      { type: "text", name: "role", label: "Your role", placeholder: "e.g. Founder, Manager" },
      { type: "email", name: "email", label: "Email address", required: true },
      { type: "tel", name: "phone", label: "Mobile number", required: true },
      { type: "chips", name: "needs", label: "What do you need?", required: true,
        options: ["Website Development", "E-commerce Store", "Mobile App (Android / iOS)", "Custom Software", "Business Automation", "Cloud & Hosting", "IT Support & Maintenance", "Not sure yet"] },
      { type: "select", name: "stage", label: "Project stage", required: true,
        options: ["New idea, starting from scratch", "Upgrade or redesign an existing system", "Support for a live website / app"] },
      { type: "select", name: "timeline", label: "Expected timeline", options: ["As soon as possible", "Within 1 month", "1 – 3 months", "3+ months", "Flexible"] },
      { type: "select", name: "budget", label: "Estimated budget",
        options: ["Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "Above ₹5,00,000", "Not sure yet"] },
      { type: "textarea", name: "message", label: "Describe your requirement", placeholder: "Key features, users, existing tools or any reference apps / websites…" },
    ],
  },
};

export const PROJECT_OPTIONS = [
  { key: "Website Development", icon: "web", desc: "Business websites · E-commerce · Landing pages" },
  { key: "App Development", icon: "app", desc: "Android & iOS · Cross-platform · UI / UX" },
  { key: "Digital Marketing", icon: "mkt", desc: "Social media · SEO · Google & Meta ads" },
  { key: "IT Solutions", icon: "it", desc: "Custom software · Automation · Cloud & hosting" },
  { key: "Not sure yet", icon: "question", desc: "Help me choose the right solution" },
];

export const BUDGETS = ["Under ₹25,000", "₹25,000 – ₹75,000", "₹75,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000", "Above ₹5,00,000", "Not sure yet"];
export const START_TIMES = ["Immediately", "Within 1 month", "1 – 3 months", "Just exploring"];
export const CONTACT_METHODS = [
  { value: "WhatsApp", icon: "whatsapp" },
  { value: "Phone call", icon: "phone" },
  { value: "Email", icon: "mail" },
];
