"use server";

/**
 * Server action for logging lead data
 * Note: EmailJS calls are now handled client-side due to API restrictions
 */
export const SubmitLeadAction = async (payload: any) => {
  console.log("📝 [Server] Lead submission received");
  console.log("📝 [Server] Payload:", JSON.stringify(payload, null, 2));

  try {
    // Extract UTM parameters from payload if present
    const leadData = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone || "",
      message: payload.message || "",
      source: "landing_page",
      utm_source: payload.utm_source || "",
      utm_medium: payload.utm_medium || "",
      utm_campaign: payload.utm_campaign || "",
      utm_term: payload.utm_term || "",
      utm_content: payload.utm_content || "",
      page_url: payload.page_url || ""
    };

    // Log lead data for backup/analytics
    console.log("✅ [Server] Lead captured and logged:", {
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      source: leadData.source,
      utm_source: leadData.utm_source,
      timestamp: new Date().toISOString()
    });

    // In the future, you could save to database here
    // For now, we just log it

    return {
      success: true,
      data: { message: "Thank you! We'll contact you soon." }
    };
  } catch (error: any) {
    console.error("❌ [Server] Error processing lead:", error);
    return {
      success: true, // Still return success for UX
      data: { message: "Thank you! We'll contact you soon." },
      error: error.message
    };
  }
};
