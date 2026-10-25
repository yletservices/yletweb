import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../data/content";
import LogoMark from "../components/ui/LogoMark";
import Icon from "../components/ui/Icon";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Ylet";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="wrap pb-16">
      <nav aria-label="Breadcrumb" className="pt-[22px] text-[13px] text-muted">
        <Link to="/" className="text-violet hover:underline">Home</Link> / Privacy Policy
      </nav>

      {/* Hero Banner */}
      <section className="relative mt-3.5 overflow-hidden rounded-[26px] bg-violet-grad p-[clamp(26px,4.5vw,52px)] text-white">
        <LogoMark className="absolute -bottom-10 -right-8 w-[min(360px,60vw)] text-white/[.08]" />
        <span className="eyebrow left !text-gold-light">Legal & Compliance</span>
        <h1 className="relative mt-3 text-[30px] text-white md:text-[clamp(30px,4.4vw,50px)]">
          Privacy <span className="script text-[1.25em] font-normal text-gold-light">Policy</span>
        </h1>
        <p className="relative mt-2.5 max-w-[65ch] text-white/90 text-[15px] leading-relaxed">
          At Ylet, we respect your privacy and are committed to protecting any personal information you share with us. This policy outlines how we collect, use, and safeguard your data across our website and mobile applications.
        </p>
        <p className="relative mt-4 text-[13px] text-gold-light">
          Last Updated: October 2026 · Effective Date: October 2026
        </p>
      </section>

      {/* Main Policy Content */}
      <div className="mt-8 grid items-start gap-8 min-[1000px]:grid-cols-[minmax(0,1fr)_340px]">
        <div className="rounded-[22px] border border-line bg-paper p-[clamp(22px,3.5vw,40px)] text-body leading-relaxed space-y-7">
          <section>
            <h2 className="text-xl font-semibold text-espresso">1. Who We Are</h2>
            <p className="mt-2 text-[15px]">
              Ylet is a digital marketing and IT solutions firm based in <strong>Hyderabad, Telangana, India</strong>. We specialize in custom website development, mobile application development (Android &amp; iOS), digital marketing, and enterprise IT services.
            </p>
            <p className="mt-2 text-[15px]">
              For any privacy-related queries, you can reach us at <a href={`mailto:${CONTACT.email}`} className="text-violet font-medium underline">{CONTACT.email}</a> or call <a href={`tel:${CONTACT.phone}`} className="text-violet font-medium">{CONTACT.phone}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">2. Information We Collect</h2>
            <p className="mt-2 text-[15px]">
              We only collect information that you voluntarily provide to us when using our website or mobile apps:
            </p>
            <ul className="mt-2.5 list-disc pl-5 space-y-1.5 text-[14.5px]">
              <li><strong>Contact Information:</strong> Your name, email address, phone number, and location when submitting a project enquiry or contact form.</li>
              <li><strong>Project Details:</strong> Information regarding your business, service preferences, target timelines, and project scope.</li>
              <li><strong>Technical Logs:</strong> Standard server logs such as device type, browser version, and approximate geographic location (country/city level) used solely for performance monitoring and security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">3. How We Use Your Information</h2>
            <p className="mt-2 text-[15px]">
              We use the information collected exclusively for legitimate business purposes:
            </p>
            <ul className="mt-2.5 list-disc pl-5 space-y-1.5 text-[14.5px]">
              <li>To evaluate and respond to your consultation requests and project enquiries.</li>
              <li>To communicate project timelines, technical proposals, and service updates.</li>
              <li>To deliver agreed-upon digital marketing campaigns, website builds, and mobile applications.</li>
              <li>To maintain website security and prevent spam or unauthorized abuse.</li>
            </ul>
            <p className="mt-2.5 text-[14.5px] font-medium text-espresso">
              We never sell, rent, trade, or monetize your personal information to any third parties or advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">4. Third-Party Services &amp; Form Processing</h2>
            <p className="mt-2 text-[15px]">
              Our enquiry forms transmit messages securely via industry-standard services such as EmailJS directly to our verified operational inbox (<code className="rounded bg-cream px-1.5 py-0.5 text-xs text-espresso">{CONTACT.email}</code>). Our web infrastructure is hosted on secure cloud providers (Vercel) employing modern transport encryption (TLS/SSL).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">5. Google Play Store &amp; Mobile App Compliance</h2>
            <p className="mt-2 text-[15px]">
              In accordance with Google Play Developer policies:
            </p>
            <ul className="mt-2.5 list-disc pl-5 space-y-1.5 text-[14.5px]">
              <li>Our applications do not collect sensitive user data, financial data, or biometric information in the background.</li>
              <li>No dangerous runtime permissions (such as background location, SMS, or contacts) are requested unless strictly required and explicitly approved by you for core functionality.</li>
              <li>Data transmitted over network connections is encrypted using HTTPS.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">6. Data Retention &amp; Security</h2>
            <p className="mt-2 text-[15px]">
              We retain contact details only as long as necessary to facilitate your business relationship with Ylet. We maintain appropriate administrative, technical, and physical safeguards to protect your personal data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">7. Your Privacy Rights</h2>
            <p className="mt-2 text-[15px]">
              You have the right to request access to the personal data we hold about you, request corrections, or ask for complete deletion of your records from our systems at any time. Simply send an email with your request to <a href={`mailto:${CONTACT.email}`} className="text-violet font-medium underline">{CONTACT.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">8. Policy Updates</h2>
            <p className="mt-2 text-[15px]">
              We may update this policy periodically to reflect evolving legal, technical, or business practices. The updated version will always be posted here with a refreshed revision date.
            </p>
          </section>
        </div>

        {/* Sidebar Info Card */}
        <aside className="grid gap-4 min-[1000px]:sticky min-[1000px]:top-[100px]">
          <div className="relative overflow-hidden rounded-[22px] bg-espresso p-6 text-[#D9CCBF]">
            <h3 className="text-lg text-white font-semibold">Have Questions?</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed">
              We are happy to answer any questions about our privacy practices, security protocols, or services.
            </p>
            <div className="mt-5 space-y-3 border-t border-[#E7DCCF]/15 pt-4 text-[13.5px]">
              <div className="flex items-center gap-2.5">
                <Icon name="mail" className="h-4 w-4 text-gold-light" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-light transition">{CONTACT.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="phone" className="h-4 w-4 text-gold-light" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-gold-light transition">{CONTACT.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Icon name="pin" className="h-4 w-4 text-gold-light" />
                <span>{CONTACT.city}</span>
              </div>
            </div>
            <Link
              to="/start-project"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gold-grad px-4 py-2.5 text-[14px] font-semibold text-espresso transition hover:opacity-95"
            >
              Start a Project <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[22px] border border-line bg-paper p-5 text-sm text-body">
            <h4 className="font-semibold text-espresso">Quick Links</h4>
            <div className="mt-3 flex flex-col gap-2 text-violet font-medium">
              <Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
              <Link to="/start-project" className="hover:underline">Start a Project Consultation</Link>
              <Link to="/" className="hover:underline">Return to Home</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
