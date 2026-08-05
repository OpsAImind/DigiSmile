import { permanentRedirect } from "next/navigation";

// The emergency landing page has been consolidated into the main
// appointment page. Preserve the old URL by permanently redirecting it.
export default function EmergencyDentalCareRedirect() {
  permanentRedirect("/appointment");
}
