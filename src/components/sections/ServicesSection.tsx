import { ReactNode } from "react";
import { Container, SectionTitle } from "@/components/ui";
import { Wrench, ShieldCheck, Package, ArrowLeftRight } from "lucide-react";

// Interface cho service item
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

// Dữ liệu dịch vụ - dễ cập nhật/i18n sau này
const SERVICES: ServiceItem[] = [
  {
    id: "repair",
    title: "Sửa chữa máy phát điện tại chỗ",
    description:
      "Đội ngũ kỹ thuật có mặt nhanh chóng, sửa chữa tại chỗ giúp máy hoạt động trở lại trong thời gian ngắn nhất.",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    id: "maintenance",
    title: "Bảo trì định kỳ",
    description:
      "Gói bảo trì hàng tháng/quý giúp phát hiện sớm sự cố, kéo dài tuổi thọ máy và tiết kiệm chi phí vận hành.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    id: "sales",
    title: "Bán máy phát điện mới & đã qua sử dụng",
    description:
      "Đa dạng model từ các thương hiệu uy tín, đáp ứng nhu cầu từ hộ gia đình đến nhà máy công nghiệp.",
    icon: <Package className="w-8 h-8" />,
  },
  {
    id: "rental",
    title: "Cho thuê máy phát điện",
    description:
      "Giải pháp linh hoạt cho sự kiện, công trình, hoặc khi máy đang sửa chữa. Giao máy nhanh, hỗ trợ kỹ thuật.",
    icon: <ArrowLeftRight className="w-8 h-8" />,
  },
];

/**
 * ServicesSection - Hiển thị các dịch vụ chính
 * Card layout responsive với hover effects
 */
export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionTitle
          title="Dịch vụ của chúng tôi"
          subtitle="Giải pháp toàn diện cho máy phát điện - Từ sửa chữa, bảo trì đến mua bán và cho thuê"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
