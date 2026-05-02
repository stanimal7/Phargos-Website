export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /studio
Disallow: /api

Sitemap: https://phargos.ai/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
