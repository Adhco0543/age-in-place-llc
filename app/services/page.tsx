import { Metadata } from "next";
import { services } from "@/lib/config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Age in Place LLC",
  description: "Explore our comprehensive accessibility and aging-in-place modification services",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Comprehensive solutions for safer, more accessible homes
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-lg border border-gray-200 dark:border-gray-700 p-8 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    What we offer:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your home?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a free consultation with our accessibility experts
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
