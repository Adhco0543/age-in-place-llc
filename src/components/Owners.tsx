import { BadgeCheck, Hammer, Phone } from "lucide-react";

const owners = [
  {
    name: "Allen Hendershot",
    title: "Owner & Finish Carpenter",
    experience: "52+ years of construction and finish carpentry experience",
    bio: "Allen has spent more than five decades building, repairing, remodeling, and improving homes. He leads Age In Place LLC with a practical, safety-first approach and a commitment to workmanship that lasts.",
  },
  {
    name: "Timothy A. Foss Jr.",
    title: "Operations Manager",
    experience: "10 years of construction and home improvement experience",
    bio: "Timothy focuses on customer care, project coordination, and making sure each homeowner feels heard and informed. He brings hands-on construction experience and a strong commitment to helping people feel safer at home.",
  },
];

export function Owners() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Meet the Team
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Experience, craftsmanship, and care
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Age In Place LLC combines decades of hands-on construction experience
            with honest recommendations and careful attention to the people who
            call each house home.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {owners.map((person) => (
            <article
              key={person.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <Hammer className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                {person.name}
              </h3>

              <p className="mt-1 font-semibold text-teal-700">{person.title}</p>

              <p className="mt-3 text-sm font-semibold text-slate-700">
                {person.experience}
              </p>

              <p className="mt-4 leading-7 text-slate-600">{person.bio}</p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700">
                <BadgeCheck
                  className="h-4 w-4 text-teal-700"
                  aria-hidden="true"
                />
                Fully insured company
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:6037036633"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:border-teal-300 hover:text-teal-700"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Speak with our team: (603) 703-6633
          </a>
        </div>
      </div>
    </section>
  );
}
