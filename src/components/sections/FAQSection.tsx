"use client";

import { useState } from "react";
import { Container, SectionTitle } from "@/components/ui";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    question: "Chi phí sửa chữa máy phát điện khoảng bao nhiêu?",
    answer: "Chi phí phụ thuộc vào tình trạng hư hỏng và loại máy. Chúng tôi khảo sát miễn phí và báo giá trước khi sửa. Thông thường dao động từ 500.000đ - 5.000.000đ.",
  },
  {
    id: 2,
    question: "Bao lâu nên bảo trì máy phát điện một lần?",
    answer: "Khuyến nghị 3-6 tháng/lần hoặc sau mỗi 250 giờ vận hành. Máy sử dụng thường xuyên nên bảo trì 3 tháng/lần.",
  },
  {
    id: 3,
    question: "Khu vực nào được hỗ trợ dịch vụ?",
    answer: "Phục vụ toàn bộ TP.HCM và các tỉnh: Bình Dương, Đồng Nai, Long An, Tây Ninh, Bà Rịa - Vũng Tàu.",
  },
  {
    id: 4,
    question: "Thời gian sửa chữa mất bao lâu?",
    answer: "Đa số xử lý trong ngày (2-8 giờ). Sự cố phức tạp có thể 1-3 ngày. Luôn thông báo trước thời gian dự kiến.",
  },
  {
    id: 5,
    question: "Chế độ bảo hành như thế nào?",
    answer: "Bảo hành 6-12 tháng cho sửa chữa. Máy mới bảo hành chính hãng 12-24 tháng. Lỗi kỹ thuật được sửa/thay miễn phí.",
  },
  {
    id: 6,
    question: "Có hỗ trợ khẩn cấp 24/7 không?",
    answer: "Có, hỗ trợ 24/7 cho trường hợp cấp bách. Phí ngoài giờ cao hơn 20-30%.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const toggleItem = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800">
      <Container narrow>
        <SectionTitle title="Câu hỏi thường gặp" subtitle="Giải đáp thắc mắc về dịch vụ sửa chữa và bảo trì máy phát điện" />
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                aria-expanded={openId === item.id}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">{item.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center transition-transform ${openId === item.id ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openId === item.id ? "max-h-96" : "max-h-0"}`}>
                <div className="p-5 text-gray-600 dark:text-gray-300 leading-relaxed bg-white dark:bg-gray-800">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
