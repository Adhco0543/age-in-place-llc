import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accessibility,
  ArrowRight,
  Bath,
  Check,
  DoorOpen,
  Hammer,
  Home,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aging-in-Place & Home Remodeling Services | Manchester, NH',
  description:
    'Explore grab bar installation, wheelchair ramps, handrails, accessible bathrooms, kitchens, carpentry, flooring, drywall, painting, doors, trim, cabinets, and general construction from Age In Place LLC in Manchester, NH.',
};

const services = [
  {
    icon: Accessibility,
    title: 'Accessibility & Mobility Improvements',
    description:
      'Practical home modifications designed to make entrances, hallways, stairs, and everyday movement safer and easier.',
    features: [
      'Wheelchair ramps',
      'Custom handrails',
      'Safer steps and landings',
      'Doorway and threshold improvements',
      'Mobility-focused home modifications',
    ],
  },
  {
    icon: Bath,
    title: 'Accessible Bathroom Remodeling',
    description:
      'Bathroom improvements that support safer bathing, standing, sitting, and movement without making the room feel institutional.',
    features: [
      'Grab bar installation',
      'Shower and tub safety improvements',
      'Low-threshold shower options',
      'Accessible bathroom layouts',
      'Slip-resistant flooring solutions',
    ],
  },
  {
    icon: Home,
    title: 'Kitchen Accessibility',
    description:
      'Thoughtful kitchen changes that improve reach, movement, storage access, and everyday comfort.',
    features: [
      'Cabinet modifications',
      'Improved work areas',
      'Safer flooring',
      'Lighting and access improvements',
      'Kitchen remodeling',
    ],
  },
  {
    icon: Hammer,
    title: 'Carpentry & Finish Carpentry',
    description:
      'Custom carpentry for safety upgrades, repairs, remodels, and the finishing details that make a project feel complete.',
    features: [
      'Custom framing and repairs',
      'Trim and molding',
      'Cabinet installation',
      'Built-ins and finish work',
      'General carpentry',
    ],
  },
  {
    icon: DoorOpen,
    title: 'Doors, Flooring & Interior Improvements',
    description:
      'Interior work that removes obstacles, repairs worn areas, and makes rooms safer, cleaner, and easier to use.',
    features: [
      'Interior and exterior doors',
      'Flooring installation and repair',
      'Drywall installation and repair',
      'Trim and transition improvements',
      'Room updates and repairs',
    ],
  },
  {
    icon: Paintbrush,
    title: 'Painting & Remodeling',
    description:
      'Professional finishing and general remodeling services for accessibility projects, repairs, and complete room updates.',
    features: [
      'Interior painting',
      'Bathroom remodeling',
      'Kitchen remodeling',
      'General construction',
      'Project finishing and punch-list work',
    ],
  },
];

const process = [
  {
    number: '01',
    title: 'Tell us what is not working',
    text: 'We begin with the problem you are trying to solve, whether it is a safety concern, mobility change, damaged area, or remodeling goal.',
  },
  {
    number: '02',
    title: 'We look at the whole space',
    text: 'We consider how the room, entrance, flooring, walls, doors, and surrounding construction affect the best solution.',
  },
  {
    number: '03',
    title: 'We explain practical options',
    text: 'You receive clear recommendations based on function, appearance, budget, and the way the home is used every day.',
  },
  {
    number: '04',
    title: 'We build the right solution',
    text: 'Our construction background allows us to complete both the accessibility work and the surrounding finish work needed for a clean result.',
  },
];

const reasons = [
  'More than 60 years of combined construction experience',
  'Accessibility work and general remodeling under one roof',
  'Recommendations based on the person and the home',
  'Clear communication from the first visit through completion',
  'Fully insured and based in Manchester, New Hampshire',
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.16),transparent_34%)]" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              Aging-in-place and remodeling services
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Safer access. Better function. Quality construction.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Age In Place LLC provides accessibility modifications, home safety
              improvements, carpentry, and remodeling for homeowners in and around
              Manchester, New Hampshire.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-teal-300"
              >
                Schedule a Free Consultation
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              What we do
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              One team for accessibility work and the construction around it
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A grab bar, ramp, wider opening, or safer bathroom often requires more
              than one trade. We can handle the structural work, carpentry, drywall,
              flooring, doors, trim, cabinets, painting, and finishing needed to make
              the project look intentional and complete.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              How the process works
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Start with the problem, then build the solution
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article key={step.number} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-black tracking-[0.2em] text-teal-700">{step.number}</span>
                <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Why choose Age In Place LLC
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Practical recommendations backed by real building experience
            </h2>
          </div>

          <ul className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                <span className="text-lg leading-8 text-slate-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-teal-700 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-100">
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-[0.18em]">
                Not sure where to begin?
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Show us what is making the home difficult, unsafe, or outdated.
            </h2>
            <p className="mt-4 text-lg text-teal-50">
              We will help you sort through the options and identify the most useful
              next step.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Request a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
