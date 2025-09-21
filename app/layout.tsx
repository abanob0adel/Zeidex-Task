import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";

const averta = localFont({
  src: [
    {
      path: "../public/fonts/AvertaStd-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/AvertaStd-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/AvertaStd-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/AvertaStd-Bold.woff2",
      weight: "700",
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
