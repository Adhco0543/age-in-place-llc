import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Aging in Place Contractor in Manchester, NH | Age In Place LLC";
const description =
  "Age In Place LLC provides aging-in-place remodeling, grab bar installation, accessibility modifications, ramps, safer bathrooms, home safety assessments, and skilled carpentry in Manchester and Southern New Hampshire.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [
    "aging in place Manchester NH",
    "aging in place contractor Manchester NH",
    "home accessibility contractor Manchester NH",
    "senior home modifications Manchester NH",
    "home safety modifications Manchester NH",
    "grab bar installation Manchester NH",
    "wheelchair ramp installation Manchester NH",
    "accessible bathroom remodeling Manchester NH",
    "handicap accessible contractor Manchester NH",
    "home safety assessment Manchester NH",
    "aging in place Southern New Hampshire",
    "Age In Place LLC",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Home Improvement",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-950">
        <LocalBusinessSchema />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
