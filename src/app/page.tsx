import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  ProductsPreviewSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
  Footer,
} from "@/components/sections";
import { FloatingButtons, Navbar } from "@/components/ui";
import type { FloatingButtonItem } from "@/components/ui/FloatingButtons";
import { Phone } from "lucide-react";
import Image from "next/image";

// Cấu hình floating buttons - dễ dàng thêm/bớt/chỉnh sửa
const FLOATING_BUTTONS: FloatingButtonItem[] = [
  {
    id: "call",
    href: "tel:0909XXXXXX", // TODO: Thay bằng số thật
    ariaLabel: "Gọi ngay",
    label: "Gọi ngay",
    icon: <Phone className="w-6 h-6" />,
    gradient: "from-green-500 to-green-600",
    shadowColor: "green-500/30",
    pulse: true,
  },
  {
    id: "zalo",
    href: "https://zalo.me/0909XXXXXX", // TODO: Thay bằng link thật
    ariaLabel: "Nhắn Zalo",
    label: "Nhắn Zalo",
    icon: <Image src="/zalo.png" alt="Zalo" width={32} height={32} />,
    gradient: "from-blue-500 to-blue-600",
    shadowColor: "blue-500/30",
    external: true,
  },
];

/**
 * Landing Page - Máy Phát Điện HCM
 * Single-page layout với các section chính
 * Pre-rendered (SSG) mặc định với App Router
 */
export default function HomePage() {
  return (
    <>
      {/* Navbar - cố định trên cùng */}
      <Navbar />

      <main>
        {/* Hero - H1 chính với CTA */}
        <HeroSection />

        {/* Dịch vụ chính */}
        <ServicesSection />

        {/* Quy trình làm việc */}
        <ProcessSection />

        {/* Sản phẩm demo */}
        <ProductsPreviewSection />

        {/* Tại sao chọn chúng tôi + Testimonials */}
        <TestimonialsSection />

        {/* FAQ */}
        <FAQSection />

        {/* Form liên hệ */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Floating buttons - cấu hình qua props */}
      <FloatingButtons items={FLOATING_BUTTONS} />
    </>
  );
}
