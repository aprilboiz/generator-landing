import type { MetadataRoute } from "next";

/**
 * Robots.txt - Hướng dẫn cho các bot tìm kiếm
 * Next.js sẽ tự động tạo file robots.txt từ function này
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mayphatdienhcm.vercel.app"; // TODO: Thay bằng URL thật

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
