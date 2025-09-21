import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";

const averta = localFont({
  src: [
    {
      path: "../public/fonts/AvertaRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AvertaExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-averta",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template: "%s | Jobify",
    default: "Jobify",
  },
  description: "Job search platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${averta.variable}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
