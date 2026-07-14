import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  BellRing,
  Check,
  ClipboardCheck,
  HeartHandshake,
  Home,
  Phone,
  ShieldCheck,
  Smartphone,
  Users,
  Accessibility,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home Safety Services | Age In Place LLC",
  description:
    "Explore home safety assessments, aging-in-place improvements, accessibility modifications, smart home safety systems, and ongoing HomeCare support throughout New England.",
};

const services = [
  {
    icon: ClipboardCheck,
    title: "Home Safety Assessments",
    description:
      "A careful interior and exterior walkthrough focused on identifying safety, mobility, lighting, and accessibility concerns.",
    features: [
      "Room-by-room evaluation",
      "Fall and trip-hazard review",
      "Accessibility recommendations",
      "Written improvement plan",
      "Clear project estimate",
    ],
  },
  {
    icon: Bath,
    title: "Bathroom Safety",
    description:
      "Practical improvements that make bathing, standing, sitting, and moving through the bathroom safer.",
    features: [
      "Grab bar installation",
      "Shower seating",
      "Raised toilet solutions",
      "Slip-resistant surfaces",
      "Low-threshold shower options",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility & Mobility",
    description:
      "Home modifications designed around changing mobility needs, wheelchair access, recovery, and long-term independence.",
    features: [
      "Doorway widening",
      "Threshold and exterior ramps",
      "Custom handrails",
      "Safer steps and landings",
      "Accessible room modifications",
    ],
  },
  {
    icon: Smartphone,
    title: "Smart Home Safety",
    description:
      "Technology that improves visibility, communication, emergency awareness, and control throughout the home.",
    features: [
      "Motion and voice-activated lighting",
      "Smart smoke and carbon monoxide detectors",
      "Water-leak sensors and shutoff systems",
      "Video doorbells and smart locks",
      "Emergency alert systems",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Fall Prevention",
    description:
      "Targeted improvements that address common slip, trip, balance, lighting, and walking-path hazards.",
    features: [
      "Trip-hazard corrections",
      "Improved hallway and stair lighting",
      "Double-banister stair railings",
      "Safer flooring transitions",
      "Exterior walkway reviews",
    ],
  },
  {
    icon: BellRing,
    title: "HomeCare Membership",
    description:
      "Ongoing safety visits that help families stay ahead of small problems before they become serious concerns.",
    features: [
      "Smoke and carbon monoxide detector checks",
      "Grab bar and handrail inspections",
      "Lighting and walkway reviews",
      "Seasonal safety checks",
      "Written visit reports",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "We listen first",
    text: "We begin by learning about your concerns, daily routines, mobility needs, budget, and what you value most about your home.",
  },
  {
    number: "02",
    title: "We walk through together",
    text: "We complete a slow, deliberate walkthrough inside and outside while taking notes with your permission.",
  },
  {
    number: "03",
    title: "We explain what we find",
    text: "Every concern and recommendation is explained clearly so you understand why it matters and what options are available.",
  },
  {
    number: "04",
    title: "You receive a clear plan",
    text: "We provide a written estimate based on your priorities, realistic safety needs, and available budget.",
  },
];

const partners = [
  "Home health agencies",
  "Visiting nurses",
  "Occupational therapists",
  "Physical therapists",
  "Case managers",
  "Hospital discharge planners",
  "Senior centers",
  "Veterans organizations",
  "Hospice providers",
  "Caregivers and family advocates",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            Home Safety Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Helping you stay safe in the home you love.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Age In Place LLC provides assessments, accessibility improvements,
            smart safety technology, and ongoing support designed around your
            home and the person living there.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              What we provide
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Solutions built around real people and real homes
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We start with the person, not the product. Every recommendation is
              based on safety, independence, comfort, and how the home is
              actually used.
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
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              The Age In Place experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              It begins with a conversation, not a sales pitch
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-teal-700">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
              <Users className="h-6 w-6" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Professional partnerships
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              A trusted resource for caregivers and care professionals
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We work alongside the people who already understand a client’s
              medical, mobility, caregiving, and daily-living needs.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <HeartHandshake className="h-5 w-5 shrink-0 text-teal-700" />
                <span className="font-medium text-slate-800">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-300">
              <Home className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Start with your home
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Not sure which service you need?
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              Tell us what has changed, what worries you, and what you want to
              preserve about your home. We will help you understand the next
              step.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-teal-300"
          >
            Request a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}