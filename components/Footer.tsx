import Link from "next/link";

const footerLinks = {
  platform: [
    { label: "How It Works", href: "/platform/how-it-works" },
    { label: "Industries", href: "/industries/hardwood-distribution" },
    { label: "Integrations", href: "/platform/integrations" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About / Story", href: "/about/story" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/demo" },
    { label: "Demo", href: "/demo" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D2137" }}>
      <div
        className="mx-auto px-6 md:px-12 pt-16 pb-10"
        style={{ maxWidth: "1280px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 - Brand */}
          <div>
            <div
              className="text-xl tracking-widest uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#F5F2EC",
                fontWeight: 300,
                letterSpacing: "0.15em",
              }}
            >
              PHARGOS
            </div>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              Clarity in complexity. Built for operators.
            </p>
            <a
              href="mailto:hello@phargos.ai"
              className="mt-3 text-sm block transition-opacity hover:opacity-80"
              style={{ fontFamily: "var(--font-body)", color: "#C9A84C" }}
            >
              hello@phargos.ai
            </a>
          </div>

          {/* Col 2 - Platform */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              Platform
            </div>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(245,242,236,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Company */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              Company
            </div>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ fontFamily: "var(--font-body)", color: "rgba(245,242,236,0.7)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Connect */}
          <div>
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              Connect
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm transition-opacity hover:opacity-100"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(245,242,236,0.7)" }}
                >
                  LinkedIn {/* [COPY NEEDED: LinkedIn URL] */}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm transition-opacity hover:opacity-100"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(245,242,236,0.7)" }}
                >
                  Twitter / X {/* [COPY NEEDED: Twitter/X URL] */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
          >
            © 2026 Phargos. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs transition-opacity hover:opacity-100"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs transition-opacity hover:opacity-100"
              style={{ fontFamily: "var(--font-body)", color: "#8A9BA8" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
