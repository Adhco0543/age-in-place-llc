import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            New England&apos;s Home Safety Specialists
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Protecting the People You Love.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Professional childproofing, aging-in-place improvements, smart
            home safety systems, and personalized home assessments throughout
            New England.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-teal-300"
            >
              Schedule a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:6037036633"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              603-703-6633
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {[
              "Fully insured",
              "66 years combined experience",
              "Owner-led company",
            ].map((item) => (
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Our purpose
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                We do not enter homes simply to sell products.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                We enter homes to protect the people who live there. Every
                recommendation begins with one question:
              </p>

              <blockquote className="mt-6 border-l-4 border-teal-500 pl-5 text-xl font-semibold leading-8 text-slate-900">
                Will this make the home safer for the people who call it home?
              </blockquote>

              <p className="mt-6 text-sm font-semibold text-teal-700">
                If the answer is no, we will not recommend it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}