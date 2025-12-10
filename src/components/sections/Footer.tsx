"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";

// Contact info - CẦN CẬP NHẬT
const CONTACT_INFO = {
  hotline: "0909-XXX-XXX",
  email: "contact@mayphatdienhcm.vn",
  address: "81 Đường số 3, Quận Bình Tân, TP. Hồ Chí Minh",
  workingHours: "24/7 - Hỗ trợ khẩn cấp",
  zaloLink: "https://zalo.me/0909XXXXXX",
};

// Quick links
const QUICK_LINKS = [
  { label: "Dịch vụ", href: "#services" },
  { label: "Quy trình", href: "#process" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Về chúng tôi", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Liên hệ", href: "#contact" },
];

// Services
const SERVICES = [
  "Sửa chữa máy phát điện",
  "Bảo trì định kỳ",
  "Bán máy phát điện mới",
  "Cho thuê máy phát điện",
  "Cung cấp phụ tùng",
  "Tư vấn lắp đặt",
];

/**
 * Footer - Professional footer with multiple columns
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="border-b border-gray-800">
        <Container className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-lg text-white">Máy Phát Điện</span>
                  <span className="text-orange-500 font-bold text-lg"> HCM</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Chuyên sửa chữa, bảo trì và cung cấp máy phát điện uy tín tại TP.HCM. 
                Hơn 10 năm kinh nghiệm, phục vụ hơn 500 khách hàng doanh nghiệp.
              </p>
              {/* Social/Zalo */}
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT_INFO.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  aria-label="Zalo"
                >
                  <Image src="/zalo.png" alt="Zalo" width={24} height={24} />
                </a>
                <a
                  href={`tel:${CONTACT_INFO.hotline.replace(/-/g, "")}`}
                  className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-colors"
                  aria-label="Gọi điện"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Dịch vụ</h3>
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Liên hệ</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Hotline</p>
                    <a
                      href={`tel:${CONTACT_INFO.hotline.replace(/-/g, "")}`}
                      className="text-white font-medium hover:text-orange-500 transition-colors"
                    >
                      {CONTACT_INFO.hotline}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-white font-medium hover:text-orange-500 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Địa chỉ</p>
                    <p className="text-white text-sm">{CONTACT_INFO.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Giờ làm việc</p>
                    <p className="text-white text-sm">{CONTACT_INFO.workingHours}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <Container className="py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Máy Phát Điện HCM. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            Sửa chữa, bảo trì và bán máy phát điện uy tín tại Hồ Chí Minh
          </p>
        </div>
      </Container>
    </footer>
  );
}
