// All website text and data lives here — edit this file to update content.

export const CONTACT = {
  phone: "+91 85200 70112",
  whatsapp: "918520070112", // digits only, with country code
  email: "yletservices@gmail.com",
  city: "Hyderabad, India",
  hours: "Mon – Sat, 10:00 AM – 7:00 PM",
};

export const SOCIALS = [
  { name: "LinkedIn", url: "" },
  { name: "Instagram", url: "" },
  { name: "YouTube", url: "" },
  { name: "Behance", url: "" },
];

export const PROMO_MESSAGES = [
  { lead: "Free consultation", text: "for every new project. Tell us your idea today." },
  { lead: "", text: "Websites · Mobile Apps · Digital Marketing · IT Solutions, all under one roof" },
  { lead: "", text: "Based in Hyderabad, working with businesses across India" },
];

// Top navigation (centre of the header)
export const NAV_LINKS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About Us", icon: "star" },
  { id: "services", label: "Services", icon: "grid" },
  { id: "contact", label: "Contact Us", icon: "phone" },
];

export const BANNERS = [
  {
    tag: "Welcome to Ylet",
    title: "Ideas into impact.",
    script: "Create · Capture · Build",
    text: "Websites, mobile apps, digital marketing and IT solutions that help your business grow, all under one roof.",
    image: "/img/hero-ylet.jpg",
    pos: "55% 50%",
    alt: "Clean workspace with laptop and notebook",
    cta: { label: "Explore Services", to: "services" },
    chips: ["Free consultation", "Hyderabad based"],
  },
  {
    tag: "Digital Marketing",
    title: "Make your brand",
    script: "stand out.",
    text: "Social media, SEO and performance campaigns that bring the right customers to your business.",
    image: "/img/hero-marketing.jpg",
    pos: "65% 45%",
    alt: "Marketer reviewing results on a tablet",
    cta: { label: "See Marketing", to: "services" },
    chips: ["Social media", "SEO", "Ads"],
  },
  {
    tag: "Website & App Development",
    title: "Digital experiences that",
    script: "move you forward.",
    text: "Fast, modern websites and mobile apps designed around your customers.",
    image: "/img/hero-web.jpg",
    pos: "60% 40%",
    alt: "Person using an app on a tablet",
    cta: { label: "View Our Work", to: "work" },
    chips: ["Websites", "Android & iOS"],
  },
  {
    tag: "IT Solutions",
    title: "Technology with",
    script: "purpose.",
    text: "Custom software, automation and reliable support that keep your business running smoothly.",
    image: "/img/hero-it.jpg",
    pos: "45% 50%",
    alt: "Source code on a screen",
    cta: { label: "Why Choose Ylet", to: "why" },
    chips: ["Custom software", "Automation"],
  },
];

export const MARQUEE = [
  { label: "Website Development", icon: "web" },
  { label: "App Development", icon: "app" },
  { label: "Digital Marketing", icon: "mkt" },
  { label: "IT Solutions", icon: "it" },
  { label: "E-commerce Stores", icon: "web" },
  { label: "Social Media Marketing", icon: "mkt" },
  { label: "Custom Software", icon: "it" },
  { label: "SEO & Google Ads", icon: "target" },
];

export const EXPLORE = [
  { title: "Websites", sub: "Business sites & stores", image: "/img/ex-web.jpg" },
  { title: "Mobile Apps", sub: "Android & iOS", image: "/img/ex-app.jpg" },
  { title: "Digital Marketing", sub: "Social, SEO & ads", image: "/img/ex-mkt.jpg" },
  { title: "IT Solutions", sub: "Software & support", image: "/img/ex-it.jpg" },
];

export const ABOUT = {
  founder: "VVN Satya Sai",
  paragraphs: [
    "Ylet is a Hyderabad-based digital marketing and IT solutions company. We help startups, growing brands and established businesses build a strong online presence, reach the right customers and work smarter with technology.",
    "From your website and mobile app to marketing campaigns and custom software, one dedicated team handles strategy, design, development, launch and ongoing support, so you can focus on running your business.",
  ],
  values: [
    { title: "Create", text: "Brand-led design and strategy that sets you apart." },
    { title: "Capture", text: "Marketing that earns attention and turns it into leads." },
    { title: "Build", text: "Websites, apps and software engineered to last." },
  ],
  facts: [
    { icon: "pin", text: "Hyderabad, India" },
    { icon: "layers", text: "4 core services" },
    { icon: "team", text: "One dedicated team" },
  ],
};

export const SERVICES = [
  {
    key: "Website Development", icon: "web", image: "/img/svc-web.jpg", alt: "Laptop showing a business website",
    badge: "Most requested", badgeGold: false,
    desc: "Fast, responsive and search-friendly websites that present your brand with confidence and turn visitors into enquiries.",
    items: ["Business websites", "E-commerce", "Landing pages", "Redesign"],
  },
  {
    key: "App Development", icon: "app", image: "/img/svc-app.jpg", alt: "Mobile and tablet app screens",
    badge: "Android & iOS", badgeGold: false,
    desc: "Android, iOS and cross-platform apps with smooth, intuitive experiences, built to scale as you grow.",
    items: ["Android & iOS", "Cross-platform", "UI / UX", "Maintenance"],
  },
  {
    key: "Digital Marketing", icon: "mkt", image: "/img/svc-marketing.jpg", alt: "Person browsing social media on a phone",
    badge: "Grow leads", badgeGold: true,
    desc: "Data-driven campaigns that grow your visibility, engage your audience and bring in quality leads.",
    items: ["Social media", "SEO", "Google & Meta ads", "Content"],
  },
  {
    key: "IT Solutions", icon: "it", image: "/img/svc-it.jpg", alt: "Developer keyboards on a desk",
    badge: "For business", badgeGold: false,
    desc: "Custom software, automation and dependable support that simplify operations and save your team time.",
    items: ["Custom software", "Automation", "Cloud & hosting", "IT support"],
  },
];

// Replace placeholders with real projects (title, summary, link)
export const PROJECTS = [
  { title: "[Project Title]", service: "Website Development", image: "/img/work-web.jpg", alt: "Website on a laptop", note: "[Short project summary]", link: "" },
  { title: "[Project Title]", service: "App Development", image: "/img/work-app.jpg", alt: "Finance app on a tablet", note: "[Short project summary]", link: "" },
  { title: "[Project Title]", service: "Digital Marketing", image: "/img/work-marketing.jpg", alt: "Team planning a campaign", note: "[Short project summary]", link: "" },
  { title: "[Project Title]", service: "Digital Marketing", image: "/img/work-brand.jpg", alt: "Brand creative", note: "[Short project summary]", link: "" },
  { title: "[Project Title]", service: "IT Solutions", image: "/img/work-software.jpg", alt: "Software team at work", note: "[Short project summary]", link: "" },
  { title: "[Project Title]", service: "Website Development", image: "/img/svc-web.jpg", alt: "Business website on a laptop", note: "[Short project summary]", link: "" },
  { title: "[Project Title]", service: "App Development", image: "/img/svc-app.jpg", alt: "Mobile app screens", note: "[Short project summary]", link: "" },
];

export const REASONS = [
  { title: "Strategy before execution", text: "Every project starts with your goals, so the work has a clear purpose.", icon: "target" },
  { title: "Marketing + tech, one team", text: "Designers, marketers and developers work together for a consistent brand.", icon: "layers" },
  { title: "Transparent & on time", text: "Clear proposals, regular updates and agreed timelines. No hidden costs.", icon: "clock" },
  { title: "Support beyond launch", text: "Maintenance, improvements and quick help whenever you need it.", icon: "loop" },
];

export const PROCESS = [
  { title: "Discover", text: "A free consultation to understand your business, audience and goals." },
  { title: "Plan", text: "A clear proposal with scope, timeline and cost, with no surprises." },
  { title: "Design & Build", text: "We create and develop, sharing progress with you at every stage." },
  { title: "Launch & Grow", text: "We go live, then support, measure and improve with you." },
];

// Add photo: "/img/your-photo.jpg" when available
export const TEAM = [
  { name: "VVN Satya Sai", role: "Founder", bio: "Leads Ylet’s vision, client partnerships and strategy, bringing creativity and technology together for every project.", photo: "", featured: true },
  { name: "[Team Member Name]", role: "[Designation]", bio: "[Short introduction about this team member.]", photo: "" },
  { name: "[Team Member Name]", role: "[Designation]", bio: "[Short introduction about this team member.]", photo: "" },
];

export const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Our Services" },
  { id: "work", label: "Our Work" },
  { id: "team", label: "Our Team" },
  { id: "contact", label: "Contact Us" },
];
