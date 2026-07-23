import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  BadgeCheck,
  Bath,
  Check,
  ClipboardCheck,
  DoorOpen,
  HeartHandshake,
  Home,
  House,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safety before everything",
    text: "Every recommendation is made to reduce risk, improve daily comfort, and support long-term independence at home.",
  },
  {
    icon: Wrench,
    title: "Experience you can trust",
    text: "Our team brings decades of hands-on construction and home-improvement experience to every aging-in-place project.",
  },
  {
    icon: Home,
    title: "Built around your needs",
    text: "No two homes, routines, or families are the same. We shape each plan around the person, the property, and the budget.",
  },
  {
    icon: HeartHandshake,
    title: "Honest recommendations",
    text: "If something is not necessary, we will tell you. Our goal is to earn trust, not pressure you into work you do not need.",
  },
];

const process = [
  {
    number: "01",
    title: "Tell us what has changed",
    text: "We begin with a conversation about your concerns, routines, mobility needs, priorities, and budget.",
  },
  {
    number: "02",
    title: "Walk through the home with us",
    text: "We review the spaces you use every day, inside and outside, and identify barriers or safety concerns.",
  },
  {
    number: "03",
    title: "Review practical options",
    text: "We explain what we found, why it matters, and which improvements can make the biggest difference now and later.",
  },
  {
    number: "04",
    title: "Receive a clear plan",
    text: "You receive a written estimate based on your priorities, realistic safety needs, and available budget, without pressure.",
  },
];

const solutions = [
  {
    icon: Bath,
    title: "Safer bathrooms",
    text: "Grab bars, shower seating, safer fixtures, improved lighting, and accessibility-focused remodeling.",
    points: ["Reduce fall risks", "Improve balance and confidence", "Make daily routines easier"],
  },
  {
    icon: DoorOpen,
    title: "Easier entrances",
    text: "Ramps, railings, repaired steps, threshold changes, and safer paths into and out of the home.",
    points: ["Create dependable support", "Remove entry barriers", "Improve everyday access"],
  },
  {
    icon: Accessibility,
    title: "Better movement throughout the home",
    text: "Doorway widening, flooring transitions, layout changes, and custom solutions for changing mobility needs.",
    points: ["Open difficult pathways", "Improve room-to-room access", "Plan for future needs"],
  },
];

const faqs = [
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer free consultations to learn about your concerns, understand the home, and determine the most practical next step.",
  },
  {
    question: "Do I need a complete remodel?",
    answer:
      "Not necessarily. Some homes need only a few targeted improvements, such as grab bars, railings, better lighting, or threshold changes. We recommend work based on actual needs, not the size of the sale.",
  },
  {
    question: "Can you complete wheelchair-accessibility modifications?",
    answer:
      "Yes. Depending on the home, we can complete doorway widening, ramps, handrails, threshold changes, bathroom accessibility improvements, and other mobility-focused modifications.",
  },
  {
    question: "Can you handle regular remodeling and carpentry too?",
    answer:
      "Yes. Our work includes kitchen and bathroom remodeling, flooring, drywall, painting, doors, trim, molding, cabinets, finish carpentry, and general home improvements.",
  },
  {
    question: "What if electrical or plumbing work is required?",
    answer:
      "When a project requires regulated specialty work, we coordinate with qualified trade professionals so the complete project can move forward properly.",
  },
  {
    question: "Can family members or caregivers be involved?",
    answer:
      "Absolutely. With the homeowner's permission, we welcome input from family members, caregivers, and care professionals so everyone understands the goals and proposed work.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            Why families trust Age In Place LLC
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Growing older should not mean leaving the home you love.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            We help people remain safer, more comfortable, and more independent through thoughtful home modifications, accessibility improvements, remodeling, and skilled carpentry.
          </p>

          <blockquote className="mx-auto mt-8 max-w-3xl border-l-4 border-teal-400 pl-5 text-left text-xl font-semibold leading-8 text-white">
            Every project begins with one question: Will this help someone live more safely, comfortably, and independently at home?
          </blockquote>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold">{reason.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{reason.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-teal-300/20 bg-teal-400/10 p-7 text-center sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            Our promise
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-xl font-semibold leading-8 text-white sm:text-2xl">
            Whether we are installing one grab bar or completing a full accessibility renovation, we will treat your home with respect, communicate clearly, and complete the work with care.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              What working with us looks like
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              A clear process built around listening first
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              You do not need to know exactly what work is required before calling. Tell us what feels difficult, unsafe, or uncertain, and we will help you sort through the options.
            </p>

            <div className="mt-8 rounded-3xl bg-teal-50 p-6">
              <BadgeCheck className="h-7 w-7 text-teal-800" />
              <p className="mt-4 font-bold text-slate-950">No-pressure recommendations</p>
              <p className="mt-2 leading-7 text-slate-600">
                We explain priorities clearly so you can make informed decisions at your own pace.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <span className="absolute right-5 top-3 text-6xl font-black text-teal-100">
                  {step.number}
                </span>
                <div className="relative">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                    Step {step.number}
                  </span>
                  <h3 className="mt-7 text-xl font-bold text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Solutions for everyday living
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Small changes can remove big obstacles
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The best aging-in-place work blends into the home while making movement, bathing, entering, and everyday routines safer and easier.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-teal-300 hover:text-teal-200"
          >
            Talk through your concerns
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">{solution.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{solution.text}</p>

                <ul className="mt-6 space-y-3">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-slate-200">
                      <Check className="h-4 w-4 shrink-0 text-teal-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-teal-300">
              <House className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold">Need something different?</h3>
              <p className="mt-1 text-slate-300">
                We also provide remodeling, flooring, drywall, painting, doors, trim, cabinets, and custom carpentry.
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-teal-300 hover:text-teal-200"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FAQPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
            <ClipboardCheck className="h-6 w-6" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Common questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Straight answers before work begins
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every home and situation is different. These are a few of the questions families ask most often.
          </p>

          <div className="mt-8 rounded-3xl bg-slate-100 p-6">
            <p className="font-bold text-slate-950">Still unsure where to begin?</p>
            <p className="mt-2 leading-7 text-slate-600">
              Call and explain what has changed. We will help you identify the next practical step.
            </p>
            <a
              href="tel:6037036633"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-800 hover:text-teal-700"
            >
              <Phone className="h-4 w-4" />
              (603) 703-6633
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-teal-200 open:bg-teal-50/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-950">
                {faq.question}
                <span className="text-xl font-normal text-teal-700 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-100">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Free consultation
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Start with a conversation about your home
            </h2>

            <p className="mt-4 text-lg leading-8 text-teal-50">
              Tell us what feels unsafe, difficult, or uncertain. We will listen, explain the options clearly, and help you build a practical path forward.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-teal-50 sm:flex-row sm:gap-6">
              <span className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" /> Fully insured
              </span>
              <span className="flex items-center gap-2">
                <HeartHandshake className="h-4 w-4" /> No-pressure guidance
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Walk-ins welcome
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="tel:6037036633"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 hover:bg-slate-100"
            >
              <Phone className="h-4 w-4" />
              Call (603) 703-6633
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
      </div>
    </section>
  );
}
