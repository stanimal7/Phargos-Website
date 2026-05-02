"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Note: metadata can't be exported from a "use client" component — handled via head tags below

type FormState = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID"; // [SETUP NEEDED: Replace with real Formspree form ID]

export default function DemoPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    if (!data.get("firstName")) errs.firstName = "First name is required.";
    if (!data.get("lastName")) errs.lastName = "Last name is required.";
    if (!data.get("company")) errs.company = "Company name is required.";
    if (!data.get("role")) errs.role = "Your role is required.";
    const email = data.get("email") as string;
    if (!email) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setState("submitting");
    setErrors({});

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        // Fire Plausible custom event if available
        if (typeof window !== "undefined" && (window as unknown as { plausible?: (event: string) => void }).plausible) {
          (window as unknown as { plausible: (event: string) => void }).plausible("demo_request_submitted");
        }
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    backgroundColor: "#FFFFFF",
    border: "1px solid #D8D5CF",
    borderRadius: "2px",
    padding: "12px 16px",
    width: "100%",
    color: "#0D2137",
    outline: "none",
    transition: "border-color 150ms ease",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#0D2137",
    marginBottom: "6px",
  };

  const errorStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "0.8125rem",
    color: "#C04040",
    marginTop: "4px",
    display: "block",
  };

  const requiredStar = (
    <span style={{ color: "#C9A84C", marginLeft: "2px" }}>*</span>
  );

  return (
    <>
      {/* Hero */}
      <section
        className="pt-36 pb-16"
        style={{ backgroundColor: "#F5F2EC" }}
      >
        <div
          className="mx-auto px-6 md:px-12 text-center"
          style={{ maxWidth: "800px" }}
        >
          <h1
            className="mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 300,
              color: "#0D2137",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Let&apos;s Talk About Your Operation.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "#8A9BA8",
              lineHeight: 1.65,
            }}
          >
            We don&apos;t do generic demos. We learn your business first, then show you Phargos in context.
            Fill out the form below and we&apos;ll reach out within one business day.
          </p>
        </div>
      </section>

      {/* Form + Trust */}
      <section
        className="pb-24"
        style={{ backgroundColor: "#F5F2EC" }}
      >
        <div
          className="mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16"
          style={{ maxWidth: "1000px" }}
        >
          {/* Form */}
          <div className="flex-1 lg:max-w-lg">
            {state === "success" ? (
              <div className="py-12">
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2rem",
                    fontWeight: 300,
                    color: "#0D2137",
                    lineHeight: 1.2,
                  }}
                >
                  You&apos;re on our list.
                </h2>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.125rem",
                    color: "#8A9BA8",
                    lineHeight: 1.65,
                  }}
                >
                  We&apos;ll be in touch within one business day. In the meantime, feel free to reach us
                  directly at{" "}
                  <a
                    href="mailto:hello@phargos.ai"
                    style={{ color: "#C9A84C" }}
                  >
                    hello@phargos.ai
                  </a>
                  .
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "#8A9BA8",
                    lineHeight: 1.6,
                  }}
                >
                  We don&apos;t do generic demos. We&apos;ll come prepared to talk about your operation specifically.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* First Name */}
                  <div>
                    <label style={labelStyle}>
                      First Name{requiredStar}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.firstName ? "#C04040" : "#D8D5CF",
                      }}
                      onFocus={(e) => {
                        if (!errors.firstName) (e.target as HTMLInputElement).style.borderColor = "#C9A84C";
                        (e.target as HTMLInputElement).style.borderWidth = "2px";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = errors.firstName ? "#C04040" : "#D8D5CF";
                        (e.target as HTMLInputElement).style.borderWidth = "1px";
                      }}
                    />
                    {errors.firstName && <span style={errorStyle}>{errors.firstName}</span>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label style={labelStyle}>
                      Last Name{requiredStar}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.lastName ? "#C04040" : "#D8D5CF",
                      }}
                      onFocus={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = "#C9A84C";
                        (e.target as HTMLInputElement).style.borderWidth = "2px";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLInputElement).style.borderColor = errors.lastName ? "#C04040" : "#D8D5CF";
                        (e.target as HTMLInputElement).style.borderWidth = "1px";
                      }}
                    />
                    {errors.lastName && <span style={errorStyle}>{errors.lastName}</span>}
                  </div>
                </div>

                {/* Company */}
                <div className="mb-5">
                  <label style={labelStyle}>
                    Company Name{requiredStar}
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    style={{
                      ...inputStyle,
                      borderColor: errors.company ? "#C04040" : "#D8D5CF",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#C9A84C";
                      (e.target as HTMLInputElement).style.borderWidth = "2px";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = errors.company ? "#C04040" : "#D8D5CF";
                      (e.target as HTMLInputElement).style.borderWidth = "1px";
                    }}
                  />
                  {errors.company && <span style={errorStyle}>{errors.company}</span>}
                </div>

                {/* Role */}
                <div className="mb-5">
                  <label style={labelStyle}>
                    Your Role{requiredStar}
                  </label>
                  <input
                    type="text"
                    name="role"
                    placeholder="Owner, Operations Manager, etc."
                    style={{
                      ...inputStyle,
                      borderColor: errors.role ? "#C04040" : "#D8D5CF",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#C9A84C";
                      (e.target as HTMLInputElement).style.borderWidth = "2px";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = errors.role ? "#C04040" : "#D8D5CF";
                      (e.target as HTMLInputElement).style.borderWidth = "1px";
                    }}
                  />
                  {errors.role && <span style={errorStyle}>{errors.role}</span>}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label style={labelStyle}>
                    Email Address{requiredStar}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@company.com"
                    style={{
                      ...inputStyle,
                      borderColor: errors.email ? "#C04040" : "#D8D5CF",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#C9A84C";
                      (e.target as HTMLInputElement).style.borderWidth = "2px";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = errors.email ? "#C04040" : "#D8D5CF";
                      (e.target as HTMLInputElement).style.borderWidth = "1px";
                    }}
                  />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>

                {/* Phone */}
                <div className="mb-5">
                  <label style={labelStyle}>
                    Phone{" "}
                    <span style={{ fontWeight: 400, color: "#8A9BA8" }}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 555-5555"
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#C9A84C";
                      (e.target as HTMLInputElement).style.borderWidth = "2px";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#D8D5CF";
                      (e.target as HTMLInputElement).style.borderWidth = "1px";
                    }}
                  />
                </div>

                {/* Current Software */}
                <div className="mb-5">
                  <label style={labelStyle}>
                    Current Software{" "}
                    <span style={{ fontWeight: 400, color: "#8A9BA8" }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="currentSoftware"
                    placeholder="What ERP or system are you using today?"
                    style={inputStyle}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#C9A84C";
                      (e.target as HTMLInputElement).style.borderWidth = "2px";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#D8D5CF";
                      (e.target as HTMLInputElement).style.borderWidth = "1px";
                    }}
                  />
                </div>

                {/* Tell us about your business */}
                <div className="mb-8">
                  <label style={labelStyle}>
                    Tell us about your business{" "}
                    <span style={{ fontWeight: 400, color: "#8A9BA8" }}>(optional but encouraged)</span>
                  </label>
                  <textarea
                    name="businessDescription"
                    rows={4}
                    placeholder="Brief description of your operation — what you distribute, how many locations, rough size"
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "#C9A84C";
                      (e.target as HTMLTextAreaElement).style.borderWidth = "2px";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLTextAreaElement).style.borderColor = "#D8D5CF";
                      (e.target as HTMLTextAreaElement).style.borderWidth = "1px";
                    }}
                  />
                </div>

                {state === "error" && (
                  <div
                    className="mb-5 p-4 rounded-sm text-sm"
                    style={{
                      backgroundColor: "rgba(192,64,64,0.08)",
                      border: "1px solid #C04040",
                      fontFamily: "var(--font-body)",
                      color: "#C04040",
                    }}
                  >
                    Something went wrong. Please try again or email us directly at hello@phargos.ai.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full py-4 text-sm font-semibold rounded-sm transition-colors duration-150 disabled:opacity-70"
                  style={{
                    backgroundColor: state === "submitting" ? "#B8973E" : "#C9A84C",
                    color: "#0D2137",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.04em",
                    cursor: state === "submitting" ? "not-allowed" : "pointer",
                  }}
                >
                  {state === "submitting" ? "Sending..." : "Request My Demo"}
                </button>
              </form>
            )}
          </div>

          {/* Trust elements */}
          <div className="lg:w-72 flex flex-col gap-6 lg:pt-4">
            {[
              {
                badge: "Live in Production",
                label: "In production at Teckton, West Plains, MO",
              },
              {
                badge: "Fast Deployment",
                label: "Deploys in days, not months",
              },
              {
                badge: "No Consultants",
                label: "No consultants required",
              },
            ].map((item) => (
              <div key={item.badge} className="flex items-start gap-4">
                <div
                  className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-sm flex-shrink-0"
                  style={{
                    border: "1px solid #C9A84C",
                    color: "#C9A84C",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.badge}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
                >
                  {item.label}
                </p>
              </div>
            ))}

            <div
              className="mt-4 pt-6"
              style={{ borderTop: "1px solid #E8E5DF" }}
            >
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
              >
                Prefer to reach out directly?{" "}
                <a
                  href="mailto:hello@phargos.ai"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "#C9A84C" }}
                >
                  hello@phargos.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
