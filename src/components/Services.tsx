import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Bath,
  ClipboardCheck,
  DoorOpen,
  Hammer,
  House,
  Wrench,
} from "lucide-react";

const featuredServices = [
  {
    icon: Bath,
    title: "Bathroom Safety & Accessibility",
    description:
      "Reduce fall risks and make daily routines easier with thoughtful bathroom upgrades designed around comfort, balance, and mobility.",
    features: [
      "Grab bars and handrails",
      "Walk-in shower improvements",
      "Shower seating and safer fixtures",
      "Slip-resistant flooring and lighting",
    ],
  },
  {
    icon: DoorOpen,
    title: "Ramps, Railings & Safer Entrances",
    description:
      "Create a safer path into and out of the home with practical entrance improvements built for everyday confidence.",
    features: [
      "Wheelchair and mobility ramps",
      "Exterior and interior handrails",
      "Step and threshold improvements",
      "Safer doors and entryways",
    ],
  },
  {
    icon: Accessibility,
    title: "Mobility & Accessibility Modifications",
    description:
      "Remove barriers throughout the home so rooms, hallways, and everyday spaces are easier to reach and use.",
    features: [
      "Doorway widening",
      "Threshold removal and transitions",
      "Improved room access",
      "Wheelchair-friendly modifications",
    ],
  },
  {
    icon: House,
    title: "Remodeling for Independent Living",
    description:
      "Rework kitchens, bathrooms, bedrooms, and living spaces so the home continues to support changing needs without losing its character.",
    features: [
      "Kitchen and bathroom remodeling",
      "Flooring, drywall, and painting",
      "Layout and usability improvements",
      "Complete accessibility renovations",
    ],
  },
  {
    icon: Hammer,
    title: "Custom Carpentry & Home Improvements",
    description:
      "Skilled carpentry and finish work provide the custom solutions many aging-in-place projects require.",
    features: [
      "Custom carpentry and cabinet work",
      "Doors, trim, and molding",
      "Finish carpentry and repairs",
      "Built-to-fit home modifications",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Home Safety Consultations",
    description:
      "Not sure where to begin? We walk through the home with you, identify concerns, and help create a practical plan based on your priorities and budget.",
    features: [
      "Room-by-room walkthrough",
      "Fall-risk and access review",
      "Clear improvement priorities",
      "Written estimates without pressure",
    ],
  },
];

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Aging-in-place services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Services that help your home keep working for you
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From one small safety improvement to a complete accessibility remodel, Age In Place LLC provides practical solutions that support comfort, confidence, and independence at home.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-teal-700"
          >
            Discuss your home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
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
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-teal-800 group-hover:text-teal-700"
                >
                  Request a free consultation
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-slate-950 px-7 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Every project is personal
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              The right solution is the one that fits the person, the home, and the budget.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              We will help you understand what matters most now, what may matter later, and which improvements can make the biggest difference.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-semibold text-slate-950 hover:bg-teal-300 lg:mt-0"
          >
            Schedule a free consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
