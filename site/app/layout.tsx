import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EH Nursing and Wellness Services | Medi-Cal Doula Care in Los Angeles",
  description:
    "EH Nursing is a Medi-Cal approved doula provider in Los Angeles. Nurse-led prenatal, birth, and postpartum support at no out-of-pocket cost for qualifying families. Call (833) 912-3999.",
  keywords:
    "doula Los Angeles, Medi-Cal doula, nurse practitioner doula, prenatal support, postpartum care, VBAC support, LA Care doula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
