import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers — allow all public pages, block internal routes
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/beta/thanks",
        ],
        crawlDelay: 1,
      },
      // AI crawlers — explicitly allowed on all public pages
      {
        userAgent: [
          "GPTBot",             // OpenAI / ChatGPT
          "ChatGPT-User",       // ChatGPT browsing mode
          "anthropic-ai",       // Anthropic training
          "Claude-Web",         // Claude browsing mode
          "ClaudeBot",          // Anthropic crawler
          "PerplexityBot",      // Perplexity AI
          "Google-Extended",    // Google AI Overviews (correct agent name)
          "Googlebot",          // Google search
          "Bingbot",            // Microsoft Bing
          "cohere-ai",          // Cohere AI
          "meta-externalagent", // Meta AI
          "FacebookBot",        // Meta / Facebook
          "Applebot",           // Apple
          "Amazonbot",          // Amazon Alexa
          "CCBot",              // Common Crawl (used by many LLM training pipelines)
        ],
        allow: "/",
      },
    ],
    sitemap: "https://tetheredconsulting.com/sitemap.xml",
  };
}
