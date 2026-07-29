import Link from "next/link";
import {
  ArrowRight,
  Bath,
  Camera,
  DoorOpen,
  Home,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const projectTypes = [
  {
    icon: Bath,
    eyebrow: "Bathroom safety",
    title: "Safer bathrooms without making the room feel clinical",
    text: "Grab bars, shower seating, improved lighting, raised fixtures, and slip-reduction upgrades designed around the person using the space.",
    features: ["Grab bars", "Shower seating", "Slip reduction"],
  },
  {
    icon: DoorOpen,
    eyebrow: "Access and mobility",
    title: "Fewer barriers between you and the rooms you use every day",
    text: "Doorway widening, threshold changes, railings, ramps, and mobility-focused modifications that make movement easier and more confident.",
    features: ["Wider openings", "Lower thresholds", "Ramps and rails"],
  },
  {
    icon: Lightbulb,
    eyebrow: "Smart home safety",
    title: "Simple technology that quietly protects the home",
    text: "Motion lighting, leak sensors, smart detectors, video doorbells, and alert systems selected for reliability and ease of use.",
    features: ["Safer lighting", "Leak alerts", "Smart detectors"],
  },
];

export function ProjectGalleryPreview() {
  return (
    <section className="bg-slate-100 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Project gallery
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Practical upgrades, planned around real daily life
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every project starts with the person, not the product. These are the
              types of improvements we design and complete to make homes safer,
              easier to navigate, and more comfortable to live in.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projectTypes.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex min-h-64 items-end overflow-hidden bg-slate-900 p-6 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.24),_transparent_42%),linear-gradient(145deg,#0f172a,#1e293b)]" />
                  <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-teal-300 backdrop-blur">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="relative">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">
                      <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                      Photo-ready layout
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="leading-7 text-slate-600">{project.text}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-semibold text-slate-500">
                      Project type {String(index + 1).padStart(2, "0")}
                    </span>
                    <ShieldCheck className="h-5 w-5 text-teal-700" aria-hidden="true" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 rounded-3xl bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-800">
            <Home className="h-7 w-7" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-950">
              Real project photos will be added as the gallery grows
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              The layout is ready for before-and-after photos, project notes, and
              completed work from homes across Southern New Hampshire.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold text-slate-950 transition hover:text-teal-700"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
