import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";

// Interface cho dữ liệu form contact
interface ContactFormData {
  name?: string;
  phone: string;
  area?: string;
  serviceType?: string;
  message?: string;
}

/**
 * API Route: POST /api/contact
 * Xử lý form liên hệ từ landing page
 * Gửi email thông báo qua Resend
 */
export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validation cơ bản
    if (!data.phone) {
      return NextResponse.json(
        { success: false, error: "Số điện thoại là bắt buộc" },
        { status: 400 }
      );
    }

    // Validate phone format (Vietnamese phone)
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    const cleanPhone = data.phone.replace(/[\s-]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, error: "Số điện thoại không hợp lệ" },
        { status: 400 }
      );
    }

    // Log data
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log("Time:", new Date().toISOString());
    console.log("Name:", data.name || "Không cung cấp");
    console.log("Phone:", data.phone);
    console.log("Area:", data.area || "Không cung cấp");
    console.log("Service Type:", data.serviceType || "Không chọn");
    console.log("Message:", data.message || "Không có");
    console.log("===================================");

    // Gửi email thông báo
    try {
      await sendContactNotification(data);
      console.log("✅ Email sent successfully");
    } catch (emailError) {
      console.error("❌ Failed to send email:", emailError);
      // Không throw error - vẫn trả về success cho user
      // Email failure không nên block việc nhận form
    }

    return NextResponse.json({
      success: true,
      message: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất!",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Có lỗi xảy ra. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}

