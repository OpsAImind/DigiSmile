"use server";

import moment from "moment";

export const fetchAvailableAppointments = async (payload: any) => {
  const { appointment_date, city, showBooked= false } = payload;
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  
  // Create AbortController for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/get_appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ appointment_date, city }),
        signal: controller.signal
      }
    );
    
    clearTimeout(timeoutId);
    
    const jsonResponse = await apiResponse.json();
    if (apiResponse.status !== 200) throw jsonResponse;
    if(showBooked && jsonResponse?.slotss){
      jsonResponse.slotss = jsonResponse.slotss.filter((slot: any) => slot.status !== "booked");
    }

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      return { success: false, error: "Request timeout - API took too long to respond. Please check your connection." };
    }
    return { success: false, error: error.message || "Failed to fetch appointments. Please try again." };
  }
};

const formatTime = (time: string) => moment(time, "HH:mm:ss").format("h A");

export const fetchAppointmentHistory = async (userId: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/get_user_appointments/${userId}`,
      { method: "GET" }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.previous_appointments.map((item: any) => {
      item.name = "Dr Mahmood";
      item.start_end_time = `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`;
      return item;
    });

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const fetchAppointmentList = async (appointment_date: string) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/get_patient_appointments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ appointment_date })
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.appointments.map((item: any) => {
      item.start_end_time = `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`;
      return item;
    });

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const fetchUpcomingAppointment = async (userId: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/get_user_appointments/${userId}`,
      { method: "GET" }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.upcoming_appointments.map((item: any) => {
      item.name = "Dr Mahmood";
      item.start_end_time = `${formatTime(item.start_time)} - ${formatTime(item.end_time)}`;
      return item;
    });
    
    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const cancelAppointment = async (appointment_id: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/cancel_appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ appointment_id })
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const BookQuickAppointmentAction = async (
  payload: any,
  authToken: any
) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/book_appointment_existing_user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authToken}`
        },
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();
    
    if (apiResponse.status !== 201) {
      throw jsonResponse;
    }

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    // Try to extract error message from various possible fields
    let errorMessage = 
      error?.message || 
      error?.error || 
      error?.detail || 
      error?.error_message ||
      error?.error_detail ||
      "An error occurred while booking the appointment";
    
    // Add status code information if available
    if (error?.status_code || error?.status) {
      const statusCode = error.status_code || error.status;
      errorMessage += ` (Status: ${statusCode})`;
    }
    
    // Handle specific error cases
    if (errorMessage?.includes("could not locate runnable browser") || 
        error?.detail?.includes("could not locate runnable browser") ||
        JSON.stringify(error).includes("could not locate runnable browser")) {
      errorMessage = "The appointment booking system requires browser automation which is not configured on the server. Please contact the administrator to install a headless browser (Chrome/Chromium) on the Elastic Beanstalk instance.";
    }
    
    // If we have additional details, include them
    if (error?.detail && error.detail !== errorMessage) {
      errorMessage += `. Details: ${error.detail}`;
    }
    
    return { 
      success: false, 
      error: errorMessage,
      errorDetails: error // Include full error object for debugging
    };
  }
};

export const BookAppointmentAction = async (payload: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  
  // Remove empty start_time and end_time for new user appointments
  const cleanedPayload = { ...payload };
  if (!cleanedPayload.start_time || cleanedPayload.start_time === '') {
    delete cleanedPayload.start_time;
  }
  if (!cleanedPayload.end_time || cleanedPayload.end_time === '') {
    delete cleanedPayload.end_time;
  }
  
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/new_user_appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cleanedPayload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    // Provide user-friendly error message
    let errorMessage = error.message || "An error occurred while booking the appointment";
    if (error.message?.includes("could not locate runnable browser")) {
      errorMessage = "The appointment system is temporarily unavailable. Please try again later or contact us directly.";
    }
    return { success: false, error: errorMessage };
  }
};

export const RescheduleAppointmentAction = async (payload: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/reschedule_appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const AddMedicalRecordsAction = async (payload: any, authToken: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/add_medical_record`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authToken}`
        },
        body: JSON.stringify(payload)
      }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 201) throw jsonResponse;

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
