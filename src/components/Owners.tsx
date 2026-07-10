import { BadgeCheck, Hammer, Phone } from 'lucide-react';

const owners = [
  {
    name: 'Timothy A. Foss Jr.',
    title: 'Co-Owner',
    experience: '10 years of construction and home-improvement experience',
  },
  {
    name: 'Allen Hendershot',
    title: 'Co-Owner & Licensed New Hampshire Contractor',
    experience: '56 years of construction and contracting experience',
  },
];

export function Owners() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Meet the owners</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Local experience you can trust in your home
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Age In Place LLC is owner-led, safety-focused, and backed by 66 years of combined construction and home-improvement experience.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {owners.map((owner) => (
            <article key={owner.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                <Hammer className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-950">{owner.name}</h3>
              <p className="mt-1 font-semibold text-teal-700">{owner.title}</p>
              <p className="mt-4 leading-7 text-slate-600">{owner.experience}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700">
                <BadgeCheck className="h-4 w-4 text-teal-700" />
                Fully insured company
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="tel:6037036633" className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-teal-700">
            <Phone className="h-4 w-4" />
            Speak directly with an owner: 603-703-6633
          </a>
        </div>
      </div>
    </section>
  );
}
