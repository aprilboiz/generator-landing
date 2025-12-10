import type { MetadataRoute } from "next";

/**
 * Sitemap - Giúp Google và các công cụ tìm kiếm index trang web
 * Next.js sẽ tự động tạo file sitemap.xml từ function này
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mayphatdienhcm.vercel.app"; // TODO: Thay bằng URL thật

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
