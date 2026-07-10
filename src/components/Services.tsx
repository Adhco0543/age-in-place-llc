import Link from 'next/link';
import {
  ArrowRight,
  Baby,
  Bath,
  Check,
  ClipboardCheck,
  Footprints,
  Hammer,
  ShieldCheck,
} from 'lucide-react';

const services = [
  {
    title: 'Senior Home Safety',
    description: 'Practical upgrades that reduce fall risks and help older adults remain safe and independent at home.',
    icon: ShieldCheck,
    features: ['Grab bars and handrails', 'Ramps and safer entries', 'Bathroom safety upgrades'],
  },
  {
    title: 'Professional Childproofing',
    description: 'Whole-home child safety solutions for families with newborns through children age 10.',
    icon: Baby,
    features: ['Furniture and TV anchoring', 'Safety gates and cabinet locks', 'Window, door, outlet, and cord safety'],
  },
  {
    title: 'Home Safety Assessment',
    description: 'A room-by-room walkthrough that identifies hazards and gives you a clear, prioritized plan.',
    icon: ClipboardCheck,
    features: ['Room-by-room risk review', 'Written recommendations', 'Clear project estimate'],
  },
  {
    title: 'Bathroom Safety',
    description: 'Safer bathing and toilet areas designed around stability, comfort, and accessibility.',
    icon: Bath,
    features: ['Grab bar installation', 'Shower seats and toilet rails', 'Slip-resistant solutions'],
  },
  {
    title: 'Accessibility Carpentry',
    description: 'Custom carpentry and entry improvements that make daily movement easier and safer.',
    icon: Hammer,
    features: ['Custom handrails', 'Threshold and doorway changes', 'Safer steps and landings'],
  },
  {
    title: 'Fall Prevention',
    description: 'Targeted improvements that address common trip, slip, balance, and visibility hazards.',
    icon: Footprints,
    features: ['Trip-hazard corrections', 'Improved lighting', 'Safer walking paths'],
  },
];

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Our services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Safety improvements built around real life
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From childproofing a first home to helping a loved one stay independent, we make practical improvements that protect the people who matter most.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 transition group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-slate-950 px-7 py-8 text-white sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Not sure where to start?</p>
            <h3 className="mt-2 text-2xl font-bold">Begin with a free home safety consultation.</h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            Request an estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
