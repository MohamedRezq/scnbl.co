// Define content types for each typeId

export interface WebsiteFormData {
  url: string;
}

export interface PDFUploadFormData {
  file: string; // This can also be an array if you plan to handle multiple PDFs later
}

export interface SocialMediaFormData {
  file: string; // URL to the social media link
}

export interface LocationFormData {
  url: string; // Google Maps URL
}

export interface ImageUploadFormData {
  image: string;
}

export interface EmailFormData {
  receivers: string;
  subject: string;
  body: string;
}

export interface CallFormData {
  number: string;
}

export interface SMSFormData {
  number: string;
  message: string;
}

// Type union for content
export type Content =
  | WebsiteFormData
  | PDFUploadFormData
  | SocialMediaFormData
  | LocationFormData
  | ImageUploadFormData
  | EmailFormData
  | CallFormData
  | SMSFormData;
