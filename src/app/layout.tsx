import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateLocalBusinessSchema, defaultBusinessInfo } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://mayphatdienhcm.vn"), // TODO: Thay bằng URL thật
  title: {
    default: "Sửa chữa & bán máy phát điện tại Hồ Chí Minh | Uy tín - Bảo hành",
    template: "%s | Máy Phát Điện HCM",
  },
  description:
    "Dịch vụ sửa chữa, bảo trì và bán máy phát điện uy tín tại TP.HCM. Hỗ trợ 24/7, có mặt trong 2 giờ, linh kiện chính hãng, bảo hành 12 tháng. Phục vụ hộ gia đình, doanh nghiệp, nhà máy.",
  keywords: [
    "sửa máy phát điện",
    "sửa chữa máy phát điện",
    "bảo trì máy phát điện",
    "bán máy phát điện",
    "máy phát điện Hồ Chí Minh",
    "máy phát điện TP.HCM",
    "cho thuê máy phát điện",
    "máy phát điện công nghiệp",
  ],
  authors: [{ name: "Máy Phát Điện HCM" }],
  creator: "Máy Phát Điện HCM",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://mayphatdienhcm.vn",
    siteName: "Máy Phát Điện HCM",
    title: "Sửa chữa & bán máy phát điện tại Hồ Chí Minh | Uy tín - Bảo hành",
    description:
      "Dịch vụ sửa chữa, bảo trì và bán máy phát điện uy tín tại TP.HCM. Hỗ trợ 24/7, linh kiện chính hãng, bảo hành 12 tháng.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Máy Phát Điện HCM - Sửa chữa và bán máy phát điện",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sửa chữa & bán máy phát điện tại Hồ Chí Minh",
    description: "Hỗ trợ 24/7, có mặt trong 2 giờ, bảo hành 12 tháng.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Thêm verification codes
    // google: "xxx",
  },
};

// Generate JSON-LD schema
const jsonLd = generateLocalBusinessSchema(defaultBusinessInfo);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Inject JSON-LD structured data cho SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
