import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact EH Nursing | Doula Care in Los Angeles",
  description:
    "Contact EH Nursing and Wellness Services. Call (833) 912-3999 or fill out the form to verify your Medi-Cal coverage and schedule your initial assessment visit.",
  alternates: { canonical: "https://ehhealth.org/contact-us" },
  openGraph: {
    title: "Contact EH Nursing | Doula Care in Los Angeles",
    description:
      "Schedule your initial assessment visit. Medi-Cal covered doula care for LA families.",
    url: "https://ehhealth.org/contact-us",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ContactPageClient />
      <SiteFooter />
    </>
  );
}
