import emailjs from "@emailjs/browser";

interface EmailJSParams {
  [key: string]: string;
}

export const sendBusinessNotificationEmail = async (
  params: EmailJSParams
): Promise<{ success: boolean; error?: string }> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_BUSINESS_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  console.log("📧 [EmailJS] Sending business notification email...");
  console.log("📧 [EmailJS] Service ID:", serviceId);
  console.log("📧 [EmailJS] Template ID:", templateId);
  console.log("📧 [EmailJS] Public Key:", publicKey ? "Set" : "Missing");
  console.log("📧 [EmailJS] Email params:", params);

  if (!serviceId || !templateId || !publicKey) {
    const error = "EmailJS configuration missing. Check environment variables.";
    console.error("❌ [EmailJS] Configuration error:", error);
    return { success: false, error };
  }

  try {
    const response = await emailjs.send(serviceId, templateId, params, {
      publicKey: publicKey
    });

    console.log("✅ [EmailJS] Business email sent successfully!");
    console.log("✅ [EmailJS] Response:", response);
    return { success: true };
  } catch (error: any) {
    console.error("❌ [EmailJS] Business email failed:", error);
    console.error("❌ [EmailJS] Error details:", {
      text: error.text,
      status: error.status,
      message: error.message
    });
    return { success: false, error: error.text || error.message };
  }
};

export const sendThankYouEmail = async (
  params: EmailJSParams
): Promise<{ success: boolean; error?: string }> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_THANKYOU_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  console.log("📧 [EmailJS] Sending thank you email...");
  console.log("📧 [EmailJS] Service ID:", serviceId);
  console.log("📧 [EmailJS] Template ID:", templateId);
  console.log("📧 [EmailJS] Public Key:", publicKey ? "Set" : "Missing");
  console.log("📧 [EmailJS] Email params:", params);

  if (!serviceId || !templateId || !publicKey) {
    const error = "EmailJS configuration missing. Check environment variables.";
    console.error("❌ [EmailJS] Configuration error:", error);
    return { success: false, error };
  }

  try {
    const response = await emailjs.send(serviceId, templateId, params, {
      publicKey: publicKey
    });

    console.log("✅ [EmailJS] Thank you email sent successfully!");
    console.log("✅ [EmailJS] Response:", response);
    return { success: true };
  } catch (error: any) {
    console.error("❌ [EmailJS] Thank you email failed:", error);
    console.error("❌ [EmailJS] Error details:", {
      text: error.text,
      status: error.status,
      message: error.message
    });
    return { success: false, error: error.text || error.message };
  }
};
