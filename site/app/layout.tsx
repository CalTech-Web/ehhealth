import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EH Nursing and Wellness Services | Medi-Cal Doula Care in Los Angeles",
  description:
    "Los Angeles Medi-Cal approved doula provider offering compassionate prenatal, birth, and postpartum support led by a nurse practitioner. Call (833) 912-3999.",
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
