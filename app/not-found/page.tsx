"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/scnbl-icon.png";

const Custom404 = () => {
  const router = useRouter();

  const handleScanAgain = () => {
    // Try to open the user's camera or a QR code scanning app
    if (navigator.userAgent.match(/Android/i)) {
      // For Android, try to open a default scanning app
      window.location.href =
        "intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end;";
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      // iOS typically has built-in QR code scanning in the camera app
      alert("Please use your Camera app to scan the QR code again.");
    } else {
      // Fallback: Redirect to a third-party QR code scanner (optional)
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      <Image src={logo} alt="Logo" width={120} className="mb-8" />
      <h1 className="text-2xl font-bold text-[#686CFF] mb-4">
        Invalid QR Code
      </h1>
      <p className="text-md text-gray-600 mb-8">
        It looks like the QR code was not scanned properly or is invalid. Please
        try scanning again.
      </p>
      <button
        onClick={handleScanAgain}
        className="px-6 py-3 text-white bg-[#686CFF] hover:bg-[#8889FF] font-semibold rounded-md transition-all duration-200"
      >
        Scan Again
      </button>
    </div>
  );
};

export default Custom404;
