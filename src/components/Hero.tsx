import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Phone,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  const trustPoints = [
    "Fully Insured",
    "Allen: 52+ Years Experience",
    "Timothy: 7+ Years Experience",
    "Locally Owned & Operated",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-14 lg:px-8 lg:py-24">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-teal-300" aria-hidden="true" />
            Home Safety & Accessibility Specialists
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Helping You Live Safely and Independently at Home.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Home safety assessments, accessibility improvements, aging-in-place
            remodeling, and skilled carpentry designed around the way you live.
          </p>

          <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-teal-300">
            Honest recommendations, quality craftsmanship, and practical
            solutions built to make everyday life safer and easier.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Schedule a Free Assessment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href="tel:6037036633"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call 603-703-6633</span>
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-teal-300"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur sm:p-5">
            <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <Home className="h-6 w-6" aria-hidden="true" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Our Safe Home Assessment
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Every safer home begins with listening.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We begin with your concerns, complete a careful walkthrough,
                explain what we find, and create a realistic plan based on your
                priorities, goals, and budget.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {[
                  "Interior and exterior walkthrough",
                  "Safety and accessibility review",
                  "Detailed recommendations",
                  "Written estimate with no pressure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-700"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-l-4 border-teal-500 pl-4 text-base font-bold leading-7 text-slate-900 sm:text-lg">
                Every recommendation begins with one question:
                <br />
                <span className="text-teal-700">
                  Will this make your home safer?
                </span>
                <br />
                If the answer is no, we won&apos;t recommend it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
