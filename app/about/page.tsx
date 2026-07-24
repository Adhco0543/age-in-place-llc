import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  HeartHandshake,
  Home,
  MapPin,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Age In Place LLC | Manchester, NH',
  description:
    'Meet the team behind Age In Place LLC in Manchester, New Hampshire. We provide aging-in-place modifications, accessibility improvements, home safety work, carpentry, and remodeling.',
};

const values = [
  {
    icon: HeartHandshake,
    title: 'Listen First',
    text: 'We begin by understanding your concerns, daily routines, goals, and what matters most about your home.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Before Sales',
    text: 'We recommend work because it improves safety, accessibility, comfort, or independence, not simply because it can be sold.',
  },
  {
    icon: Wrench,
    title: 'Experienced Workmanship',
    text: 'Our two-person leadership team brings more than 60 years of combined construction and home-improvement experience.',
  },
  {
    icon: Home,
    title: 'Respect for Your Home',
    text: 'We treat every customer and property with patience, honesty, care, and respect from the first conversation through the final walkthrough.',
  },
];

const specialties = [
  'Grab bars, handrails, and fall-prevention improvements',
  'Wheelchair ramps and safer entrances',
  'Accessible bathroom and kitchen remodeling',
  'Carpentry, flooring, drywall, painting, doors, trim, and cabinets',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.16),transparent_34%)]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              About Age In Place LLC
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Construction experience focused on safety, independence, and home.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              We help homeowners and families make practical changes that allow
              people to live more safely and confidently in the homes they already
              know and love.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Fully insured
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Based in Manchester, New Hampshire
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Walk-ins welcome
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                Why we started
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                We wanted families to know their loved ones were safer at home.
              </h2>

              <div className="mt-8 rounded-3xl bg-teal-50 p-6 text-teal-950">
                <p className="font-bold">The question behind every recommendation:</p>
                <blockquote className="mt-3 border-l-4 border-teal-600 pl-4 text-lg font-semibold leading-8">
                  Will this make the home safer, easier to use, or more comfortable
                  for the person living there?
                </blockquote>
              </div>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Age In Place LLC was built around a straightforward belief: a home
                should continue working for the people who live there as their needs
                change.
              </p>

              <p>
                Sometimes that means installing a properly placed grab bar or a
                stronger handrail. Sometimes it means building a ramp, opening a
                doorway, changing a bathroom layout, or completing a larger remodel.
                The right answer depends on the person, the home, and the way the
                space is used every day.
              </p>

              <p>
                We do not approach a home with a one-size-fits-all package. We listen,
                look closely at the problem, explain practical options, and recommend
                work that has a clear purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Our values
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              The standard behind every project
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{value.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                What we work on
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Accessibility work backed by full remodeling experience
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Aging-in-place projects rarely fit neatly into one trade. Our broader
                construction background allows us to address the surrounding walls,
                floors, doors, trim, cabinets, and finishes needed to complete the job
                correctly.
              </p>
            </div>

            <ul className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
              {specialties.map((specialty) => (
                <li key={specialty} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <span className="leading-7 text-slate-700">{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              Meet the team
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Two generations of hands-on experience
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <h3 className="text-2xl font-black">Allen Hendershot</h3>
              <p className="mt-1 font-bold text-teal-300">Owner</p>
              <p className="mt-3 text-sm font-semibold text-slate-300">
                52 years of construction experience
              </p>
              <p className="mt-5 leading-7 text-slate-300">
                Allen brings more than five decades of experience building,
                repairing, and improving homes. His practical knowledge helps the
                company look beyond quick fixes and understand how each modification
                fits into the structure and long-term use of the home.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <h3 className="text-2xl font-black">Timothy A. Foss Jr.</h3>
              <p className="mt-1 font-bold text-teal-300">Operations Manager</p>
              <p className="mt-3 text-sm font-semibold text-slate-300">
                10 years of construction and home-improvement experience
              </p>
              <p className="mt-5 leading-7 text-slate-300">
                Timothy focuses on customer communication, project coordination, and
                making sure each customer feels heard and informed. He brings a
                hands-on construction background and a strong commitment to helping
                families create safer homes.
              </p>
            </article>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm font-semibold text-slate-300">
            <BadgeCheck className="h-5 w-5 text-teal-300" aria-hidden="true" />
            Fully insured and based at 657 Elm St. in Manchester, NH
          </div>
        </div>
      </section>

      <section className="bg-teal-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Let&apos;s talk about what would make your home work better.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-teal-50">
            Schedule a free consultation and tell us what concerns you most about
            safety, mobility, accessibility, or comfort.
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
