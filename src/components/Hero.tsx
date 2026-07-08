import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                Age in Place, With Confidence
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Professional accessibility and aging-in-place modifications for seniors (55+) and families with young children. Safe, smart, and beautiful home solutions.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 dark:border-gray-600 px-6 py-3 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-80 md:h-96 rounded-2xl bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🏠</div>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Safe & Accessible Homes</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Built for independence and peace of mind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
