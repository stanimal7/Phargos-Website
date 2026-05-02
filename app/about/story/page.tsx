import Link from "next/link";

export default function AboutStoryPage() {
  return (
    <>
      <section className="pt-36 pb-16" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "800px" }}>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "#0D2137",
              lineHeight: 1.15,
            }}
          >
            Why Phargos Exists
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "#8A9BA8", lineHeight: 1.65 }}>
            {/* [COPY NEEDED: Felix to write Stanton's founder story — 4-6 paragraphs] */}
            The story of Phargos starts inside a real distribution business. More coming soon.
          </p>
        </div>
      </section>

      <section className="pb-24" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "800px" }}>
          {/* [COPY NEEDED: Full founder narrative — Felix Harmon to write] */}
          <div
            className="p-8 rounded-sm text-center"
            style={{ backgroundColor: "rgba(13,33,55,0.04)", border: "1px solid rgba(13,33,55,0.08)" }}
          >
            <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}>
              [COPY NEEDED] — Founder story content to be written by Felix Harmon. Should include: Stanton&apos;s background, running Teckton, the ERP search, the decision to build Phargos, the breakthrough, and where the company is today.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/demo"
              className="inline-block px-8 py-4 text-sm font-semibold rounded-sm transition-colors duration-150"
              style={{
                backgroundColor: "#C9A84C",
                color: "#0D2137",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.04em",
              }}
            >
              Ready to see it?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
