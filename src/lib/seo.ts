/**
 * SEO Utilities - JSON-LD Schema cho LocalBusiness
 * Chuẩn bị structured data cho máy tìm kiếm
 */

export interface LocalBusinessSchema {
  name: string;
  description: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  areaServed: string[];
  priceRange?: string;
  image?: string;
  url?: string;
}

/**
 * Tạo JSON-LD schema cho LocalBusiness
 * Sử dụng cho doanh nghiệp sửa chữa & bán máy phát điện
 */
export function generateLocalBusinessSchema(business: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": business.url || "",
    name: business.name,
    description: business.description,
    telephone: business.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    ...(business.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
    }),
    openingHours: business.openingHours,
    areaServed: business.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    ...(business.priceRange && { priceRange: business.priceRange }),
    ...(business.image && { image: business.image }),
    ...(business.url && { url: business.url }),
  };
}

/**
 * Tạo JSON-LD schema cho Service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: service.provider,
    },
    areaServed: service.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: service.serviceType,
  };
}

// Thông tin mặc định cho doanh nghiệp - CẦN CẬP NHẬT
export const defaultBusinessInfo: LocalBusinessSchema = {
  name: "Máy Phát Điện HCM",
  description:
    "Dịch vụ sửa chữa, bảo trì và bán máy phát điện uy tín tại Hồ Chí Minh. Hỗ trợ 24/7, linh kiện chính hãng, bảo hành dài hạn.",
  telephone: "0909-XXX-XXX", // TODO: Thay bằng số thật
  address: {
    streetAddress: "123 Đường ABC", // TODO: Thay bằng địa chỉ thật
    addressLocality: "Quận Bình Tân",
    addressRegion: "Hồ Chí Minh",
    postalCode: "700000",
    addressCountry: "VN",
  },
  openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-17:00"],
  areaServed: [
    "Hồ Chí Minh",
    "Bình Dương",
    "Đồng Nai",
    "Long An",
    "Tây Ninh",
  ],
  priceRange: "$$",
  url: "https://mayphatdienhcm.vn", // TODO: Thay bằng URL thật
};
