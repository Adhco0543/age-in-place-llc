import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  HardHat,
  HeartHandshake,
  Home,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Licensed contractor leadership',
    text: 'Projects are guided by Allen Hendershot, a licensed New Hampshire contractor and co-owner.',
  },
  {
    icon: HardHat,
    title: '66 years combined experience',
    text: 'Decades of practical construction and home-improvement experience go into every recommendation.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully insured',
    text: 'Professional coverage and safety-focused work provide extra peace of mind in your home.',
  },
  {
    icon: HeartHandshake,
    title: 'Owner-led service',
    text: 'You work directly with the owners, from the first walkthrough through the final installation.',
  },
];

const steps = [
  { number: '01', title: 'Call or request an estimate', text: 'Tell us who lives in the home and what safety concerns you have.' },
  { number: '02', title: 'Home safety walkthrough', text: 'We inspect the space, identify hazards, and discuss practical options.' },
  { number: '03', title: 'Clear safety plan', text: 'You receive prioritized recommendations and a straightforward estimate.' },
  { number: '04', title: 'Professional installation', text: 'We complete the agreed work carefully, cleanly, and with respect for your home.' },
];

const faqs = [
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes. We offer free consultations and estimates for childproofing, senior safety, and accessibility work.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'Age In Place LLC serves customers throughout New England. Project availability depends on location and scope.',
  },
  {
    question: 'Do you install the safety products?',
    answer: 'Yes. We assess the home, recommend appropriate solutions, and professionally install the approved improvements.',
  },
  {
    question: 'Can you help both children and older adults in the same home?',
    answer: 'Yes. We can create one coordinated safety plan for multigenerational homes with children, seniors, or mobility needs.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Why choose us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Experience, honesty, and safety-first workmanship</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We are building a company people can trust with their children, parents, and homes. Every recommendation should solve a real safety problem.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <Icon className="h-7 w-7 text-teal-300" />
                  <h3 className="mt-5 text-xl font-bold">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">A clear path to a safer home</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">No pressure and no confusing process. We identify the risks, explain the options, and complete the work you approve.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-3xl border border-slate-200 p-6">
              <span className="text-sm font-bold tracking-[0.2em] text-teal-700">{step.number}</span>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Project gallery</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Real work will tell the story</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">This gallery is ready for your grab bars, ramps, handrails, bathroom upgrades, and childproofing projects.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-teal-700">
            Request a similar project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['Bathroom safety', 'Grab bars, shower seating, and slip-prevention upgrades'],
            ['Safer entries', 'Ramps, rails, thresholds, steps, and lighting'],
            ['Professional childproofing', 'Anchoring, gates, locks, windows, doors, and outlets'],
          ].map(([title, text]) => (
            <article key={title} className="flex min-h-72 flex-col justify-end rounded-3xl border border-dashed border-slate-300 bg-white p-7">
              <Camera className="h-8 w-8 text-teal-700" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
              <p className="mt-5 text-sm font-semibold text-teal-700">Project photos coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Common questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Straight answers before we begin</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Have a different question? Call and speak directly with an owner.</p>
          <a href="tel:6037036633" className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-teal-700">
            <Phone className="h-4 w-4" /> 603-703-6633
          </a>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-slate-200 p-5 open:border-teal-200 open:bg-teal-50/40">
              <summary className="cursor-pointer list-none font-bold text-slate-950">{faq.question}</summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-teal-700 py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-teal-100">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">Free consultation</span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Ready to make your home safer?</h2>
          <p className="mt-4 text-lg text-teal-50">Talk directly with Timothy or Allen about your home, concerns, and next steps.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="tel:6037036633" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 hover:bg-slate-100">
            <Phone className="h-4 w-4" /> Call 603-703-6633
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 font-semibold hover:bg-white/10">
            Request an estimate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
