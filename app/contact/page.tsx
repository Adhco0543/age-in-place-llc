import type { Metadata } from 'next';
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact Age In Place LLC | Manchester, NH',
  description:
    'Contact Age In Place LLC in Manchester, New Hampshire for a free consultation about grab bars, ramps, accessible bathrooms, home safety modifications, carpentry, and remodeling.',
};

const consultationSteps = [
  'Tell us what is making the home difficult or unsafe.',
  'We will discuss practical options that fit the home and your priorities.',
  'You receive a clear next step without pressure or obligation.',
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.3),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
              Free consultation
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s make your home safer and easier to live in.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us what you need help with. Whether it is a grab bar, wheelchair
              ramp, accessible bathroom, carpentry project, or a larger remodel,
              we will help you understand the next step.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-200">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Fully insured
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-300" aria-hidden="true" />
                No-pressure conversation
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Manchester, New Hampshire
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
                Tell us about your project
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Request your free consultation
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Share as much or as little as you know right now. We can help you
                sort through the details.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-teal-700 p-7 text-white shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-100">
                Prefer to talk now?
              </p>
              <h2 className="mt-2 text-2xl font-black">Call Age In Place LLC</h2>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:6037036633"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold transition hover:bg-white/15"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
                <a
                  href="tel:6036772737"
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold transition hover:bg-white/15"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  {siteConfig.secondaryPhone}
                </a>
              </div>

              <p className="mt-5 text-sm leading-6 text-teal-50">
                Walk-ins are welcome at our Manchester location.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <h2 className="text-xl font-black">Contact information</h2>
              <ul className="mt-6 space-y-5 text-sm text-slate-600">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 transition hover:text-teal-700"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                    <span className="break-all">{siteConfig.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
                  <span>Call or email to arrange a consultation.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <h2 className="text-xl font-black">What happens next?</h2>
              <ol className="mt-6 space-y-5">
                {consultationSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-black text-teal-800">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-slate-600">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
