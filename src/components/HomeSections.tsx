import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  Home,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: HeartHandshake,
    title: "We listen first",
    text: "We begin by understanding your concerns, routines, mobility needs, budget, and what you value most about your home.",
  },
  {
    icon: ShieldCheck,
    title: "Safety before sales",
    text: "We only recommend work that we believe will genuinely improve safety, accessibility, comfort, or independence.",
  },
  {
    icon: Wrench,
    title: "66 years combined experience",
    text: "Decades of construction and home-improvement experience guide every assessment and installation.",
  },
  {
    icon: BadgeCheck,
    title: "Fully insured",
    text: "Age In Place LLC is fully insured and coordinates qualified trade partners when specialized work is required.",
  },
];

const process = [
  {
    number: "01",
    title: "We listen",
    text: "We greet you warmly and let you explain your concerns, fears, goals, likes, and dislikes before offering recommendations.",
  },
  {
    number: "02",
    title: "We walk through together",
    text: "With your permission, we take notes during a slow and deliberate walkthrough of the home, inside and outside.",
  },
  {
    number: "03",
    title: "We explain what we find",
    text: "We clearly explain each concern, why it matters, and the practical options available.",
  },
  {
    number: "04",
    title: "You receive a clear plan",
    text: "We provide a written estimate based on your priorities, realistic safety needs, and available budget, without pressure.",
  },
];

const faqs = [
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer free consultations to learn about your concerns and determine the best next step for your home.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Age In Place LLC serves homeowners, families, caregivers, and care professionals throughout New England. Availability depends on location and project scope.",
  },
  {
    question: "Can you complete wheelchair-accessibility modifications?",
    answer:
      "Yes. We offer doorway widening, ramps, handrails, threshold changes, bathroom accessibility improvements, and other mobility-focused modifications.",
  },
  {
    question: "What if specialized electrical or plumbing work is required?",
    answer:
      "We coordinate with qualified and legally licensed trade partners when a project requires specialized electrical, plumbing, or other regulated work.",
  },
  {
    question: "Do you offer ongoing home safety visits?",
    answer:
      "Yes. Our planned HomeCare Membership provides recurring safety checks, detector testing, handrail and grab-bar inspections, seasonal reviews, and written visit reports.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Our promise
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              We do not enter homes simply to sell products.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              We enter homes to protect the people who live there. Every
              recommendation begins with one question:
            </p>

            <blockquote className="mt-6 border-l-4 border-teal-400 pl-5 text-xl font-semibold leading-8">
              Will this make the home safer for the person who calls it home?
            </blockquote>

            <p className="mt-6 font-semibold text-teal-300">
              If the answer is no, we will not recommend it.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <Icon className="h-7 w-7 text-teal-300" />
                  <h3 className="mt-5 text-xl font-bold">{reason.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            The Age In Place experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            It begins with a conversation, not a sales pitch
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We listen carefully, walk through the home with you, explain what we
            find, and build a realistic plan around your needs.
          </p>
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
  );
}

export function GalleryPreview() {
  const categories = [
    {
      title: "Bathroom Safety",
      text: "Grab bars, shower seating, raised toilet solutions, and slip-prevention improvements.",
    },
    {
      title: "Accessibility & Mobility",
      text: "Doorway widening, ramps, railings, threshold changes, and wheelchair-accessible modifications.",
    },
    {
      title: "Smart Home Safety",
      text: "Lighting, leak sensors, smart detectors, alert systems, video doorbells, and access controls.",
    },
  ];

  return (
    <section className="bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Project gallery
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Practical changes that make daily life safer
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Real project photos will be added as completed work is documented.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-teal-700"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="flex min-h-72 flex-col justify-end rounded-3xl border border-dashed border-slate-300 bg-white p-7"
            >
              <Camera className="h-8 w-8 text-teal-700" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {category.title}
              </h3>
              <p className="mt-2 text-slate-600">{category.text}</p>
              <p className="mt-5 text-sm font-semibold text-teal-700">
                Project photos coming soon
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
            <ClipboardCheck className="h-6 w-6" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Common questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Straight answers before we begin
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Have another question? Call and speak directly with our team.
          </p>

          <a
            href="tel:6037036633"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-950 hover:text-teal-700"
          >
            <Phone className="h-4 w-4" />
            603-703-6633
          </a>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 p-5 open:border-teal-200 open:bg-teal-50/40"
            >
              <summary className="cursor-pointer list-none font-bold text-slate-950">
                {faq.question}
              </summary>

              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-teal-700 py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-teal-100">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">
              Free consultation
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready to make your home safer?
          </h2>

          <p className="mt-4 text-lg text-teal-50">
            Tell us what has changed, what concerns you, and what you want to
            preserve about the home you love.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:6037036633"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 hover:bg-slate-100"
          >
            <Phone className="h-4 w-4" />
            Call 603-703-6633
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 font-semibold hover:bg-white/10"
          >
            Request a consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}