import { MetadataRoute } from "next";

const BASE_URL = "https://www.japantrippicks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/ramen`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cafe`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/spot`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hakone`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/hokkaido`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/shin-okubo`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/shukugawa`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/promotion`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
