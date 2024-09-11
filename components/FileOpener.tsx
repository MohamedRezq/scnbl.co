"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import logo from "@/public/scnbl-icon.png";
import { getFileInfo } from "@/lib/getFileInfo";
import {
  WebsiteFormData,
  PDFUploadFormData,
  SocialMediaFormData,
  LocationFormData,
  ImageUploadFormData,
  EmailFormData,
  CallFormData,
  SMSFormData,
  Content,
} from "@/helpers/interfaces"; // Import the content interfaces

interface FileOpenerProps {
  id: string;
}

const FileOpener = ({ id }: FileOpenerProps) => {
  const router = useRouter(); // Initialize the router
  const [loading, setLoading] = useState(true); // Loading state
  const [fileData, setFileData] = useState<{
    typeId: number;
    content: Content;
  } | null>(null); // File data state

  useEffect(() => {
    // Fetch file info when the component mounts
    const fetchData = async () => {
      try {
        const response = await getFileInfo(id);
        console.log("response: ", response);
        const qrData = response.data; // Extracting the 'qr' object from response
        if (qrData) {
          setFileData({ typeId: qrData.type, content: qrData.content });
        } else {
          router.push("/not-found"); // Redirect if no data is found
        }
      } catch (error) {
        console.error("Error fetching file data:", error);
        router.push("/not-found"); // Redirect on error
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchData();
  }, [id, router]);

  useEffect(() => {
    if (!fileData || loading) return; // Do nothing while loading or if fileData is not available

    const { typeId, content } = fileData;

    if (!content || Object.keys(content).length === 0) {
      router.push("/not-found");
      return;
    }

    switch (typeId) {
      case 1: // WebsiteFormData: open website URL
        const websiteContent = content as WebsiteFormData;
        window.location.href = websiteContent.url; // Open the website URL
        break;
      case 2: // PDFUploadFormData: open PDF file
        const pdfContent = content as PDFUploadFormData;
        window.location.href = pdfContent.file; // Open the PDF URL
        break;
      case 3: // SocialMediaFormData: open social media link
        const socialMediaContent = content as SocialMediaFormData;
        window.location.href = socialMediaContent.file; // Open the social media profile
        break;
      case 4: // LocationFormData: open location URL on Google Maps
        const locationContent = content as LocationFormData;
        window.location.href = `https://maps.google.com/?q=${locationContent.url}`; // Open the location in Google Maps
        break;
      case 5: // ImageUploadFormData: open image
        const imageContent = content as ImageUploadFormData;
        window.location.href = imageContent.image; // Open the image URL
        break;
      case 6: // EmailFormData: open email client with receivers, subject, and body
        const emailContent = content as EmailFormData;
        window.location.href = `mailto:${
          emailContent.receivers
        }?subject=${encodeURIComponent(
          emailContent.subject
        )}&body=${encodeURIComponent(emailContent.body)}`; // Open the email client
        break;
      case 7: // CallFormData: open caller app to call a number
        const callContent = content as CallFormData;
        window.location.href = `tel:${callContent.number}`; // Initiate a phone call
        break;
      case 8: // SMSFormData: open SMS app to send a message to a number
        const smsContent = content as SMSFormData;
        window.location.href = `sms:${
          smsContent.number
        }?body=${encodeURIComponent(smsContent.message)}`; // Initiate an SMS
        break;
      default:
        console.error("Invalid typeId");
        router.push("/not-found"); // Redirect to 404 if typeId is invalid
        break;
    }
  }, [fileData, loading, router]);

  if (loading) {
    // Show a loading state while fetching the file data
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
  }

  return null; // Nothing to display after redirection
};

export default FileOpener;
