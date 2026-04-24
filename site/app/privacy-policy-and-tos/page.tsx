import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service | EH Nursing and Wellness Services",
  description:
    "Privacy Policy and Terms of Service for EH Nursing and Wellness Services. Learn how we handle your personal health information in compliance with HIPAA and California law.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ehhealth.org/privacy-policy-and-tos" },
};

const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BODY_BG = "#F5F4F3";
const BORDER = "#DBDBDB";

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: BODY_BG, color: NEAR_BLACK, minHeight: "100vh" }}>
      <SiteHeader />
      <div id="main-content" tabIndex={-1} className="outline-none" />

      {/* HERO */}
      <div
        className="px-6 py-14 text-center"
        style={{ backgroundColor: MINT }}
      >
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: TEAL }}
        >
          Legal
        </p>
        <h1
          className="text-3xl lg:text-4xl font-extrabold"
          style={{ color: NEAR_BLACK }}
        >
          Privacy Policy &amp; Terms of Service
        </h1>
        <p className="mt-3 text-sm" style={{ color: "#555" }}>
          Last updated: April 2026
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-12">

        {/* PRIVACY POLICY */}
        <section>
          <h2
            className="text-2xl font-extrabold mb-6"
            style={{ color: NEAR_BLACK }}
          >
            Privacy Policy
          </h2>

          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#444" }}>
            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                1. About This Policy
              </h3>
              <p>
                EH Nursing and Wellness Services (&ldquo;EH Nursing,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy of every person who contacts us or uses our services. This Privacy Policy describes how we collect, use, and safeguard your personal information, including health information, in connection with our website at ehhealth.org and our doula services.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                2. HIPAA Compliance
              </h3>
              <p>
                As a Medi-Cal approved doula provider, EH Nursing handles Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and its implementing regulations. We maintain appropriate administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of your PHI. You have the right to request access to, amendment of, and an accounting of disclosures of your PHI. To exercise these rights, contact us at contact@ehhealth.org or call (833) 912-3999.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                3. Information We Collect
              </h3>
              <p className="mb-2">
                We collect information you provide to us directly, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details such as name, phone number, and email address</li>
                <li>Pregnancy and health-related information such as due date, birth history, and support needs</li>
                <li>Medi-Cal plan information for the purpose of verifying coverage eligibility</li>
                <li>Any other information you voluntarily share when contacting us</li>
              </ul>
              <p className="mt-2">
                We also collect limited technical data automatically, such as browser type, IP address, and pages visited, through standard website analytics tools. This data is used only to improve our website and is not linked to your health information.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                4. How We Use Your Information
              </h3>
              <p className="mb-2">We use your personal information to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Schedule and conduct your initial assessment visit and ongoing doula services</li>
                <li>Verify your Medi-Cal eligibility and coordinate with your health plan</li>
                <li>Communicate appointment reminders and service-related updates</li>
                <li>Improve the quality of care we provide</li>
                <li>Comply with applicable legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                5. Medi-Cal and Insurance Disclosures
              </h3>
              <p>
                To process Medi-Cal claims and verify coverage, we may share your health information with your Medi-Cal Managed Care plan, including LA Care Health Plan, Kaiser Permanente Southern California, HealthNet, CalOptima, and other participating plans. These disclosures are limited to what is necessary to obtain payment for services and are governed by HIPAA. We do not sell your information to your insurer or any third party for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                6. Confidentiality for Sensitive Services
              </h3>
              <p>
                We take special precautions to protect information related to sensitive services including abortion support, pregnancy loss support, and any LGBTQ+ family care. Information shared in connection with these services is treated with the highest level of confidentiality. We will not disclose this information without your explicit written authorization except as required by law.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                7. Information Sharing
              </h3>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share information with service providers who help us operate our website and deliver services, subject to strict confidentiality agreements. We may disclose information as required by law, court order, or to protect the rights and safety of our clients and staff.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                8. California Privacy Rights (CCPA)
              </h3>
              <p>
                If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) including the right to know what personal information we collect, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information. To submit a privacy request, email contact@ehhealth.org or call (833) 912-3999.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                9. Data Retention
              </h3>
              <p>
                We retain client health records and related information for a minimum of seven years following the last date of service, or as required by California law and Medi-Cal regulations. Contact form submissions that do not result in a client relationship are retained for a maximum of 12 months.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                10. Security
              </h3>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. Our website uses HTTPS encryption for all data in transit. Despite our precautions, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                11. Contact Us About Privacy
              </h3>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:
              </p>
              <div className="mt-3 p-4 rounded-xl" style={{ backgroundColor: MINT, border: `1px solid ${TEAL}` }}>
                <p className="font-semibold" style={{ color: NEAR_BLACK }}>EH Nursing and Wellness Services</p>
                <p>Van Nuys, Los Angeles County, CA</p>
                <p>
                  Phone:{" "}
                  <a href="tel:8339123999" className="underline" style={{ color: TEAL }}>
                    (833) 912-3999
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:contact@ehhealth.org" className="underline" style={{ color: TEAL }}>
                    contact@ehhealth.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TERMS OF SERVICE */}
        <section>
          <h2
            className="text-2xl font-extrabold mb-6"
            style={{ color: NEAR_BLACK }}
          >
            Terms of Service
          </h2>

          <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#444" }}>
            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing or using the EH Nursing and Wellness Services website at ehhealth.org or by engaging our doula services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                2. Nature of Services
              </h3>
              <p>
                EH Nursing provides non-medical doula support services. Our services are designed to complement, not replace, the care provided by licensed medical professionals including obstetricians, midwives, and hospital nursing staff. Ellen Hakopyan is a credentialed Nurse Practitioner; however, doula services delivered through EH Nursing are provided in a non-clinical capacity and do not constitute the practice of medicine or nursing as defined by California law.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                3. Medi-Cal Coverage
              </h3>
              <p>
                EH Nursing is a Medi-Cal approved doula provider. Coverage eligibility depends on your specific Medi-Cal Managed Care plan. We will verify your benefits before your first visit. Coverage determinations are made by your health plan, not by EH Nursing. We cannot guarantee coverage for any specific service or individual.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                4. Appointments and Cancellations
              </h3>
              <p>
                We ask that you provide at least 24 hours notice if you need to cancel or reschedule a prenatal or postpartum appointment. For birth support, we understand that labor is unpredictable and we will always make reasonable accommodations. Repeated no-shows or late cancellations may affect your ability to schedule future appointments.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                5. Limitation of Liability
              </h3>
              <p>
                EH Nursing and Wellness Services shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim arising from the use of our services shall not exceed the total amount paid for those services in the three months preceding the claim. Nothing in these terms limits our liability for gross negligence or willful misconduct.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                6. Governing Law
              </h3>
              <p>
                These Terms of Service are governed by the laws of the State of California. Any disputes arising from these terms or our services shall be resolved in the courts of Los Angeles County, California.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base mb-2" style={{ color: NEAR_BLACK }}>
                7. Changes to These Terms
              </h3>
              <p>
                We may update these Terms of Service and Privacy Policy from time to time. Changes will be posted to this page with an updated date. Your continued use of our website or services after changes are posted constitutes your acceptance of the updated terms.
              </p>
            </div>
          </div>
        </section>

      </div>

      <SiteFooter />
    </div>
  );
}
