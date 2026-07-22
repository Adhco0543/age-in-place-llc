import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Home,
  Phone,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  const trustPoints = [
    "Fully insured",
    "Construction and remodeling",
    "Custom finish carpentry",
    "Accessibility expertise",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            Construction, Remodeling & Aging-in-Place Solutions
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Quality Construction for Safer, More Comfortable Homes.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            From custom finish carpentry and complete remodeling to accessibility upgrades and home-safety modifications, Age In Place LLC builds spaces that work better for the people who live in them.
          </p>

          <p className="mt-5 text-base font-medium text-teal-300">
            Thoughtful craftsmanship, practical solutions, and work built to last.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Request a Project Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:6037036633"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call (603) 703-6633
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-7 text-slate-900 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <Hammer className="h-6 w-6" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Built Around Your Home
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                One company for remodeling, carpentry, and safer living.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We listen first, study the space, and build a plan around your goals, budget, and the way you actually use your home.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {[
                  "Construction and remodeling",
                  "Custom trim and finish carpentry",
                  "Kitchen and bathroom improvements",
                  "Accessibility and aging-in-place modifications",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-l-4 border-teal-500 pl-5">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <Home className="h-4 w-4 text-teal-700" />
                  Better function. Better craftsmanship. Better living.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
