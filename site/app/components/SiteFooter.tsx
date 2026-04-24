import Image from "next/image";
import Link from "next/link";

const MINT = "#D7F7F7";

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ehnursingandwellnessservices",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.4-1.9 2-1.9h2V2.1C16.6 2 15.4 2 14.3 2 11.9 2 10 3.5 10 6.5V10H7v4h3v8h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ehnursingandwellnessservices",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@EHNursingandWellnessServices",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23 7.6a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.5A3 3 0 0 0 1 7.6 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.4 3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.4 31 31 0 0 0-.5-4.4zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-eh", label: "About EH" },
  { href: "/services", label: "Services" },
  { href: "/birth-and-beyond", label: "Birth and Beyond" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy-and-tos", label: "Privacy Policy & TOS" },
];

export default function SiteFooter() {
  return (
    <footer
      className="py-12"
      style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" aria-label="EH Nursing and Wellness Services Home" className="inline-block mb-4">
              <Image
                src="/assets/logos/eh-logo.png"
                alt="EH Nursing and Wellness Services"
                width={2118}
                height={1021}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "#888" }}>
              Nurse-led doula support to families throughout Los Angeles County.
              Medi-Cal covered for qualifying families. Ellen comes to you, no
              office visit needed.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors"
                  style={{
                    backgroundColor: "rgba(215,247,247,0.08)",
                    color: MINT,
                    border: "1px solid rgba(215,247,247,0.15)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: MINT }}>
              Navigate
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "#888" }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: MINT }}>
              Contact
            </h4>
            <ul className="space-y-2 text-xs" style={{ color: "#888" }}>
              <li>
                <a href="tel:8339123999" className="hover:text-white transition-colors">
                  (833) 912-3999
                </a>
              </li>
              <li>
                <a href="tel:7472042325" className="hover:text-white transition-colors">
                  (747) 204-2325
                </a>
              </li>
              <li>
                <a href="mailto:contact@ehhealth.org" className="hover:text-white transition-colors">
                  contact@ehhealth.org
                </a>
              </li>
              <li>Van Nuys, Los Angeles County, CA</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: MINT }}>
              Insurance Accepted
            </h4>
            <ul className="space-y-1 text-xs" style={{ color: "#888" }}>
              <li>LA Care Health Plan</li>
              <li>Kaiser Permanente Southern CA</li>
              <li>HealthNet</li>
              <li>CalOptima</li>
              <li>Medi-Cal Managed Care HMO plans</li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#555" }}>
            &copy; 2026 EH Nursing and Wellness Services. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-xs" style={{ color: "#555" }}>
            <Link href="/privacy-policy-and-tos" className="hover:text-white transition-colors">
              Privacy Policy &amp; Terms
            </Link>
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Powered by Caltechweb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
