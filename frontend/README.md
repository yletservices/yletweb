# Ylet — Frontend

Website for **Ylet — Digital Marketing & IT Solutions**, built with **React 18**, **Vite** and **Tailwind CSS**.

## Run it

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## Folder structure

```
frontend/
├── index.html                 Page shell, fonts, meta tags
├── public/img/                Photos, logo and footer image
├── tailwind.config.js         Brand colours, fonts, animations
└── src/
    ├── main.jsx               App entry (router)
    ├── App.jsx                Layout + routes
    ├── index.css              Tailwind layers + shared classes (buttons, inputs, headings)
    ├── pages/
    │   ├── Home.jsx           Home page (all sections)
    │   ├── StartProject.jsx   "Let's Talk" project enquiry page (/start-project)
    │   └── NotFound.jsx       404 page
    ├── components/
    │   ├── layout/            PromoBar, Header, MobileDrawer, Footer
    │   ├── home/              HeroCarousel, ServiceMarquee, ExploreSection, AboutSection,
    │   │                      ServicesSection, WorkSection, WhySection, TeamSection, ContactSection
    │   ├── forms/             ProjectForm, EnquiryModal, EnquiryForm, FormField,
    │   │                      ContactMethod, SuccessMessage
    │   └── ui/                Logo, LogoMark, Icon, SectionHeading, ProgressDots, Toast
    ├── data/
    │   ├── content.js         ALL website text: contact details, banners, services, projects, team…
    │   └── forms.js           Form fields for Digital Marketing / IT Solutions / Start a Project
    ├── hooks/                 useAutoplay, useSwipe, useScrollSpy, useReveal, useSectionNav, useLockBody
    └── utils/                 validation.js, whatsapp.js, scroll.js
```

## Editing content

- **Text, contact details, team, projects:** `src/data/content.js`
- **Form questions and options:** `src/data/forms.js`
- **Photos:** replace files in `public/img/` (keep the same names, or update the paths in `content.js`)
- **Colours / fonts:** `tailwind.config.js`

## Forms and the backend

All three forms (Start a Project, Digital Marketing, IT Solutions) validate input and then open
WhatsApp with the enquiry pre-filled to the Ylet number. When the backend is ready, replace the
link in `src/utils/whatsapp.js` (and the submit handlers in `components/forms/`) with an API call,
for example `POST /api/enquiries`.

## Deploying

`npm run build` creates a static site in `dist/`. It can be hosted on Vercel, Netlify, Firebase
Hosting or any static host. Because the site uses page routes (`/start-project`), configure the
host to serve `index.html` for unknown paths (single-page-app fallback).
