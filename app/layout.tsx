import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/lib/config";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-950">
        <LocalBusinessSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-slate-950 focus:ring-2 focus:ring-teal-700"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white p-3 lg:hidden">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="flex min-h-12 items-center justify-center rounded-xl bg-teal-700 px-4 py-3 text-base font-bold text-white"
          >
            Call {siteConfig.phone}
          </a>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
