import Link from 'next/link';
import { services } from '@/lib/config';

export function Services() {
  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Comprehensive modifications to make homes safer, more accessible, and smarter
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-lg dark:hover:shadow-xl dark:shadow-gray-900 transition-shadow bg-white dark:bg-gray-900"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
