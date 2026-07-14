import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  Home,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Age In Place LLC",
  description:
    "Learn about Age In Place LLC, New England home safety specialists helping people remain safe, independent, and confident in the homes they love.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Listen First",
    text: "We begin by understanding your concerns, routines, goals, and what you love about your home.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Before Sales",
    text: "We only recommend work that we believe will genuinely improve safety, accessibility, or independence.",
  },
  {
    icon: Wrench,
    title: "Experienced Workmanship",
    text: "Our team brings 66 years of combined construction and home-improvement experience.",
  },
  {
    icon: Home,
    title: "Respect for Your Home",
    text: "We treat every customer and every property with care, patience, honesty, and respect.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            About Age In Place LLC
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Protecting the people you love.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            We help people remain safe, independent, and confident in the homes
            they already know and love.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Why we started
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                We wanted people&apos;s loved ones to be safe, whether someone
                was there with them or they were home alone.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Age In Place LLC was built around a simple belief: people should
                be able to feel secure in the place where they have built their
                lives, raised their families, and made their best memories.
              </p>

              <p>
                We do not enter homes simply to sell products. We enter homes to
                protect the people who live there.
              </p>

              <p>
                Every recommendation begins with one question:
              </p>

              <blockquote className="border-l-4 border-teal-600 pl-5 font-semibold text-slate-950">
                Will this make the home safer, easier to use, or more
                comfortable for the person living there?
              </blockquote>

              <p>
                If the answer is no, we will not recommend it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Our values
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              The standard behind every project
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Meet the team
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Experience backed by genuine care
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">
                Allen Hendershot
              </h3>

              <p className="mt-1 font-semibold text-teal-700">Owner</p>

              <p className="mt-3 text-sm font-medium text-slate-700">
                56 years of construction experience
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                For more than five decades, Allen has dedicated his career to
                building, repairing, and improving homes. Today, he leads Age In
                Place LLC with one purpose: helping people remain safe,
                independent, and confident in the homes they love.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-950">
                Timothy A. Foss Jr.
              </h3>

              <p className="mt-1 font-semibold text-teal-700">
                Operations Manager
              </p>

              <p className="mt-3 text-sm font-medium text-slate-700">
                10 years of construction and home-improvement experience
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Timothy brings a passion for customer care and home safety. He
                believes every family deserves peace of mind knowing the people
                they love are safe at home, and he is committed to making every
                customer feel heard, respected, and informed.
              </p>
            </article>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-teal-700" />
            Fully insured company serving New England
          </div>
        </div>
      </section>

      <section className="bg-teal-700 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s talk about making your home safer.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-teal-50">
            Schedule a free consultation and tell us what concerns you most
            about your home.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Schedule a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}