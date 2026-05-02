import Link from "next/link";
import {
  SquaresPlusIcon,
  BoltIcon,
  CircleStackIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import GoldButton from "@/components/GoldButton";

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════ HERO ══════════════════════════════════════════ */}
      <section
        className="min-h-screen flex items-center pt-20"
        style={{ backgroundColor: "#F5F2EC" }}
      >
        <div
          className="w-full mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center gap-16"
          style={{ maxWidth: "1280px" }}
        >
          {/* Left column */}
          <div className="flex-1 lg:w-[55%]">
            <div
              className="text-xs font-medium uppercase tracking-widest mb-6"
              style={{
                fontFamily: "var(--font-body)",
                color: "#C9A84C",
                letterSpacing: "0.04em",
              }}
            >
              AI-Native ERP for Distribution
            </div>

            <h1
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                fontWeight: 300,
                color: "#0D2137",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Your ERP Should Already Understand Your Business.
            </h1>

            <p
              className="mb-10 leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "#8A9BA8",
                lineHeight: 1.65,
              }}
            >
              Phargos is the AI-native ERP platform built for distribution operators. It knows your
              industry before you configure a single field — and it deploys in days, not months.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <GoldButton href="/demo">Request a Demo</GoldButton>
              <Link
                href="/platform/how-it-works"
                className="inline-block px-7 py-3.5 text-sm font-semibold rounded-sm border transition-colors duration-150 hover:bg-black/5"
                style={{
                  borderColor: "#0D2137",
                  color: "#0D2137",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.04em",
                }}
              >
                See How It Works
              </Link>
            </div>

            <p
              className="mt-4 text-sm"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              No consultants. No implementation fees. No six-month timelines.
            </p>
          </div>

          {/* Right column — brand mark placeholder */}
          <div
            className="lg:w-[45%] flex items-center justify-center"
            style={{ minHeight: "300px" }}
          >
            <div className="text-center">
              {/* [COPY NEEDED: Lucius to provide logo mark / hero visual] */}
              <div
                className="relative inline-block"
                style={{
                  width: "320px",
                  height: "320px",
                  border: "1px solid rgba(13,33,55,0.1)",
                  borderRadius: "2px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div
                    style={{
                      width: "80px",
                      height: "4px",
                      backgroundColor: "#C9A84C",
                    }}
                  />
                  <span
                    className="text-6xl tracking-widest"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "#0D2137",
                      fontWeight: 300,
                      opacity: 0.15,
                    }}
                  >
                    PHARGOS
                  </span>
                  <div
                    style={{
                      width: "80px",
                      height: "4px",
                      backgroundColor: "#C9A84C",
                    }}
                  />
                  <p
                    className="text-xs uppercase tracking-widest mt-2"
                    style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
                  >
                    [LOGO MARK — LUCIUS]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ PROBLEM/EMPATHY ══════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#F5F2EC" }}
      >
        <div
          className="mx-auto px-6 md:px-12"
          style={{ maxWidth: "800px" }}
        >
          <h2
            className="text-center mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 300,
              color: "#0D2137",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            The ERP That Was Supposed to Help You Is Buried Under Consultants, Timelines, and Promises.
          </h2>

          <div
            className="text-center space-y-5 mb-10"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "#8A9BA8",
              lineHeight: 1.65,
            }}
          >
            <p>
              You&apos;ve seen the pitch decks. Six-figure implementation costs. Consultants who&apos;ve never
              run a warehouse. Go-live dates that slip by quarters.
            </p>
            <p>
              Most ERP systems were designed to be configured — not to arrive knowing anything. You pay
              for the software, then you pay again to make it work for your business. Then you pay again
              when it doesn&apos;t.
            </p>
            <p>
              You didn&apos;t build a distribution business to manage software projects. You built it to move
              product, serve customers, and grow.
            </p>
          </div>

          {/* Pivot sentence separator */}
          <div className="flex justify-center mb-6">
            <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A84C" }} />
          </div>

          <p
            className="text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.75rem",
              fontWeight: 500,
              color: "#0D2137",
              lineHeight: 1.25,
            }}
          >
            Phargos is built on a different assumption: your ERP should do the hard work of
            understanding your industry. Not you.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════ PLATFORM OVERVIEW ══════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#0D2137" }}
      >
        <div
          className="mx-auto px-6 md:px-12"
          style={{ maxWidth: "1280px" }}
        >
          {/* Section intro */}
          <div className="text-center mb-16 mx-auto" style={{ maxWidth: "600px" }}>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: "#F5F2EC",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Intelligence First. Complexity Never.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "#8A9BA8",
                lineHeight: 1.65,
              }}
            >
              Phargos is not a traditional ERP with an AI module bolted on. AI is the configuration
              layer — it reads your business, knows your industry, and handles the setup work that
              used to require consultants.
            </p>
          </div>

          {/* Four pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: SquaresPlusIcon,
                title: "Industry Intelligence",
                body: "Phargos arrives knowing the structure of your business — your product categories, your pricing logic, your vendor relationships, your operational workflows. Distribution is baked in, not configured in.",
              },
              {
                icon: BoltIcon,
                title: "Rapid Deployment",
                body: "From contract to live in days. Not a pitch — a commitment. We do not send you a project manager. We send you a running system.",
              },
              {
                icon: CircleStackIcon,
                title: "Universal Data Model",
                body: "One schema to run your entire operation. Sales, inventory, purchasing, fulfillment — unified. When your data lives in one intelligent model, decisions get easier and exceptions get caught.",
              },
              {
                icon: ArrowTrendingUpIcon,
                title: "Grows With You",
                body: "Phargos is built for the operator who wants a platform that expands with the business — not one they'll outgrow in three years or be trapped in for ten.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-sm"
                style={{ backgroundColor: "#1A3A52" }}
              >
                <card.icon
                  className="mb-6"
                  style={{ width: "24px", height: "24px", color: "#C9A84C", strokeWidth: 1.5 }}
                />
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    color: "#F5F2EC",
                    lineHeight: 1.25,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    color: "#8A9BA8",
                    lineHeight: 1.65,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ INDUSTRY FIT ═════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#F5F2EC" }}
      >
        <div
          className="mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center"
          style={{ maxWidth: "1280px" }}
        >
          {/* Left text */}
          <div className="flex-1">
            <div
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-body)", color: "#C9A84C", letterSpacing: "0.04em" }}
            >
              Built for Distribution
            </div>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: 300,
                color: "#0D2137",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Built for Distribution. Ready on Day One.
            </h2>
            <div className="space-y-4 mb-8">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.125rem",
                  color: "#8A9BA8",
                  lineHeight: 1.65,
                }}
              >
                We started in hardwood and building products distribution because that&apos;s where we
                know the pain intimately. The species pricing. The footage vs. board-foot conversions.
                The vendor terms and the customer-specific pricing tiers. The complexity of managing
                inventory that comes in one form and ships in another.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.125rem",
                  color: "#8A9BA8",
                  lineHeight: 1.65,
                }}
              >
                Phargos knows this world. It was designed here.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1rem",
                  color: "#0D2137",
                  lineHeight: 1.65,
                }}
              >
                If you run a hardwood flooring distribution operation, a lumber yard, a millwork house,
                or a building products distributor — you won&apos;t spend a single hour explaining your
                business to Phargos. It already knows.
              </p>
            </div>
            <Link
              href="/industries/hardwood-distribution"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", color: "#C9A84C" }}
            >
              See the Hardwood Distribution Platform →
            </Link>
          </div>

          {/* Right — industry verticals */}
          <div className="flex-1">
            <div className="space-y-4">
              {[
                { label: "Hardwood Flooring Distribution", highlight: true },
                { label: "Lumber & Building Products" },
                { label: "Millwork & Moulding" },
                { label: "Specialty Wholesale Distribution" },
                { label: "Building Materials" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#C9A84C",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "#0D2137",
                    }}
                  >
                    {item.label}
                    {item.highlight && (
                      <span
                        className="ml-2 text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-sm"
                        style={{
                          border: "1px solid #C9A84C",
                          color: "#C9A84C",
                          letterSpacing: "0.04em",
                        }}
                      >
                        Live
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ COMPARISON TABLE ══════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#0D2137" }}
      >
        <div
          className="mx-auto px-6 md:px-12"
          style={{ maxWidth: "900px" }}
        >
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 300,
              color: "#F5F2EC",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            This Is Not What You&apos;ve Tried Before.
          </h2>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    className="text-left py-4 px-5"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      backgroundColor: "#0D2137",
                      color: "transparent",
                    }}
                  >
                    &nbsp;
                  </th>
                  <th
                    className="py-4 px-5 text-center"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#8A9BA8",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    }}
                  >
                    Traditional ERP
                  </th>
                  <th
                    className="py-4 px-5 text-center"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#C9A84C",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      backgroundColor: "rgba(201,168,76,0.08)",
                    }}
                  >
                    Phargos
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    attr: "Implementation Timeline",
                    traditional: "6–18 months",
                    phargos: "Days to weeks",
                  },
                  {
                    attr: "Implementation Cost",
                    traditional: "$50,000–$500,000+ in services fees",
                    phargos: "Zero. Included.",
                  },
                  {
                    attr: "Industry Configuration",
                    traditional: "You configure it (or pay consultants to)",
                    phargos: "AI handles industry configuration from day one",
                  },
                  {
                    attr: "Ongoing Customization",
                    traditional: "Change request → ticket → scoped project → invoice",
                    phargos: "Describe what you need. The platform adapts.",
                  },
                  {
                    attr: "Who It's Built For",
                    traditional: "IT departments and implementation consultants",
                    phargos: "The operator running the business",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.attr}
                    style={{
                      borderTop: "1px solid rgba(245,242,236,0.08)",
                    }}
                  >
                    <td
                      className="py-5 px-5 text-left"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "#F5F2EC",
                      }}
                    >
                      {row.attr}
                    </td>
                    <td
                      className="py-5 px-5 text-center"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        color: "#8A9BA8",
                        backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                      }}
                    >
                      {row.traditional}
                    </td>
                    <td
                      className="py-5 px-5 text-center"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        color: "#F5F2EC",
                        borderLeft: "2px solid #C9A84C",
                        backgroundColor: "rgba(201,168,76,0.06)",
                      }}
                    >
                      {row.phargos}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card stack */}
          <div className="md:hidden space-y-4">
            {[
              {
                attr: "Implementation Timeline",
                traditional: "6–18 months",
                phargos: "Days to weeks",
              },
              {
                attr: "Implementation Cost",
                traditional: "$50,000–$500,000+ in services fees",
                phargos: "Zero. Included.",
              },
              {
                attr: "Industry Configuration",
                traditional: "You configure it (or pay consultants to)",
                phargos: "AI handles industry configuration from day one",
              },
              {
                attr: "Ongoing Customization",
                traditional: "Change request → ticket → scoped project → invoice",
                phargos: "Describe what you need. The platform adapts.",
              },
              {
                attr: "Who It's Built For",
                traditional: "IT departments and implementation consultants",
                phargos: "The operator running the business",
              },
            ].map((row) => (
              <div
                key={row.attr}
                className="p-6 rounded-sm"
                style={{ backgroundColor: "#1A3A52" }}
              >
                <p
                  className="text-xs uppercase tracking-wider mb-3"
                  style={{ fontFamily: "var(--font-body)", color: "#8A9BA8", fontWeight: 500 }}
                >
                  {row.attr}
                </p>
                <p
                  className="text-sm line-through mb-2"
                  style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
                >
                  {row.traditional}
                </p>
                <p
                  className="text-base font-medium"
                  style={{ fontFamily: "var(--font-body)", color: "#F5F2EC" }}
                >
                  {row.phargos}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════ FOUNDER STATEMENT ═════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#F5F2EC" }}
      >
        <div
          className="mx-auto px-6 md:px-12"
          style={{ maxWidth: "800px" }}
        >
          <div
            className="text-xs font-medium uppercase tracking-widest text-center mb-10"
            style={{ fontFamily: "var(--font-body)", color: "#C9A84C", letterSpacing: "0.04em" }}
          >
            Built by Someone Who Ran the Business.
          </div>

          <div className="relative">
            {/* Decorative quote mark */}
            <div
              className="absolute -top-6 -left-4 select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "140px",
                lineHeight: 1,
                color: "#C9A84C",
                opacity: 0.4,
                zIndex: 0,
              }}
            >
              &ldquo;
            </div>

            <blockquote
              className="relative text-center"
              style={{ zIndex: 1 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 300,
                  color: "#0D2137",
                  lineHeight: 1.4,
                }}
              >
                I built Phargos because I needed it and it didn&apos;t exist. I ran a hardwood flooring
                distribution company. I looked at every ERP on the market. Every one of them wanted to
                charge me for six months of work before my people could do their jobs. That&apos;s broken.
                AI changes what&apos;s possible — it can carry the configuration burden that operators have
                always been forced to carry. That&apos;s what Phargos does. I built it for me first. Now
                I&apos;m building it for everyone else who runs a real business.
              </p>

              <div className="mt-8 flex justify-center">
                <div className="flex items-start gap-4">
                  <div
                    style={{ width: "2px", height: "24px", backgroundColor: "#C9A84C", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div className="text-left">
                    <div
                      className="font-semibold text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "#0D2137" }}
                    >
                      Stanton Dennison, Founder
                    </div>
                    <div
                      className="text-sm"
                      style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
                    >
                      Phargos
                    </div>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ SOCIAL PROOF ═════════════════════════════════════ */}
      <section
        className="py-16"
        style={{ backgroundColor: "#0D2137" }}
      >
        <div
          className="mx-auto px-6 md:px-12 text-center"
          style={{ maxWidth: "900px" }}
        >
          <div
            className="inline-block px-3 py-1.5 text-xs font-medium uppercase tracking-widest mb-8 rounded-sm"
            style={{
              border: "1px solid #C9A84C",
              color: "#C9A84C",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.04em",
            }}
          >
            In Production. Right Now.
          </div>

          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              fontWeight: 300,
              color: "#F5F2EC",
              lineHeight: 1.2,
            }}
          >
            Live with our first customer.
          </h2>

          <div
            className="space-y-4 mx-auto mb-10"
            style={{ maxWidth: "600px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "#8A9BA8",
                lineHeight: 1.65,
              }}
            >
              Phargos is live with our first customer — Teckton, a hardwood flooring distributor based
              in West Plains, Missouri. Real inventory. Real orders. Real operations.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "#8A9BA8",
                lineHeight: 1.65,
              }}
            >
              We didn&apos;t build a demo environment and call it ready. We built a platform, deployed it
              in a live distribution business, and proved it works. That&apos;s where we start every
              conversation.
            </p>
          </div>

          {/* Proof block */}
          <div className="inline-block text-center">
            <div
              className="mb-4 mx-auto"
              style={{ width: "40px", height: "2px", backgroundColor: "#C9A84C" }}
            />
            <div
              className="text-xl font-semibold"
              style={{ fontFamily: "var(--font-body)", color: "#F5F2EC" }}
            >
              Teckton
            </div>
            <div
              className="text-sm mt-1"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              Hardwood Flooring Distribution — West Plains, MO
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ FINAL CTA ═══════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#F5F2EC" }}
      >
        <div
          className="mx-auto px-6 md:px-12 text-center"
          style={{ maxWidth: "700px" }}
        >
          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "#0D2137",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Ready to See It in Your Business?
          </h2>

          <p
            className="mb-10 mx-auto"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "#8A9BA8",
              lineHeight: 1.65,
              maxWidth: "560px",
            }}
          >
            We don&apos;t do generic demos. We talk to you about your operation, your current system, and
            your real pain points — then we show you Phargos in the context of your business. No slide
            decks. No pressure. Just clarity.
          </p>

          <div className="flex flex-col items-center gap-4">
            <GoldButton href="/demo" style={{ padding: "16px 32px" }}>Request a Demo</GoldButton>
            <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}>
              Or reach us at{" "}
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
      </section>
    </>
  );
}
