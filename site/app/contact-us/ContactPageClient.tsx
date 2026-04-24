"use client";

import { FormEvent, useState } from "react";

const MINT = "#D7F7F7";
const NEAR_BLACK = "#111111";
const TEAL = "#658B8B";
const BODY_BG = "#F5F4F3";
const BORDER = "#DBDBDB";

interface FormData {
  firstLastName: string;
  phone: string;
  email: string;
  edd: string;
  priorBirths: string;
  location: string;
  plannedBirthLocation: string;
  healthcareProvider: string;
  supportType: string;
  medicalPlan: string;
  memberId: string;
  message: string;
}

export default function ContactPageClient() {
  const [form, setForm] = useState<FormData>({
    firstLastName: "",
    phone: "",
    email: "",
    edd: "",
    priorBirths: "",
    location: "",
    plannedBirthLocation: "",
    healthcareProvider: "",
    supportType: "",
    medicalPlan: "",
    memberId: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ site: "ehhealth", source: "contact-page", ...form }),
      });
    } catch {
      /* silently continue so we always show success */
    }
    setLoading(false);
    setSubmitted(true);
  }

  const inputStyle = {
    borderColor: BORDER,
    backgroundColor: "#fff",
    color: NEAR_BLACK,
  };

  return (
    <main style={{ backgroundColor: BODY_BG, color: NEAR_BLACK }}>
      {/* HERO */}
      <section style={{ backgroundColor: MINT }}>
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: TEAL }}>
            Get In Touch
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: NEAR_BLACK }}
          >
            Contact Your Trusted Doula Today
          </h1>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#333" }}>
            Fill out the form below and we will reach out within one business
            day to confirm your Medi-Cal coverage and schedule your initial
            assessment visit.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* LEFT: info */}
        <aside className="lg:col-span-2 space-y-5">
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: NEAR_BLACK, color: "#fff" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: MINT }}>
              Call Us Directly
            </p>
            <a
              href="tel:8339123999"
              className="block text-2xl font-extrabold mb-1 hover:opacity-90"
              style={{ color: "#fff" }}
            >
              (833) 912-3999
            </a>
            <a href="tel:7472042325" className="block text-sm hover:opacity-90" style={{ color: "#ccc" }}>
              Secondary line: (747) 204-2325
            </a>
            <p className="text-xs mt-3" style={{ color: "#888" }}>
              Always a real person during business hours.
            </p>
          </div>

          <a
            href="mailto:contact@ehhealth.org"
            className="block rounded-2xl p-6 border transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#fff", borderColor: BORDER }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: TEAL }}>
              Email
            </p>
            <p className="text-base font-bold" style={{ color: NEAR_BLACK }}>
              contact@ehhealth.org
            </p>
          </a>

          <div className="rounded-2xl p-6 border" style={{ backgroundColor: "#fff", borderColor: BORDER }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: TEAL }}>
              Service Area
            </p>
            <p className="text-base font-bold mb-1" style={{ color: NEAR_BLACK }}>
              Los Angeles County, California
            </p>
            <p className="text-xs" style={{ color: "#666" }}>
              Based in Van Nuys. Ellen comes to you. No office visit required.
            </p>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: MINT, border: `1px solid ${TEAL}` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: TEAL }}>
              Insurance Accepted
            </p>
            <ul className="space-y-1 text-sm" style={{ color: NEAR_BLACK }}>
              <li>LA Care Health Plan</li>
              <li>Kaiser Permanente Southern CA</li>
              <li>HealthNet</li>
              <li>CalOptima</li>
              <li>Medi-Cal Managed Care HMO plans</li>
            </ul>
          </div>
        </aside>

        {/* RIGHT: form */}
        <div className="lg:col-span-3">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 8px 40px rgba(101,139,139,0.18), 0 2px 8px rgba(0,0,0,0.08)",
              border: `1px solid ${BORDER}`,
            }}
          >
            <div
              className="px-6 lg:px-8 pt-6 pb-5"
              style={{ background: "linear-gradient(135deg, #658B8B 0%, #4a7575 100%)" }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: "rgba(215,247,247,0.25)", color: "#fff" }}
              >
                Free Coverage Check
              </span>
              <h2 className="text-xl lg:text-2xl font-bold mb-1" style={{ color: "#fff" }}>
                Tell us about your needs
              </h2>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.88)" }}>
                We respond within one business day. No cost, no obligation.
              </p>
            </div>

            <div className="px-6 lg:px-8 py-6" style={{ backgroundColor: "#fff" }}>
              {submitted ? (
                <div
                  style={{ backgroundColor: MINT, border: `2px solid ${TEAL}` }}
                  className="rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl mb-3">&#10003;</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: NEAR_BLACK }}>
                    Thank you
                  </h3>
                  <p style={{ color: TEAL }} className="text-base">
                    We got it. Someone from our team will reach out within one
                    business day. Need to talk sooner? Call{" "}
                    <a
                      href="tel:8339123999"
                      className="font-bold underline"
                      style={{ color: NEAR_BLACK }}
                    >
                      (833) 912-3999
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstLastName" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        First and Last Name *
                      </label>
                      <input
                        id="firstLastName"
                        name="firstLastName"
                        type="text"
                        required
                        value={form.firstLastName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(000) 000-0000"
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                      style={inputStyle}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="edd" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        Estimated Due Date (EDD)
                      </label>
                      <input
                        id="edd"
                        name="edd"
                        type="text"
                        value={form.edd}
                        onChange={handleChange}
                        placeholder="e.g. August 2026"
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="priorBirths" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        First pregnancy? If no, number of prior births
                      </label>
                      <input
                        id="priorBirths"
                        name="priorBirths"
                        type="text"
                        value={form.priorBirths}
                        onChange={handleChange}
                        placeholder="Yes, or number of prior births"
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        Location (City and State) *
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={form.location}
                        onChange={handleChange}
                        placeholder="e.g. Van Nuys, CA"
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label htmlFor="plannedBirthLocation" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        Planned Birth Location
                      </label>
                      <input
                        id="plannedBirthLocation"
                        name="plannedBirthLocation"
                        type="text"
                        value={form.plannedBirthLocation}
                        onChange={handleChange}
                        placeholder="Hospital, birth center, or home"
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="healthcareProvider" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                      Healthcare Provider (OB/GYN, midwife, etc.)
                    </label>
                    <input
                      id="healthcareProvider"
                      name="healthcareProvider"
                      type="text"
                      value={form.healthcareProvider}
                      onChange={handleChange}
                      placeholder="Name of your OB/GYN or midwife"
                      className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label htmlFor="supportType" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                      Type of Support *
                    </label>
                    <select
                      id="supportType"
                      name="supportType"
                      required
                      value={form.supportType}
                      onChange={handleChange}
                      className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                      style={inputStyle}
                    >
                      <option value="">Select support type</option>
                      <option value="Birth Doula">Birth Doula</option>
                      <option value="Postpartum Doula">Postpartum Doula</option>
                      <option value="Both">Both</option>
                      <option value="VBAC Support">VBAC Support</option>
                      <option value="Cesarean Support">Cesarean Birth Support</option>
                      <option value="Pregnancy Loss Support">Pregnancy Loss Support</option>
                      <option value="Abortion Support">Abortion Support</option>
                      <option value="Not Sure">Not sure, I need help deciding</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="medicalPlan" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        Medi-Cal Managed Care Plan *
                      </label>
                      <select
                        id="medicalPlan"
                        name="medicalPlan"
                        required
                        value={form.medicalPlan}
                        onChange={handleChange}
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      >
                        <option value="">Select your plan</option>
                        <option value="LA Care">LA Care Health Plan</option>
                        <option value="Kaiser">Kaiser Permanente Southern CA</option>
                        <option value="HealthNet">HealthNet</option>
                        <option value="CalOptima">CalOptima</option>
                        <option value="Other Medi-Cal">Other Medi-Cal Plan</option>
                        <option value="Not Sure">Not sure / need help</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="memberId" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                        Member ID (optional)
                      </label>
                      <input
                        id="memberId"
                        name="memberId"
                        type="text"
                        value={form.memberId}
                        onChange={handleChange}
                        placeholder="Member ID Number"
                        className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-1" style={{ color: NEAR_BLACK }}>
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share any questions, concerns, or preferences"
                      className="w-full rounded-lg px-4 py-3 text-sm border focus:outline-none focus:ring-2 focus:ring-[#658B8B]"
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all disabled:opacity-60 hover:brightness-110 active:scale-[0.98]"
                    style={{
                      background: "linear-gradient(135deg, #3d8080 0%, #658B8B 100%)",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(101,139,139,0.45)",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-center leading-relaxed" style={{ color: "#777" }}>
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy-policy-and-tos" className="underline" style={{ color: TEAL }}>
                      Privacy Policy and Terms of Service
                    </a>
                    , and consent to being contacted by email or phone regarding
                    your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
