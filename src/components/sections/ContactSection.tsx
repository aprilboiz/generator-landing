"use client";

import { useState, FormEvent } from "react";
import { Container, SectionTitle, Input, TextArea, Button } from "@/components/ui";
import { Check, MapPin, Mail } from "lucide-react";

const CONTACT_INFO = {
  hotline: "0909-XXX-XXX",
  zaloLink: "https://zalo.me/0909XXXXXX",
  address: "81 Đường số 3, Quận Bình Tân, TP. Hồ Chí Minh",
  email: "contact@mayphatdienhcm.vn",
};

const SERVICE_TYPES = [
  { value: "repair", label: "Sửa chữa máy phát điện" },
  { value: "maintenance", label: "Bảo trì định kỳ" },
  { value: "buy", label: "Mua máy phát điện" },
  { value: "rent", label: "Thuê máy phát điện" },
  { value: "other", label: "Khác" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      area: formData.get("area") as string,
      serviceType: formData.get("serviceType") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Gửi form thất bại");
      setFormStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormStatus("error");
      setErrorMessage("Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionTitle title="Liên hệ tư vấn" subtitle="Để lại thông tin, chúng tôi sẽ liên hệ trong vòng 30 phút" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
            {formStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 text-green-500 flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gửi thành công!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Chúng tôi sẽ liên hệ bạn sớm nhất.</p>
                <Button onClick={() => setFormStatus("idle")} variant="outline">Gửi yêu cầu khác</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input label="Họ tên" name="name" placeholder="Nguyễn Văn A" />
                  <Input label="Số điện thoại" name="phone" type="tel" placeholder="0909 xxx xxx" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Input label="Khu vực" name="area" placeholder="Quận/Huyện, Tỉnh/TP" />
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Loại nhu cầu</label>
                    <select name="serviceType" className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500">
                      {SERVICE_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <TextArea label="Mô tả chi tiết" name="message" placeholder="Mô tả tình trạng máy, model, công suất..." />
                {formStatus === "error" && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={formStatus === "loading"}>
                  {formStatus === "loading" ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Hotline 24/7</h3>
              <a href={`tel:${CONTACT_INFO.hotline.replace(/-/g, "")}`} className="text-2xl font-bold hover:underline">{CONTACT_INFO.hotline}</a>
              <p className="text-orange-100 mt-2 text-sm">Gọi ngay để được hỗ trợ nhanh nhất</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500"><MapPin className="w-5 h-5" /></span>
                <div><p className="font-medium text-gray-900 dark:text-white">Địa chỉ xưởng</p><p className="text-gray-600 dark:text-gray-300 text-sm">{CONTACT_INFO.address}</p></div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500"><Mail className="w-5 h-5" /></span>
                <div><p className="font-medium text-gray-900 dark:text-white">Email</p><p className="text-gray-600 dark:text-gray-300 text-sm">{CONTACT_INFO.email}</p></div>
              </div>
            </div>
            <Button href={CONTACT_INFO.zaloLink} variant="secondary" size="lg" className="w-full" external>Nhắn Zalo ngay</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
