import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  ProductsPreviewSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
} from "@/components/sections";
import { FloatingButtons, Navbar } from "@/components/ui";
import type { FloatingButtonItem } from "@/components/ui/FloatingButtons";
import { Phone, MessageCircle } from "lucide-react";

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
    icon: <MessageCircle className="w-6 h-6" />, // Sử dụng MessageCircle thay cho Zalo icon
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
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="mb-2">
              © {new Date().getFullYear()} Máy Phát Điện HCM. All rights
              reserved.
            </p>
            <p className="text-sm">
              Sửa chữa, bảo trì và bán máy phát điện uy tín tại Hồ Chí Minh
            </p>
          </div>
        </footer>
      </main>

      {/* Floating buttons - cấu hình qua props */}
      <FloatingButtons items={FLOATING_BUTTONS} />
    </>
  );
}
