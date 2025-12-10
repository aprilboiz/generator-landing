import { Resend } from "resend";

// Initialize Resend with API key from env
const resend = new Resend(process.env.RESEND_API_KEY);

// Email recipient - CẦN CẬP NHẬT
const TO_EMAIL = process.env.CONTACT_EMAIL || "your-email@example.com";

interface ContactFormData {
  name?: string;
  phone: string;
  area?: string;
  serviceType?: string;
  message?: string;
}

/**
 * Gửi email thông báo khi có form liên hệ mới
 */
export async function sendContactNotification(data: ContactFormData) {
  const serviceLabels: Record<string, string> = {
    repair: "Sửa chữa máy phát điện",
    maintenance: "Bảo trì định kỳ",
    buy: "Mua máy phát điện",
    rent: "Thuê máy phát điện",
    other: "Khác",
  };

  const serviceType = data.serviceType
    ? serviceLabels[data.serviceType] || data.serviceType
    : "Không chọn";

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 20px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">📞 Yêu cầu tư vấn mới</h1>
      </div>
      
      <div style="background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong style="color: #374151;">Họ tên:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
              ${data.name || "Không cung cấp"}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong style="color: #374151;">Số điện thoại:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <a href="tel:${data.phone}" style="color: #f97316; font-weight: bold; text-decoration: none;">
                ${data.phone}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong style="color: #374151;">Khu vực:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
              ${data.area || "Không cung cấp"}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <strong style="color: #374151;">Nhu cầu:</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">
              ${serviceType}
            </td>
          </tr>
          ${
            data.message
              ? `
          <tr>
            <td colspan="2" style="padding: 15px 0;">
              <strong style="color: #374151;">Ghi chú:</strong>
              <div style="margin-top: 10px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; color: #1f2937;">
                ${data.message}
              </div>
            </td>
          </tr>
          `
              : ""
          }
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f97316;">
          <p style="margin: 0; color: #92400e; font-size: 14px;">
            ⏰ Khách hàng đang chờ phản hồi. Hãy liên hệ lại trong vòng 30 phút!
          </p>
        </div>
      </div>
      
      <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 20px;">
        Email này được gửi tự động từ form liên hệ trên website Máy Phát Điện HCM
      </p>
    </div>
  `;

  const { data: result, error } = await resend.emails.send({
    from: "Máy Phát Điện HCM <onboarding@resend.dev>", // Use custom domain later
    to: [TO_EMAIL],
    subject: `🔔 Yêu cầu mới từ ${data.name || data.phone} - ${serviceType}`,
    html: htmlContent,
  });

  if (error) {
    console.error("Failed to send email:", error);
    throw error;
  }

  return result;
}
