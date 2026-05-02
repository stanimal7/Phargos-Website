import Link from "next/link";

export default function IntegrationsPage() {
  return (
    <section className="pt-36 pb-24" style={{ backgroundColor: "#F5F2EC" }}>
      <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "700px" }}>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 300, color: "#0D2137", lineHeight: 1.15 }}>
          Integrations
        </h1>
        <p className="mb-10" style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "#8A9BA8", lineHeight: 1.65 }}>
          {/* [COPY NEEDED: Felix to write integrations content — post-launch] */}
          Phargos connects to the tools your business already uses. Full integrations page coming soon.
        </p>
        <Link href="/demo" className="inline-block px-8 py-4 text-sm font-semibold rounded-sm" style={{ backgroundColor: "#C9A84C", color: "#0D2137", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
          Request a Demo
        </Link>
      </div>
    </section>
  );
}
