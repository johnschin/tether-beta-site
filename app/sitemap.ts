import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tetheredconsulting.com";
  const now = new Date();

  return [
    // ── Core Next.js routes ──────────────────────────────────────────────────
    { url: base,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/for-employers`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/how-it-works`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/beta`,                lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/faq`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`,             lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // ── Static HTML pages (public/) ──────────────────────────────────────────
    { url: `${base}/tether-how-it-works.html`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tether-for-employees.html`,   lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tether-for-managers.html`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tether-for-hr.html`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tether-about.html`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tether-faq.html`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tether-contact.html`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tether-privacy-trust.html`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tether-ai-disclosure.html`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tether-crisis-protocol.html`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/tether-privacy.html`,         lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/tether-terms.html`,           lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
