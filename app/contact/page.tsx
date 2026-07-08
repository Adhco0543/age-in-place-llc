import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us | Age in Place LLC",
  description: "Get in touch with Age in Place LLC for a free consultation",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Schedule your free consultation today
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Request a Free Quote
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Phone</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {siteConfig.phone}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Available Monday-Friday, 9 AM - 5 PM
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  {siteConfig.email}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  We'll respond within 24 hours
                </p>
              </div>

              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Location</h3>
                <p className="text-gray-700 dark:text-gray-300">{siteConfig.address}</p>
              </div>

              <div className="rounded-lg bg-blue-600 p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✓ Free in-home consultation</li>
                  <li>✓ No obligation quote</li>
                  <li>✓ Expert advice from specialists</li>
                  <li>✓ Licensed & insured</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
