import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Hammer,
  HeartHandshake,
  Phone,
  ShieldCheck,
} from "lucide-react";

const owners = [
  {
    name: "Allen Hendershot",
    title: "Owner & Lead Craftsman",
    experience: "56 years of construction experience",
    bio: "Allen brings more than five decades of hands-on construction knowledge to every project. His experience helps families find practical, durable ways to make a home safer without losing the comfort and character that make it feel like home.",
  },
  {
    name: "Timothy A. Foss Jr.",
    title: "Operations Manager",
    experience: "10 years of construction and home-improvement experience",
    bio: "Timothy coordinates projects, communication, and customer care. He works to make sure every homeowner and family feels heard, understands the plan, and knows what to expect from the first conversation through the final walkthrough.",
  },
];

const commitments = [
  {
    icon: HeartHandshake,
    title: "Personal attention",
    text: "You speak with the people responsible for your project, not a distant call center.",
  },
  {
    icon: ShieldCheck,
    title: "Respect for your home",
    text: "We communicate clearly, work carefully, and treat your home as the personal space it is.",
  },
  {
    icon: BadgeCheck,
    title: "Fully insured",
    text: "Age In Place LLC is fully insured and coordinates qualified trade partners when specialized work is needed.",
  },
];

export function Owners() {
  return (
    <section className="bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              The people behind the work
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Experience in construction. A purpose rooted in independence.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Age In Place LLC combines decades of construction experience with a simple mission: help people remain safe, comfortable, and confident in the homes they love.
            </p>

            <div className="mt-8 space-y-5">
              {commitments.map((commitment) => {
                const Icon = commitment.icon;

                return (
                  <div key={commitment.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950">
                        {commitment.title}
                      </h3>
                      <p className="mt-1 leading-7 text-slate-600">
                        {commitment.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="tel:6037036633"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" />
                Call (603) 703-6633
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-950 hover:border-teal-300 hover:text-teal-800"
              >
                Meet with our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            {owners.map((person, index) => (
              <article
                key={person.name}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-teal-50" />

                <div className="relative">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                        {index === 0 ? "Craftsmanship" : "Project coordination"}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                        {person.name}
                      </h3>

                      <p className="mt-1 font-semibold text-teal-700">
                        {person.title}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-teal-300">
                      <Hammer className="h-7 w-7" />
                    </div>
                  </div>

                  <div className="mt-6 inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-900">
                    {person.experience}
                  </div>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}

            <div className="rounded-3xl bg-teal-700 p-7 text-white sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">
                Walk-ins welcome
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Visit us at 657 Elm Street in Manchester.
              </h3>

              <p className="mt-3 leading-7 text-teal-50">
                Stop in, call, or schedule a free consultation to talk through the changes that would make your home safer and easier to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
