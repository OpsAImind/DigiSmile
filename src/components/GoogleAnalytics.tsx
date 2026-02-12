"use client";

import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    const gtagId = process.env.NEXT_PUBLIC_APP_GTAG || "G-E2B9YLRY27";
    
    if (!gtagId) {
      console.warn("Google Analytics ID not found. Please set NEXT_PUBLIC_APP_GTAG in your .env file");
      return;
    }

    // Load the gtag script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
    document.head.appendChild(script1);

    // Initialize gtag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagId}');
    `;
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
}

