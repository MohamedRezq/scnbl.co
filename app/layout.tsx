import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const inter = Roboto_Condensed({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Scannabl",
  description: "Scannabl File Handler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
