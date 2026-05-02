import Link from "next/link";
import {
  SquaresPlusIcon,
  BoltIcon,
  CircleStackIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "How Phargos Works | AI-Native Distribution ERP",
  description:
    "Learn how Phargos deploys AI as the configuration layer — so your ERP understands your business from day one without consultants or lengthy setup.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "700px" }}>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "#F5F2EC",
              lineHeight: 1.15,
            }}
          >
            How Phargos Works
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "#8A9BA8", lineHeight: 1.65 }}>
            Phargos deploys AI as the configuration layer — so your ERP understands your business
            from day one. No consultants. No six-month setup. No learning curve.
          </p>
        </div>
      </section>

      {/* AI as Config Layer */}
      <section className="py-20" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "800px" }}>
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              fontWeight: 300,
              color: "#0D2137",
              lineHeight: 1.2,
            }}
          >
            AI as the Configuration Layer
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "#8A9BA8", lineHeight: 1.65 }}>
            {/* [COPY NEEDED: Felix to write — explain AI-first config vs traditional setup] */}
            Traditional ERP puts the configuration burden on you. Phargos inverts that model: the AI
            reads your industry, understands your workflows, and arrives ready to run. You describe your
            business; the platform does the rest.
          </p>
        </div>
      </section>

      {/* Day 1 to Day 100 */}
      <section className="py-20" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "800px" }}>
          <h2
            className="mb-12 text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              fontWeight: 300,
              color: "#F5F2EC",
              lineHeight: 1.2,
            }}
          >
            Day One to Day One Hundred
          </h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Sign", desc: "You sign on. We load your data — SKUs, customers, pricing tiers, vendor terms." },
              { step: "02", title: "Deploy", desc: "Your team is live on Phargos within days. No implementation project. No consultants on-site." },
              { step: "03", title: "Operate", desc: "Sales orders, purchase orders, inventory, AR — all running through one intelligent platform." },
              { step: "04", title: "Compound", desc: "The platform learns your patterns and surfaces insights before you ask for them." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div
                  className="text-4xl font-light flex-shrink-0 w-12"
                  style={{ fontFamily: "var(--font-heading)", color: "#C9A84C", opacity: 0.6 }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 500, color: "#F5F2EC" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#8A9BA8", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20" style={{ backgroundColor: "#F5F2EC" }}>
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "1280px" }}>
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2.5rem",
              fontWeight: 300,
              color: "#0D2137",
              lineHeight: 1.2,
            }}
          >
            The Four Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: SquaresPlusIcon, title: "Industry Intelligence", body: "Phargos arrives knowing the structure of your business — distribution is baked in, not configured in." },
              { icon: BoltIcon, title: "Rapid Deployment", body: "From contract to live in days. We send you a running system, not a project manager." },
              { icon: CircleStackIcon, title: "Universal Data Model", body: "One schema for your entire operation. Sales, inventory, purchasing, fulfillment — unified." },
              { icon: ArrowTrendingUpIcon, title: "Grows With You", body: "Built for the operator who wants a platform that expands with the business, not against it." },
            ].map((card) => (
              <div key={card.title} className="p-8 rounded-sm" style={{ backgroundColor: "#F5F2EC", border: "1px solid #E8E5DF" }}>
                <card.icon style={{ width: "24px", height: "24px", color: "#C9A84C", strokeWidth: 1.5, marginBottom: "20px" }} />
                <h3 className="mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 500, color: "#0D2137" }}>
                  {card.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#8A9BA8", lineHeight: 1.65 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#0D2137" }}>
        <div className="mx-auto px-6 md:px-12 text-center" style={{ maxWidth: "600px" }}>
          <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 300, color: "#F5F2EC", lineHeight: 1.2 }}>
            See It in Action
          </h2>
          <p className="mb-8" style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", color: "#8A9BA8", lineHeight: 1.65 }}>
            We&apos;ll walk through your specific operation — not a generic demo environment.
          </p>
          <Link
            href="/demo"
            className="inline-block px-8 py-4 text-sm font-semibold rounded-sm transition-colors duration-150"
            style={{ backgroundColor: "#C9A84C", color: "#0D2137", fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
