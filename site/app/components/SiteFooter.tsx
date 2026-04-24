import Image from "next/image";
import Link from "next/link";

const MINT = "#D7F7F7";

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
                className="h-14 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
              Nurse-led doula support to families throughout Los Angeles County.
              Medi-Cal covered for qualifying families. Ellen comes to you, no
              office visit needed.
            </p>
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
