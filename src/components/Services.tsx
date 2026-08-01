import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Bath,
  ClipboardCheck,
  CookingPot,
  Drill,
  HandHelping,
} from "lucide-react";

const services = [
  {
    title: "Grab Bar Installation",
    description:
      "Securely installed support in showers, tubs, toilet areas, hallways, and other high-risk locations.",
    href: "/grab-bar-installation",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=85",
    icon: Drill,
  },
  {
    title: "Accessible Bathroom Remodeling",
    description:
      "Walk-in showers, safer layouts, seating, grab bars, and practical bathroom improvements built for daily use.",
    href: "/services/accessible-bathrooms",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    icon: Bath,
  },
  {
    title: "Kitchen Accessibility",
    description:
      "Safer layouts, reachable storage, improved lighting, and remodeling solutions that make kitchens easier to use.",
    href: "/services/kitchen-accessibility",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
    icon: CookingPot,
  },
  {
    title: "Handrails & Safer Stairs",
    description:
      "Strong handrails, improved steps, safer landings, and sturdy support for interior and exterior transitions.",
    href: "/services/handrails",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    icon: HandHelping,
  },
  {
    title: "Wheelchair Ramps",
    description:
      "Custom access solutions for safer entry and exit, designed around the home, site conditions, and user needs.",
    href: "/services/wheelchair-ramps",
    image:
      "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=900&q=85",
    icon: Accessibility,
  },
  {
    title: "Home Safety Assessments",
    description:
      "A careful walkthrough to identify fall risks, mobility barriers, and practical improvements in priority order.",
    href: "/services/home-safety-assessments",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    icon: ClipboardCheck,
  },
];

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            Accessibility, safety, and remodeling
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical improvements designed around the person, the home, and the
            way each space is used every day.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-52 overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                </div>

                <div className="p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-teal-800 hover:text-teal-600"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 px-7 py-3.5 font-bold text-white transition hover:bg-teal-600"
          >
            Schedule Your Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
