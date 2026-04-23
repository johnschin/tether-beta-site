import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/beta/thanks"],
      },
      // Explicitly allow major AI crawlers
      {
        userAgent: [
          "GPTBot",           // OpenAI / ChatGPT
          "ChatGPT-User",     // ChatGPT browsing
          "anthropic-ai",     // Claude (Anthropic)
          "Claude-Web",       // Claude browsing
          "PerplexityBot",    // Perplexity AI
          "Googlebot-Extended", // Google AI Overviews
          "cohere-ai",        // Cohere
          "meta-externalagent", // Meta AI
          "CCBot",            // Common Crawl (used by many LLM training pipelines)
        ],
        allow: "/",
      },
    ],
    sitemap: "https://tetheredconsulting.com/sitemap.xml",
  };
}
