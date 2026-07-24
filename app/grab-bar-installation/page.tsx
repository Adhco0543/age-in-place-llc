import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Bath,
  CheckCircle2,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Grab Bar Installation in Manchester, NH | Age In Place LLC',
  description:
    'Professional grab bar installation for bathrooms, showers, tubs, toilets, hallways, and entry areas in Manchester, NH and nearby communities. Contact Age In Place LLC for a free consultation.',
};

const locations = [
  'Showers and tubs',
  'Beside toilets',
  'Bathroom entry points',
  'Hallways and stair transitions',
  'Exterior steps and entrances',
  'Other high-risk areas in the home',
];

const benefits = [
  'Better support while standing, sitting, and transferring',
  'Reduced risk of slips and falls in wet areas',
  'More confidence for older adults and people recovering from injury',
  'Placement based on the person and the way the space is used',
  'Installation that considers the wall structure behind the finished surface',
];

export default function GrabBarInstallationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.24),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.16),transparent_34%)]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              Grab bar installation in Manchester, NH
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Safer support where it matters most.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              We install grab bars in bathrooms, showers, tubs, toilet areas,
              hallways, and other parts of the home where extra support can improve
              safety and confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-teal-300"
              >
                Request a Free Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href="tel:6037036633"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                603-703-6633
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Proper placement matters
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              A grab bar should be installed for the person, not just the wall.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The safest location depends on how someone enters the shower, steps
              into the tub, rises from the toilet, shifts their weight, and moves
              through the room. We look at those real movements before recommending
              placement.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We also consider the construction behind the finished wall. A secure
              installation may require locating framing, using appropriate anchors,
              or opening and repairing part of the wall so the bar has proper support.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
              <Bath className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-2xl font-black">Common installation areas</h2>
            <ul className="mt-6 space-y-4">
              {locations.map((location) => (
                <li key={location} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <span className="leading-7 text-slate-700">{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                Why grab bars help
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Small modification, meaningful improvement
              </h2>
            </div>

            <ul className="space-y-4 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <span className="text-lg leading-8 text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <Hammer className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black">Construction experience</h3>
              <p className="mt-3 leading-7 text-slate-600">
                We understand framing, wall systems, tile, drywall, trim, and the
                repair work that may be needed around an installation.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <ShieldCheck className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black">Safety-first recommendations</h3>
              <p className="mt-3 leading-7 text-slate-600">
                We recommend placement based on support, movement, and how the space
                is actually used, not on a generic template.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <MapPin className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-black">Local service</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Age In Place LLC is based at 657 Elm St. in Manchester, New
                Hampshire. Walk-ins are welcome.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-teal-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Need grab bars installed in your home?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-teal-50">
            Tell us where you need more support and what movements are becoming
            difficult. We will help you plan a safe, practical installation.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
