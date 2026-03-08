import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosen Silva | Technical Lead",
  description:
    "Technical Lead at WSO2. Building enterprise-grade integration software powering 350+ enterprises worldwide, including Fortune 500 companies.",
  openGraph: {
    title: "Rosen Silva",
    description:
      "Technical Lead at WSO2. Building enterprise-grade integration software powering 350+ enterprises worldwide.",
    url: "https://rosensilva.com",
    siteName: "Rosen Silva",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
