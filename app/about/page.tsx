import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Age in Place LLC",
  description: "Learn about Age in Place LLC and our mission to create safer, more accessible homes",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About Age in Place LLC
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Making homes safer, more accessible, and smarter for generations
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              At Age in Place LLC, we believe that everyone deserves to live safely and independently in their own
              home. Our mission is to provide professional, compassionate, and innovative accessibility solutions for
              seniors (55+) and families with young children. We combine smart technology, thoughtful design, and expert
              craftsmanship to create spaces where people can thrive at every life stage.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-blue-50 dark:bg-gray-900 p-6">
                <div className="text-4xl mb-3">💙</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Compassion</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We care deeply about our clients' independence and quality of life. Every solution is tailored to
                  their unique needs.
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 dark:bg-gray-900 p-6">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We deliver professional-grade workmanship and premium materials on every project, with attention to
                  every detail.
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 dark:bg-gray-900 p-6">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We stay at the forefront of accessibility technology and design practices to offer the best solutions
                  available.
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 dark:bg-gray-900 p-6">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Integrity</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transparency, honesty, and trust are at the core of everything we do. We deliver what we promise.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Age in Place LLC?</h2>
            <ul className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Licensed, insured, and extensively trained in accessibility modifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Free in-home consultations to assess your specific needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Expert knowledge of universal design and WCAG compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Latest smart home technology and accessibility innovations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Dedicated to making homes beautiful, functional, and safe</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>Respectful, professional service with exceptional attention to detail</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Create a Safer Home Together</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today for a free consultation and personalized assessment
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
