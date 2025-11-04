"use server";

export const fetchUserPrescription = async (userId: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/get_medical_records/${userId}`,
      { method: "GET" }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.medical_records.map((item: any) => {
      item.name = "Dr Mahmood";
      return item;
    });

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

export const fetchUserCheckups = async (userId: any) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://depn5ffnux7yu.cloudfront.net";
  try {
    const apiResponse = await fetch(
      `${apiBaseUrl}/get_medical_records/${userId}`,
      { method: "GET" }
    );
    const jsonResponse = await apiResponse.json();

    if (apiResponse.status !== 200) throw jsonResponse;

    jsonResponse.medical_records.map((item: any) => {
      item.name = "Dr Mahmood";
      return item;
    });

    return { success: true, data: jsonResponse };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};
