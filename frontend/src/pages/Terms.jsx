import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../data/content";
import LogoMark from "../components/ui/LogoMark";
import Icon from "../components/ui/Icon";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | Ylet";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="wrap pb-16">
      <nav aria-label="Breadcrumb" className="pt-[22px] text-[13px] text-muted">
        <Link to="/" className="text-violet hover:underline">Home</Link> / Terms &amp; Conditions
      </nav>

      {/* Hero Banner */}
      <section className="relative mt-3.5 overflow-hidden rounded-[26px] bg-violet-grad p-[clamp(26px,4.5vw,52px)] text-white">
        <LogoMark className="absolute -bottom-10 -right-8 w-[min(360px,60vw)] text-white/[.08]" />
        <span className="eyebrow left !text-gold-light">Legal & Agreements</span>
        <h1 className="relative mt-3 text-[30px] text-white md:text-[clamp(30px,4.4vw,50px)]">
          Terms &amp; <span className="script text-[1.25em] font-normal text-gold-light">Conditions</span>
        </h1>
        <p className="relative mt-2.5 max-w-[65ch] text-white/90 text-[15px] leading-relaxed">
          These terms govern your access to and use of Ylet’s digital marketing, software development, and IT consulting services.
        </p>
        <p className="relative mt-4 text-[13px] text-gold-light">
          Last Updated: October 2026 · Effective Date: October 2026
        </p>
      </section>

      {/* Main Content */}
      <div className="mt-8 grid items-start gap-8 min-[1000px]:grid-cols-[minmax(0,1fr)_340px]">
        <div className="rounded-[22px] border border-line bg-paper p-[clamp(22px,3.5vw,40px)] text-body leading-relaxed space-y-7">
          <section>
            <h2 className="text-xl font-semibold text-espresso">1. Acceptance of Terms</h2>
            <p className="mt-2 text-[15px]">
              By visiting our website, contacting us for a project proposal, or engaging Ylet for digital marketing and IT services, you acknowledge that you have read, understood, and agreed to be bound by these Terms &amp; Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">2. Scope of Services</h2>
            <p className="mt-2 text-[15px]">
              Ylet provides technology and growth services including:
            </p>
            <ul className="mt-2.5 list-disc pl-5 space-y-1.5 text-[14.5px]">
              <li><strong>Website Development:</strong> Custom corporate websites, landing pages, responsive web apps, and e-commerce platforms.</li>
              <li><strong>Mobile Application Development:</strong> Native and cross-platform mobile apps for Android and iOS devices.</li>
              <li><strong>Digital Marketing &amp; SEO:</strong> Search engine optimization, social media marketing, PPC / Google Ads management, and content strategy.</li>
              <li><strong>IT Solutions &amp; Consulting:</strong> Custom enterprise software, workflow automation, cloud hosting, and ongoing technical maintenance.</li>
            </ul>
            <p className="mt-2 text-[15px]">
              Specific project deliverables, milestones, and timelines will be detailed in individual project proposals or Statements of Work (SOW) agreed between Ylet and the client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">3. Client Obligations</h2>
            <p className="mt-2 text-[15px]">
              To ensure on-time and accurate project execution, clients agree to provide necessary assets (such as logos, high-resolution imagery, brand guidelines, and copy) in a timely manner and provide constructive feedback during review stages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">4. Intellectual Property &amp; Ownership</h2>
            <p className="mt-2 text-[15px]">
              Upon full receipt of agreed payments for custom design and development work, complete ownership and intellectual property rights for the finalized deliverables are transferred to the client. Ylet retains the right to showcase the completed project in our public portfolio and case studies unless a non-disclosure agreement (NDA) explicitly states otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">5. Payment Terms &amp; Quotes</h2>
            <p className="mt-2 text-[15px]">
              Quotations provided during consultations are valid for 30 calendar days unless specified otherwise. Projects typically proceed based on structured milestone payments outlined in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">6. Limitation of Liability</h2>
            <p className="mt-2 text-[15px]">
              Ylet provides services using industry best practices and reasonable skill. To the maximum extent permitted by applicable law, Ylet shall not be liable for indirect, incidental, or consequential damages resulting from third-party server downtimes, API deprecations, or platform policy changes beyond our direct control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">7. Governing Law &amp; Jurisdiction</h2>
            <p className="mt-2 text-[15px]">
              These terms are governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Hyderabad, Telangana, India</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-espresso">8. Contact Information</h2>
            <p className="mt-2 text-[15px]">
              If you have any questions regarding these Terms &amp; Conditions, please reach out to:
            </p>
            <div className="mt-3 rounded-xl bg-cream/60 p-4 text-[14.5px]">
              <p><strong>Ylet Services</strong></p>
              <p>Hyderabad, Telangana, India</p>
              <p>Email: <a href={`mailto:${CONTACT.email}`} className="text-violet underline">{CONTACT.email}</a></p>
              <p>Phone: <a href={`tel:${CONTACT.phone}`} className="text-violet">{CONTACT.phone}</a></p>
            </div>
          </section>
        </div>

        {/* Sidebar Info Card */}
        <aside className="grid gap-4 min-[1000px]:sticky min-[1000px]:top-[100px]">
          <div className="relative overflow-hidden rounded-[22px] bg-espresso p-6 text-[#D9CCBF]">
            <h3 className="text-lg text-white font-semibold">Ready to Partner?</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed">
              We work with transparent agreements, clear timelines, and no surprises. Schedule a free consultation today.
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
            <h4 className="font-semibold text-espresso">Related Pages</h4>
            <div className="mt-3 flex flex-col gap-2 text-violet font-medium">
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link to="/start-project" className="hover:underline">Project Enquiry Form</Link>
              <Link to="/" className="hover:underline">Return to Home</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
