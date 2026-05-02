export default function TermsPage() {
  return (
    <section className="pt-36 pb-24" style={{ backgroundColor: "#F5F2EC" }}>
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "800px" }}>
        <h1
          className="mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "3rem",
            fontWeight: 300,
            color: "#0D2137",
            lineHeight: 1.15,
          }}
        >
          Terms of Service
        </h1>
        <p style={{ fontFamily: "var(--font-body)", color: "#8A9BA8", lineHeight: 1.65 }}>
          {/* [COPY NEEDED: Terms of Service — coordinate with Stan/legal] */}
          Terms of service coming soon. For questions, contact{" "}
          <a href="mailto:hello@phargos.ai" style={{ color: "#C9A84C" }}>
            hello@phargos.ai
          </a>
          .
        </p>
      </div>
    </section>
  );
}
