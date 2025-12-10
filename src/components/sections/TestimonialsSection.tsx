import { Container, SectionTitle } from "@/components/ui";
import { ShieldCheck, Clock, Wallet, Quote } from "lucide-react";

// Số liệu nổi bật
const STATS = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "500+", label: "Khách hàng tin dùng" },
  { value: "2000+", label: "Máy đã sửa chữa" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

// Testimonials demo
const TESTIMONIALS = [
  {
    id: 1,
    name: "Nguyễn Văn Minh",
    role: "Giám đốc",
    company: "Công ty TNHH Sản xuất Văn Minh",
    content:
      "Đội ngũ kỹ thuật rất chuyên nghiệp, xử lý sự cố nhanh chóng. Chúng tôi đã hợp tác bảo trì định kỳ hơn 3 năm, máy móc luôn hoạt động ổn định.",
    avatar: null,
  },
  {
    id: 2,
    name: "Trần Thị Hồng",
    role: "Quản lý",
    company: "Khách sạn Xanh",
    content:
      "Giá cả hợp lý, báo giá rõ ràng từ đầu. Đặc biệt ấn tượng với tốc độ phản hồi - gọi điện là có mặt trong vòng 2 tiếng.",
    avatar: null,
  },
];

/**
 * TestimonialsSection - Lý do chọn chúng tôi + đánh giá khách hàng
 */
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      <Container>
        <SectionTitle
          title="Tại sao chọn chúng tôi?"
          subtitle="Uy tín được xây dựng từ chất lượng dịch vụ và sự hài lòng của khách hàng"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gray-900/5 dark:bg-white/5 backdrop-blur border border-gray-900/10 dark:border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Commitments */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Bảo hành dài hạn</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Bảo hành 6-12 tháng cho dịch vụ sửa chữa, đổi mới linh kiện nếu
                lỗi kỹ thuật.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Phản hồi nhanh chóng</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Có mặt trong vòng 2 giờ tại TP.HCM và các tỉnh lân cận.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-900/5 dark:bg-white/5 border border-gray-900/10 dark:border-white/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">Giá cả minh bạch</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Báo giá trước khi sửa, không phát sinh chi phí ẩn.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-2xl bg-gray-900/5 dark:bg-white/5 backdrop-blur border border-gray-900/10 dark:border-white/10"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-orange-500/50 mb-4" />

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
