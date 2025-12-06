import { Container, SectionTitle, Button } from "@/components/ui";
import { Zap, Fuel, Users } from "lucide-react";

// Interface cho product
interface Product {
  id: string;
  name: string;
  power: string;
  fuel: string;
  suitableFor: string;
  image: string;
  isNew: boolean;
}

// Dữ liệu sản phẩm demo
const PRODUCTS: Product[] = [
  {
    id: "honda-ep2500",
    name: "Honda EP2500CX",
    power: "2.2 kVA",
    fuel: "Xăng",
    suitableFor: "Hộ gia đình, văn phòng nhỏ",
    image: "/products/generator-1.jpg",
    isNew: true,
  },
  {
    id: "cummins-30kva",
    name: "Cummins C30D5",
    power: "30 kVA",
    fuel: "Diesel",
    suitableFor: "Nhà xưởng, công trình",
    image: "/products/generator-2.jpg",
    isNew: true,
  },
  {
    id: "denyo-45kva",
    name: "Denyo DCA-45",
    power: "45 kVA",
    fuel: "Diesel",
    suitableFor: "Công trình, sự kiện lớn",
    image: "/products/generator-3.jpg",
    isNew: false,
  },
  {
    id: "mitsubishi-100kva",
    name: "Mitsubishi MGS-100",
    power: "100 kVA",
    fuel: "Diesel",
    suitableFor: "Nhà máy, khu công nghiệp",
    image: "/products/generator-4.jpg",
    isNew: true,
  },
  {
    id: "kubota-15kva",
    name: "Kubota KJ-T150",
    power: "15 kVA",
    fuel: "Diesel",
    suitableFor: "Văn phòng, cửa hàng",
    image: "/products/generator-5.jpg",
    isNew: false,
  },
  {
    id: "perkins-250kva",
    name: "Perkins 1306A-E87TAG6",
    power: "250 kVA",
    fuel: "Diesel",
    suitableFor: "Bệnh viện, trung tâm dữ liệu",
    image: "/products/generator-6.jpg",
    isNew: true,
  },
];

/**
 * ProductsPreviewSection - Giới thiệu sản phẩm demo
 * Grid layout với CTA scroll-to-form
 */
export function ProductsPreviewSection() {
  return (
    <section id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionTitle
          title="Sản phẩm máy phát điện"
          subtitle="Đa dạng công suất từ các thương hiệu hàng đầu - đáp ứng mọi nhu cầu sử dụng"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                {/* Placeholder icon */}
                <Zap className="w-16 h-16 text-gray-400 dark:text-gray-500" strokeWidth={1} />

                {/* New badge */}
                {product.isNew && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mới
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-orange-500">
                      <Zap className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Công suất:{" "}
                      <strong className="text-gray-900 dark:text-white">
                        {product.power}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-blue-500">
                      <Fuel className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Nhiên liệu:{" "}
                      <strong className="text-gray-900 dark:text-white">
                        {product.fuel}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-500">
                      <Users className="w-4 h-4" />
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.suitableFor}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  href="#contact"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Nhận báo giá
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Còn nhiều model khác phù hợp với nhu cầu của bạn
          </p>
          <Button href="#contact" variant="primary">
            Liên hệ để tư vấn thêm
          </Button>
        </div>
      </Container>
    </section>
  );
}
