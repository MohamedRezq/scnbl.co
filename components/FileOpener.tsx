"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import logo from "@/public/scnbl-icon.png";

const FileOpener = ({ typeId, content }: { typeId: number; content: any }) => {
  useEffect(() => {
    switch (typeId) {
      case 1: // open website url: content.url
        window.location.href = content.url; // Open the website URL
        break;
      case 2: // open pdf file: content.file
        window.location.href = content.file; // Open the PDF URL
        break;
      case 3: // Open social media link: content.file
        window.location.href = content.file; // Open the social media profile
        break;
      case 4: // open location url on google maps: content.url
        window.location.href = `https://maps.google.com/?q=${content.url}`; // Open the location in Google Maps
        break;
      case 5: // open image: content.image
        window.location.href = content.image; // Open the image URL
        break;
      case 6: // open default email sender app with receivers: content.receivers, subject: content.subject, body: content.body
        window.location.href = `mailto:${
          content.receivers
        }?subject=${encodeURIComponent(
          content.subject
        )}&body=${encodeURIComponent(content.body)}`; // Open the email client
        break;
      case 7: // open caller app to call: content.number
        window.location.href = `tel:${content.number}`; // Initiate a phone call
        break;
      case 8: // open sms sender app to send message to: content.number with message: content.message
        window.location.href = `sms:${content.number}?body=${encodeURIComponent(
          content.message
        )}`; // Initiate an SMS
        break;
      default:
        console.error("Invalid typeId");
        break;
    }
  }, [typeId, content]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-20">
      <div className="relative flex items-center justify-center">
        <Oval
          visible={true}
          height="130"
          width="130"
          color="#686CFF"
          secondaryColor="#8889FF"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="absolute"
        />
        <Image src={logo} alt="" width={70} />
      </div>
      <p className="text-2xl text-[#686CFF] font-semibold">SCANNABL</p>
    </div>
  );
};

export default FileOpener;
