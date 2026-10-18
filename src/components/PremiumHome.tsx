import { ProjectGallery } from "./ProjectGallery";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const photos = {
  living: "/images/home-living-v1.webp",
  bathroom: "/images/home-bathroom-v1.webp",
  entry: "/images/home-entry-v1.webp",
};
const spaces = [
  {
    number: "01",
    title: "Comfort in every room.",
    image: "/images/projects/shower-overview.webp",
    alt: "Bathroom project with gray tile, grab bars, and a handheld shower",
    description:
      "Thoughtful bathroom changes that make daily routines feel easier.",
    href: "/services/accessible-bathrooms",
    label: "Accessible bathrooms",
    related: "/grab-bar-installation",
    relatedLabel: "Grab bars & bathroom safety",
  },
  {
    number: "02",
    title: "A more welcoming way in.",
    image: photos.entry,
    alt: "Design inspiration for a timber entrance ramp with handrails at a New England home",
    description:
      "Ramps, railings, and entrances built around the way you move.",
    href: "/services/wheelchair-ramps",
    label: "Ramps & entrances",
    related: "/services/handrails",
    relatedLabel: "Handrails & safer stairs",
  },
  {
    number: "03",
    title: "Room to live your way.",
    image: photos.living,
    alt: "Design inspiration for an open living space with oak cabinetry and clear circulation",
    description:
      "Practical layouts, skilled carpentry, and a home that works for you.",
    href: "/services/kitchen-accessibility",
    label: "Kitchen accessibility",
    related: "/services/home-safety-assessments",
    relatedLabel: "Home safety assessments",
  },
];
const steps = [
  [
    "01",
    "A real conversation.",
    "Tell us what is becoming difficult, what you love about your home, and what you want to change.",
  ],
  [
    "02",
    "A careful walkthrough.",
    "We look at daily routines, access, and safety together, taking time to understand the whole picture.",
  ],
  [
    "03",
    "An honest recommendation.",
    "We explain the practical options and help you decide what matters most for your home and budget.",
  ],
  [
    "04",
    "A clear plan forward.",
    "You receive a written estimate and a next step you can feel comfortable with. No pressure.",
  ],
];
const people = [
  {
    initials: "AH",
    name: "Allen Hendershot",
    title: "Owner & Finish Carpenter",
    experience: "52+ years of hands-on experience",
    bio: "More than five decades of building, repairing, and remodeling homes. Allen brings practical judgment, careful workmanship, and a commitment to getting the details right.",
  },
  {
    initials: "TF",
    name: "Timothy A. Foss Jr.",
    title: "Operations Manager",
    experience: "10 years in construction & home improvement",
    bio: "From your first conversation to project coordination, Timothy helps keep the process clear, personal, and focused on what makes your everyday life easier.",
  },
];
const faqs = [
  [
    "Where do you work?",
    "We are based in Manchester and serve Bedford, Hooksett, Goffstown, Londonderry, Auburn, Derry, Merrimack, Amherst, and surrounding Southern New Hampshire communities. Availability depends on location and project scope.",
  ],
  [
    "Can we start with a small improvement?",
    "Yes. A grab bar, a sturdy handrail, or a safer threshold can be a useful first step. We also help with larger accessibility and remodeling projects.",
  ],
  [
    "Is the consultation free?",
    "Yes. We offer a free consultation to understand your concerns and discuss the right next step for your home.",
  ],
  [
    "What if my project needs plumbing or electrical work?",
    "We coordinate with qualified and legally licensed trade partners when a project requires plumbing, electrical, or other regulated work.",
  ],
];

export function PremiumHome() {
  return (
    <main className="premium-home">
      <section className="home-hero" aria-labelledby="home-heading">
        <Image
          src={photos.living}
          alt=""
          fill
          preload
          sizes="100vw"
          className="hero-photo"
        />
        <div className="hero-shade" />
        <div className="home-shell hero-content">
          <p className="eyebrow light">
            <span /> Manchester, New Hampshire
          </p>
          <h1 id="home-heading">
            The home you love.
            <br />
            <em>
              Made for the life
              <br className="desktop-break" /> you want.
            </em>
          </h1>
          <p className="hero-description">
            Thoughtful accessibility improvements, home safety, and
            craftsmanship. Helping you stay comfortable, confident, and
            independent at home.
          </p>
          <div className="home-actions">
            <Link href="/contact" className="home-button gold">
              Let&apos;s talk about your home{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href="tel:6037036633" className="hero-phone">
              <Phone size={16} aria-hidden="true" /> (603) 703-6633
            </a>
          </div>
          <div className="hero-assurance">
            <ShieldCheck size={17} aria-hidden="true" /> Fully insured <span />{" "}
            Locally owned <span /> Free consultation
          </div>
        </div>
        <div className="hero-bottom home-shell">
          <span>Built around you. Designed for everyday life.</span>
          <a href="#our-services">
            Explore what&apos;s possible{" "}
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="trust-strip">
        <div className="home-shell trust-grid">
          <div>
            <strong>52+</strong>
            <span>
              Years of Allen&apos;s
              <br />
              construction experience
            </span>
          </div>
          <div>
            <ShieldCheck size={27} strokeWidth={1.3} aria-hidden="true" />
            <span>
              Fully insured.
              <br />
              Careful by nature.
            </span>
          </div>
          <div>
            <MapPin size={27} strokeWidth={1.3} aria-hidden="true" />
            <span>
              Manchester roots.
              <br />
              Southern NH service.
            </span>
          </div>
          <div>
            <span className="trust-word">You.</span>
            <span>
              At the center of
              <br />
              every recommendation.
            </span>
          </div>
        </div>
      </div>
      <section
        id="our-services"
        className="home-section home-shell services-section"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">A home that works for you</p>
            <h2>
              Safer living.
              <br />
              <em>Beautifully considered.</em>
            </h2>
          </div>
          <div className="section-intro">
            <p>
              Good home improvements should feel like they belong. We combine
              practical safety solutions with the craftsmanship that makes a
              house feel like home.
            </p>
            <Link href="/services" className="text-link">
              Explore all services <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="space-grid">
          {spaces.map((space) => (
            <article className="space-card" key={space.number}>
              <Link
                href={space.href}
                className="space-photo-link"
                aria-label={space.label}
              >
                <Image
                  src={space.image}
                  alt={space.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, 33vw"
                  className="space-photo"
                />
                <span className="photo-number">{space.number}</span>
                <span className="photo-arrow">
                  <ArrowRight size={20} aria-hidden="true" />
                </span>
              </Link>
              <div className="space-copy">
                <h3>
                  <Link href={space.href}>{space.title}</Link>
                </h3>
                <p>{space.description}</p>
                <Link href={space.related} className="space-related">
                  {space.relatedLabel}{" "}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="image-caption">
          Bathroom: actual project photo. Ramp and living space: AI-generated
          design inspiration.
        </p>
      </section>
      <ProjectGallery />
      <section className="promise-section" aria-labelledby="promise-heading">
        <div className="promise-photo">
          <Image
            src={photos.entry}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="photo-note">
            <span>A more comfortable everyday.</span>
            <span>Inside and out.</span>
          </div>
        </div>
        <div className="promise-copy">
          <p className="eyebrow light">Our promise to you</p>
          <h2 id="promise-heading">
            Your home is personal.
            <br />
            <em>So is our approach.</em>
          </h2>
          <p>
            We start by listening. To your routines, your concerns, and the
            things that make your home yours. Then we recommend the changes that
            serve you best.
          </p>
          <blockquote>“Will this make your home safer?”</blockquote>
          <p className="promise-principle">
            If the answer is no, we won&apos;t recommend it.
          </p>
          <ul>
            <li>
              <Check size={17} aria-hidden="true" /> Honest recommendations
            </li>
            <li>
              <Check size={17} aria-hidden="true" /> Respect for your home and
              budget
            </li>
            <li>
              <Check size={17} aria-hidden="true" /> Quality workmanship, down
              to the details
            </li>
          </ul>
          <Link href="/about" className="text-link light-link">
            Get to know Age In Place <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="home-section home-shell process-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Simple from the start</p>
            <h2>
              A clear path to
              <br />
              <em>feeling more at home.</em>
            </h2>
          </div>
          <p className="section-intro">
            No complicated process. No pressure to commit. Just a thoughtful
            conversation and a practical plan.
          </p>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="team-section">
        <div className="team-photo">
          <Image src={photos.bathroom} alt="" fill sizes="100vw" />
          <div />
        </div>
        <div className="home-shell team-content">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Craftsmanship with a human side</p>
              <h2>
                Experienced hands.
                <br />
                <em>People who care.</em>
              </h2>
            </div>
            <p className="section-intro">
              A local team with decades of construction experience and a shared
              belief: your home should support the way you want to live.
            </p>
          </div>
          <div className="team-grid">
            {people.map((person) => (
              <article key={person.initials}>
                <div className="person-top">
                  <span className="person-monogram" aria-hidden="true">
                    {person.initials}
                  </span>
                  <span className="person-experience">{person.experience}</span>
                </div>
                <h3>{person.name}</h3>
                <p className="person-title">{person.title}</p>
                <p>{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-section home-shell questions-section">
        <div>
          <p className="eyebrow">A little clarity</p>
          <h2>
            Good questions.
            <br />
            <em>Straight answers.</em>
          </h2>
          <p className="questions-intro">
            You don&apos;t need all the answers before you call. That&apos;s
            what the first conversation is for.
          </p>
          <a href="tel:6037036633" className="text-link">
            <Phone size={16} aria-hidden="true" /> Speak with our team
          </a>
        </div>
        <div className="home-faqs">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <ChevronDown size={19} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <div className="feedback-strip home-shell">
        <div>
          <p className="eyebrow">Have we worked together?</p>
          <p>Your experience helps us care for the next home.</p>
        </div>
        <Link href="/reviews" className="text-link">
          Share honest feedback <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
      <section className="closing-section">
        <Image src={photos.living} alt="" fill sizes="100vw" />
        <div className="closing-shade" />
        <div className="home-shell closing-content">
          <p className="eyebrow light">Your next chapter, right at home</p>
          <h2>
            A safer home starts
            <br />
            <em>with a conversation.</em>
          </h2>
          <p>
            Tell us what would make life at home a little easier.
            <br />
            We&apos;ll help you find the right place to begin.
          </p>
          <div className="home-actions">
            <Link href="/contact" className="home-button gold">
              Request your free consultation{" "}
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href="tel:6037036633" className="hero-phone">
              <Phone size={16} aria-hidden="true" /> (603) 703-6633
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
