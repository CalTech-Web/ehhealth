import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ehhealth.org"),
  title: "EH Nursing and Wellness Services | Medi-Cal Doula Care in Los Angeles",
  description:
    "EH Nursing is a Medi-Cal approved doula provider in Los Angeles. Nurse-led prenatal, birth, and postpartum support at no out-of-pocket cost for qualifying families. Call (833) 912-3999.",
  keywords:
    "doula Los Angeles, Medi-Cal doula, nurse practitioner doula, prenatal support, postpartum care, VBAC support, LA Care doula, postpartum doula Los Angeles, birth doula Medi-Cal, insurance covered doula, Van Nuys doula, nurse doula Los Angeles, CalOptima doula, HealthNet doula, Kaiser doula Medi-Cal, doula covered by insurance Los Angeles, how much does a doula cost Medi-Cal, VBAC doula Los Angeles, cesarean birth doula, pregnancy loss doula, abortion support doula, doula Van Nuys CA, doula North Hollywood, doula Sherman Oaks, doula Burbank, doula Glendale, nurse led doula Los Angeles County, Medi-Cal HMO doula provider, doula at no cost Medi-Cal",
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
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Van Nuys, Los Angeles, California",
    "geo.position": "34.1886;-118.4491",
    "ICBM": "34.1886, -118.4491",
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
      "@type": "WebSite",
      "@id": "https://ehhealth.org/#website",
      url: "https://ehhealth.org",
      name: "EH Nursing and Wellness Services",
      description:
        "Medi-Cal approved doula provider in Los Angeles offering nurse-led prenatal, birth, and postpartum support.",
      publisher: { "@id": "https://ehhealth.org/#organization" },
      inLanguage: "en-US",
    },
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
      areaServed: [
        { "@type": "AdministrativeArea", name: "Los Angeles County, California" },
        { "@type": "City", name: "Van Nuys, California" },
        { "@type": "City", name: "North Hollywood, California" },
        { "@type": "City", name: "Sherman Oaks, California" },
        { "@type": "City", name: "Studio City, California" },
        { "@type": "City", name: "Encino, California" },
        { "@type": "City", name: "Northridge, California" },
        { "@type": "City", name: "Reseda, California" },
        { "@type": "City", name: "Woodland Hills, California" },
        { "@type": "City", name: "Burbank, California" },
        { "@type": "City", name: "Glendale, California" },
        { "@type": "City", name: "Pasadena, California" },
        { "@type": "City", name: "Inglewood, California" },
        { "@type": "City", name: "Culver City, California" },
        { "@type": "City", name: "Hawthorne, California" },
      ],
      identifier: {
        "@type": "PropertyValue",
        name: "NPI",
        value: "1710798616",
      },
      serviceType: "Doula Services",
      priceRange: "Covered by Medi-Cal Managed Care",
      paymentAccepted: "Medi-Cal, LA Care, Kaiser, HealthNet, CalOptima",
      openingHours: "Mo-Fr 09:00-18:00",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+18339123999",
          contactType: "customer service",
          areaServed: "US-CA",
          availableLanguage: "English",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        },
        {
          "@type": "ContactPoint",
          telephone: "+17472042325",
          contactType: "customer service",
          areaServed: "US-CA",
          availableLanguage: "English",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Doula and Wellness Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Initial Assessment Visit",
              description:
                "Comprehensive first meeting to learn goals, preferences, and needs. Reviews history, clarifies doula support scope, and creates a personalized support plan.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Prenatal Support",
              description:
                "Personalized birth planning, anxiety and emotional support, VBAC preparation, and nutrition guidance through focused check-ins before birth.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Birth Doula Support",
              description:
                "Continuous, non-medical support from early labor through delivery. Comfort techniques, advocacy, and partner guidance for vaginal births.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VBAC Support",
              description:
                "Specialized support for planning a vaginal birth after cesarean. Evidence-informed preparation, coping strategies, and care team communication.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cesarean Birth Support",
              description:
                "Compassionate support before, during, and after a cesarean. Grounding techniques, partner support, and gentle recovery guidance.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pregnancy Loss Support",
              description:
                "Sensitive, nonjudgmental care through miscarriage and stillbirth. Emotional support and resources respecting client pace and privacy.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Abortion Support",
              description:
                "Confidential, judgment-free support before, during, and after an abortion. Help with planning, logistics, emotional care, and post-procedure comfort.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Postpartum Support",
              description:
                "Focused check-ins after birth covering newborn care, feeding, soothing, sleep routines, and emotional support for new parents.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Extended Postpartum Visits",
              description:
                "Up to two additional scheduled postpartum visits for deeper guidance on feeding, soothing, recovery, and family adjustment.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
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
      "@type": "Review",
      "@id": "https://ehhealth.org/#review-1",
      itemReviewed: { "@id": "https://ehhealth.org/#organization" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Maria S." },
      reviewBody:
        "I felt supported the entire time. My doula made sure I understood my options and never felt alone during labor.",
    },
    {
      "@type": "Review",
      "@id": "https://ehhealth.org/#review-2",
      itemReviewed: { "@id": "https://ehhealth.org/#organization" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Jasmine R." },
      reviewBody:
        "As a first-time mom, I was honestly nervous about everything. Having someone there to guide me and reassure me made a huge difference.",
    },
    {
      "@type": "Review",
      "@id": "https://ehhealth.org/#review-3",
      itemReviewed: { "@id": "https://ehhealth.org/#organization" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Alyssa M." },
      reviewBody:
        "The postpartum support was something I did not expect to need this much. It helped me adjust and feel more confident caring for my baby.",
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
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call (833) 912-3999 or fill out the contact form on this page. Share your due date, your Medi-Cal plan, and the type of support you are looking for. We will reach out within one business day to schedule your initial assessment visit.",
          },
        },
        {
          "@type": "Question",
          name: "How much does doula care cost with Medi-Cal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you have a qualifying Medi-Cal Managed Care plan, doula services through EH Nursing are covered at no out-of-pocket cost to you. That includes LA Care, Kaiser Permanente Southern CA, HealthNet, CalOptima, and other Medi-Cal HMO plans. We verify your coverage before your first visit so there are no surprises.",
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
