import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  MessageSquareQuote,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";

const trustPoints = [
  {
    icon: HeartHandshake,
    title: "Respect for your home",
    text: "We listen carefully, protect the work area, and treat every home and family with patience and respect.",
  },
  {
    icon: MessageSquareQuote,
    title: "Clear communication",
    text: "We explain what we find, answer questions plainly, and keep you informed from the first visit through completion.",
  },
  {
    icon: Wrench,
    title: "Work built around safety",
    text: "Every recommendation is chosen to improve safety, comfort, accessibility, or long-term independence.",
  },
];

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-300">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Trust is earned
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              The standard we want every customer to experience
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Age In Place LLC is building its public review history. We will never
              fill this space with made-up testimonials. As customers share their
              experiences, verified feedback will be added here.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/20">
            <div
              className="flex justify-center gap-1 text-amber-300"
              aria-label="Five-star service goal"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-current"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="mt-3 font-bold">Five-star service is the goal</p>
            <p className="mt-1 text-sm text-slate-400">Honest reviews only</p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article
                key={point.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.09]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/15 text-teal-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{point.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{point.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-teal-300/20 bg-teal-400/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold">Have you worked with Age In Place LLC?</p>
            <p className="mt-1 text-sm text-slate-300">
              Contact us to share feedback about your experience.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-teal-50"
          >
            Share your experience
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
