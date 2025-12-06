import { ReactNode } from "react";
import { Container, SectionTitle } from "@/components/ui";
import { Phone, Search, FileText, CheckCircle } from "lucide-react";

// Interface cho process step
interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
}

// Các bước quy trình
const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Liên hệ tư vấn",
    description:
      "Gọi hotline hoặc gửi form để được tư vấn miễn phí. Chúng tôi lắng nghe và xác định nhu cầu của bạn.",
    icon: <Phone className="w-6 h-6" />,
  },
  {
    step: 2,
    title: "Khảo sát & chẩn đoán",
    description:
      "Kỹ thuật viên đến tận nơi kiểm tra máy, xác định chính xác nguyên nhân sự cố và tình trạng thiết bị.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    step: 3,
    title: "Báo giá rõ ràng",
    description:
      "Báo giá chi tiết, minh bạch trước khi sửa chữa. Không phát sinh chi phí ngoài dự kiến.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    step: 4,
    title: "Sửa chữa & bàn giao",
    description:
      "Thực hiện sửa chữa với linh kiện chính hãng. Bàn giao và hướng dẫn vận hành, kèm phiếu bảo hành.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

/**
 * ProcessSection - Quy trình làm việc
 * Timeline/stepper UI với số bước rõ ràng
 */
export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-800">
      <Container>
        <SectionTitle
          title="Quy trình làm việc"
          subtitle="Minh bạch - Chuyên nghiệp - Nhanh chóng"
        />

        <div className="relative">
          {/* Connection line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Mobile connector */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-200" />
                )}

                <div className="relative bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 text-center lg:text-left">
                  {/* Step number */}
                  <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/30 mb-4">
                    {item.step}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <span className="text-orange-500">{item.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
