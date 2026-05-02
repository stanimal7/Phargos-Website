import Link from "next/link";

export const metadata = {
  title: "ERP for Hardwood Flooring Distributors | Phargos",
  description:
    "Phargos is the AI-native ERP built for hardwood flooring distributors. We know species pricing, board-foot conversions, NHLA grading, lot tracking, and customer-specific pricing tiers.",
};

export default function HardwoodDistributionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "800px" }}>
          <div className="text-xs font-medium uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-body)", color: "#C9A84C", letterSpacing: "0.04em" }}>
            Industry
          </div>
          <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, color: "#F5F2EC", lineHeight: 1.15 }}>
            Phargos for Hardwood Distribution
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "#8A9BA8", lineHeight: 1.65 }}>
            Species pricing. Board-foot vs. square-foot conversions. Customer-specific tiers. Lot
            tracking. Vendor tallies. We know your world — because we run in it.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "1280px" }}>
          <h2 className="mb-12" style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 300, color: "#0D2137", lineHeight: 1.2 }}>
            The Pain Points We Solved First
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                pain: "Species & Grade Tracking",
                solution: "Phargos tracks every species and grade natively — White Oak Select, Red Oak #1 Common, Hickory Rustic — with proper inventory segmentation and pricing rules per grade.",
              },
              {
                pain: "Board-Foot vs. Square-Foot Conversions",
                solution: "Your customers order in square feet. Your vendors sell in board feet. Phargos handles the conversion automatically — no manual math, no spreadsheet.",
              },
              {
                pain: "Customer-Specific Pricing Tiers",
                solution: "Every installer gets a different price. Phargos maintains customer-specific pricing tiers without workarounds — it&apos;s how the platform is built.",
              },
              {
                pain: "Lot Tracking",
                solution: "Hardwood lots are never identical. Phargos tracks lot numbers through the supply chain so you can match inventory to customer orders accurately.",
              },
              {
                pain: "Vendor Tally Management",
                solution: "Managing vendor tallies is one of the most manual parts of hardwood distribution. Phargos makes it structured, traceable, and automated.",
              },
              {
                pain: "Remnant & Shorts Inventory",
                solution: "Shorts and remnants are real inventory with real value. Phargos tracks them separately with their own SKUs, pricing, and availability.",
              },
            ].map((item) => (
              <div key={item.pain} className="p-8 rounded-sm" style={{ border: "1px solid #E8E5DF" }}>
                <h3 className="mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 500, color: "#0D2137" }}>
                  {item.pain}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#8A9BA8", lineHeight: 1.65 }}>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Knowledge */}
      <section className="py-20" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "700px" }}>
          <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 300, color: "#F5F2EC", lineHeight: 1.2 }}>
            We Know This Industry.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "#8A9BA8", lineHeight: 1.65 }}>
            We know the NHLA grading rules. We know the difference between Surface Measure and board
            foot. We know what a tally list looks like. This specificity is not marketing — it is built
            into the platform.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "600px" }}>
          <div className="mb-4 mx-auto" style={{ width: "40px", height: "2px", backgroundColor: "#C9A84C" }} />
          <div className="text-xl font-semibold" style={{ fontFamily: "var(--font-body)", color: "#0D2137" }}>Teckton</div>
          <div className="text-sm mt-1 mb-8" style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}>Hardwood Flooring Distribution — West Plains, MO</div>
          <p className="text-base" style={{ fontFamily: "var(--font-body)", color: "#8A9BA8", lineHeight: 1.65 }}>
            Our first production deployment. Real inventory, real orders, real operations — running on Phargos today.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "600px" }}>
          <h2 className="mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 300, color: "#F5F2EC", lineHeight: 1.2 }}>
            Ready to see Phargos in your operation?
          </h2>
          <p className="mb-8" style={{ fontFamily: "var(--font-body)", color: "#8A9BA8", lineHeight: 1.65 }}>
            We&apos;ll talk through your specific business — not a generic demo.
          </p>
          <Link href="/demo" className="inline-block px-8 py-4 text-sm font-semibold rounded-sm" style={{ backgroundColor: "#C9A84C", color: "#0D2137", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}>
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
