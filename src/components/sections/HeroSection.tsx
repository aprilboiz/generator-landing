import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { Phone, CheckCircle } from "lucide-react";

// Thông tin liên hệ - CẦN CẬP NHẬT
const CONTACT_INFO = {
  hotline: "0909-XXX-XXX", // TODO: Thay bằng số thật
  zaloLink: "https://zalo.me/0909XXXXXX", // TODO: Thay bằng link Zalo thật
};

/**
 * HeroSection - Section đầu tiên, chứa H1 chính
 * Tối ưu SEO với H1 chứa từ khóa chính
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 dark:from-orange-500/10 dark:to-blue-500/10" />

      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-30 dark:opacity-30 dark:lg:opacity-50">
        <Image
          src="/generator-hero.png"
          alt="Máy phát điện công nghiệp tại Hồ Chí Minh - sửa chữa và bán máy phát điện"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/20 dark:border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-orange-600 dark:text-orange-300 text-sm font-medium">
              Hỗ trợ 24/7 - Có mặt trong 2 giờ
            </span>
          </div>

          {/* H1 - Tiêu đề chính với từ khóa SEO */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Sửa chữa & bán máy phát điện{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-600">
              tại Hồ Chí Minh
            </span>{" "}
            – nhanh, uy tín, có bảo hành
          </h1>

          {/* Subheading - Lợi ích */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Xử lý sự cố nhanh chóng, giảm thời gian ngừng hoạt động cho doanh
            nghiệp. Đội ngũ kỹ thuật hỗ trợ tận nơi, linh kiện chính hãng, bảo
            hành dài hạn.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              href={`tel:${CONTACT_INFO.hotline.replace(/-/g, "")}`}
              size="lg"
              leftIcon={<Phone className="w-5 h-5" />}
            >
              Gọi ngay: {CONTACT_INFO.hotline}
            </Button>

            <Button
              href={CONTACT_INFO.zaloLink}
              variant="secondary"
              size="lg"
              external
              leftIcon={<Image src="/zalo.png" alt="Zalo" width={32} height={32} />}
            >
              Nhắn Zalo
            </Button>

            <Button href="#contact" variant="outline" size="lg">
              Nhận tư vấn / báo giá
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>10+ năm kinh nghiệm</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>500+ khách hàng tin dùng</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Bảo hành 12 tháng</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
