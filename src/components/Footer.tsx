import Link from 'next/link';
import {
  Accessibility,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services#bathroom', label: 'Bathroom Safety' },
  { href: '/services#entrances', label: 'Ramps & Railings' },
  { href: '/services#accessibility', label: 'Accessibility Modifications' },
  { href: '/services#remodeling', label: 'Independent-Living Remodeling' },
  { href: '/services#carpentry', label: 'Carpentry & Home Improvements' },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="border-b border-white/10 bg-teal-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-100">
              Start with a conversation
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Let&apos;s make your home safer, easier, and more comfortable.
            </h2>
            <p className="mt-3 max-w-2xl text-teal-50">
              Tell us what concerns you most. We&apos;ll listen, explain your options,
              and help you plan the right next step without pressure.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 shadow-sm transition hover:bg-slate-100"
          >
            Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.75fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white">
                <Accessibility className="h-7 w-7" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xl font-black tracking-tight">
                  Age In Place LLC
                </span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Accessibility · Home Safety · Remodeling
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Practical home modifications, remodeling, and carpentry designed to
              help people remain safe, independent, and confident in the homes they
              love.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal-400" aria-hidden="true" />
                Fully insured
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-teal-400" aria-hidden="true" />
                Walk-ins welcome
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-teal-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Core Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm leading-6 text-slate-400 transition hover:text-teal-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contact
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href="tel:6037036633"
                  className="flex items-start gap-3 transition hover:text-teal-300"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" aria-hidden="true" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href="tel:6036772737"
                  className="flex items-start gap-3 transition hover:text-teal-300"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" aria-hidden="true" />
                  <span>{siteConfig.secondaryPhone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 break-all transition hover:text-teal-300"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p>Serving homeowners and families from Manchester, New Hampshire.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
