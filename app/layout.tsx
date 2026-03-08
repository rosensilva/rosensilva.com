import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rosensilva.com"),
  title: {
    default: "Rosen Silva | Technical Lead at WSO2",
    template: "%s | Rosen Silva",
  },
  description:
    "Technical Lead at WSO2 with 8+ years of experience building enterprise-grade integration software. Product Lead for WSO2 Micro Integrator powering 350+ enterprises worldwide.",
  keywords: [
    "Rosen Silva",
    "Technical Lead",
    "WSO2",
    "Software Architect",
    "Enterprise Integration",
    "API Management",
    "WSO2 Micro Integrator",
    "Product Management",
    "Sri Lanka",
    "Software Engineer",
  ],
  authors: [{ name: "Rosen Silva", url: "https://rosensilva.com" }],
  creator: "Rosen Silva",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rosen Silva | Technical Lead at WSO2",
    description:
      "Technical Lead at WSO2. Building enterprise-grade integration software powering 350+ enterprises worldwide, including Fortune 500 companies.",
    url: "https://rosensilva.com",
    siteName: "Rosen Silva",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosen Silva | Technical Lead at WSO2",
    description:
      "Technical Lead at WSO2. Building enterprise-grade integration software powering 350+ enterprises worldwide.",
  },
  alternates: {
    canonical: "https://rosensilva.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rosen Silva",
    url: "https://rosensilva.com",
    email: "mailto:rosen@live.com",
    jobTitle: "Technical Lead",
    worksFor: {
      "@type": "Organization",
      name: "WSO2",
      url: "https://wso2.com",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Peradeniya",
    },
    knowsAbout: [
      "Software Architecture",
      "Enterprise Integration",
      "API Management",
      "Product Management",
      "Team Leadership",
    ],
    sameAs: ["https://www.linkedin.com/in/rosensilva"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
    },
  };

  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var isLight=(t==='light')||(t!=='dark'&&window.matchMedia('(prefers-color-scheme: light)').matches);if(isLight){document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
