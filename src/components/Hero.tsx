import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-teal-300" />
            Serving families throughout New England
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Safer homes for children, seniors, and every stage of life.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Professional childproofing, fall-prevention, accessibility upgrades, and home safety installations designed around the people you care about most.
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
            {['Licensed NH contractor', 'Fully insured', '66 years combined experience'].map((item) => (
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">What we protect</p>
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h2 className="text-xl font-bold">Children & Families</h2>
                  <p className="mt-2 text-slate-600">Professional childproofing for newborns through age 10, including gates, anchoring, locks, window safety, and full-home assessments.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h2 className="text-xl font-bold">Older Adults & Caregivers</h2>
                  <p className="mt-2 text-slate-600">Grab bars, handrails, ramps, bathroom safety, fall-prevention, and accessibility carpentry that support safer independent living.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
