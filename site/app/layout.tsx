import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ehhealth.org"),
  title: "EH Nursing and Wellness Services | Medi-Cal Doula Care in Los Angeles",
  description:
    "EH Nursing is a Medi-Cal approved doula provider in Los Angeles. Nurse-led prenatal, birth, and postpartum support at no out-of-pocket cost for qualifying families. Call (833) 912-3999.",
  keywords:
    "doula Los Angeles, Medi-Cal doula, nurse practitioner doula, prenatal support, postpartum care, VBAC support, LA Care doula, postpartum doula Los Angeles, birth doula Medi-Cal, insurance covered doula, Van Nuys doula, nurse doula Los Angeles",
  authors: [{ name: "EH Nursing and Wellness Services", url: "https://ehhealth.org" }],
  creator: "EH Nursing and Wellness Services",
  publisher: "EH Nursing and Wellness Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://ehhealth.org",
  },
  openGraph: {
    type: "website",
    url: "https://ehhealth.org",
    siteName: "EH Nursing and Wellness Services",
    title: "EH Nursing and Wellness Services | Medi-Cal Doula Care in Los Angeles",
    description:
      "Medi-Cal approved, nurse-led doula care in Los Angeles. Prenatal, birth, and postpartum support at no out-of-pocket cost for qualifying families.",
    images: [
      {
        url: "/assets/logos/eh-logo-fullsize.png",
        width: 1200,
        height: 630,
        alt: "EH Nursing and Wellness Services Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EH Nursing and Wellness Services | Medi-Cal Doula Care in Los Angeles",
    description:
      "Medi-Cal approved, nurse-led doula care in Los Angeles. Prenatal, birth, and postpartum support at no out-of-pocket cost for qualifying families.",
    images: ["/assets/logos/eh-logo-fullsize.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": "https://ehhealth.org/#organization",
      name: "EH Nursing and Wellness Services",
      alternateName: "EH Health",
      url: "https://ehhealth.org",
      logo: "https://ehhealth.org/assets/logos/eh-logo-fullsize.png",
      image: "https://ehhealth.org/assets/logos/eh-logo-fullsize.png",
      description:
        "Medi-Cal approved doula provider in Los Angeles offering nurse-led prenatal, birth, and postpartum support. Founded by a Pediatric and Neonatal ICU Nurse Practitioner.",
      telephone: "+18339123999",
      email: "contact@ehhealth.org",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Van Nuys",
        addressRegion: "CA",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Los Angeles County, California",
      },
      serviceType: "Doula Services",
      medicalSpecialty: "Midwifery",
      priceRange: "Covered by Medi-Cal Managed Care",
      paymentAccepted: "Medi-Cal, LA Care, Kaiser, HealthNet, CalOptima",
      openingHours: "Mo-Fr 09:00-18:00",
      sameAs: [],
      founder: {
        "@type": "Person",
        "@id": "https://ehhealth.org/#ellen-hakopyan",
        name: "Ellen Hakopyan",
        jobTitle: "Founder, Lead Doula, Nurse Practitioner",
        description:
          "Pediatric and Neonatal ICU Nurse and Nurse Practitioner with years of experience caring for newborns, children, and families. Medi-Cal approved doula provider in Los Angeles.",
        worksFor: {
          "@id": "https://ehhealth.org/#organization",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://ehhealth.org/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is doula care really covered by my Medi-Cal insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most families ask this because they assume professional doula support is too expensive to be real. If you are on LA Care, Kaiser, HealthNet, CalOptima, or another Medi-Cal Managed Care plan, you very likely qualify for full coverage with nothing due at the visit. Call us with your plan name and we will confirm your specific benefits before you commit to anything.",
          },
        },
        {
          "@type": "Question",
          name: "Can I reach a real person if I have questions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call (833) 912-3999 during business hours and you will talk to a real person. No voicemail menus, no automated queue. If you just need a quick answer, that is the fastest way to get one.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a doula and a medical provider?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A doula handles the support side, not the medical side. Breathing, comfort, advocacy, someone who stays through the whole thing. Ellen does not replace your OB or midwife. What she adds is years inside the Pediatric and Neonatal ICU, which means she understands how hospitals work, how to communicate with clinical staff, and how to stay calm when the room is not.",
          },
        },
        {
          "@type": "Question",
          name: "Do you support VBAC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and it is one of the situations where having a prepared advocate makes a real difference. Ellen helps you go in with evidence, a clear plan, and your preferences documented before labor begins. The earlier you reach out, the more time you have to prepare properly.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide support for pregnancy loss or abortion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Both. You do not need to explain your circumstances to get that support. Ellen provides confidential care through miscarriage, stillbirth, and abortion, at your pace, without judgment. Your privacy is taken seriously from the very first conversation.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Greater Los Angeles County, and Ellen comes to you. No office visit, no commute, no parking to deal with. If you are in the Van Nuys area or anywhere across LA County, you are in the service area.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
