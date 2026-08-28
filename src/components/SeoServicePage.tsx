import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";

type SeoServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  benefitsTitle: string;
  benefits: string[];
  detailsTitle: string;
  details: string[];
  searchPhrase: string;
};

export function SeoServicePage({
  eyebrow,
  title,
  intro,
  benefitsTitle,
  benefits,
  detailsTitle,
  details,
  searchPhrase,
}: SeoServicePageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.24),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.16),transparent_34%)]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-teal-300">
              Schedule a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="tel:6037036633" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
              <Phone className="h-4 w-4" aria-hidden="true" />
              603-703-6633
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Designed around the home</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{detailsTitle}</h2>
            <div className="mt-6 space-y-5">
              {details.map((detail) => (
                <p key={detail} className="text-lg leading-8 text-slate-600">{detail}</p>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
            <ShieldCheck className="h-7 w-7 text-teal-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-black">{benefitsTitle}</h2>
            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <span className="leading-7 text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <MapPin className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-black">Local service from Manchester, NH</h2>
              <p className="mt-3 leading-7 text-slate-600">Age In Place LLC is based at 657 Elm St. in Manchester and serves homeowners throughout Southern New Hampshire.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <ShieldCheck className="h-7 w-7 text-teal-700" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-black">Aging-in-place focused construction</h2>
              <p className="mt-3 leading-7 text-slate-600">We combine accessibility planning, carpentry, remodeling, and home safety work so the finished solution functions well and looks like it belongs in the home.</p>
            </article>
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">Common search: {searchPhrase}</p>
        </div>
      </section>

      <section className="bg-teal-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Ready to make the home safer and easier to use?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-teal-50">Tell us what is becoming difficult, unsafe, or inconvenient. We will help you identify practical next steps.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-slate-100">
            Request a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
