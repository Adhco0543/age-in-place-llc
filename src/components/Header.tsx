'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Accessibility,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      <div className="hidden bg-slate-950 text-white lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm lg:px-8">
          <div className="flex items-center gap-6 text-slate-300">
            <a
              href="tel:6037036633"
              className="inline-flex items-center gap-2 transition hover:text-teal-300"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (603) 703-6633
            </a>

            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-300" aria-hidden="true" />
              657 Elm St., Manchester, NH
            </span>
          </div>

          <div className="inline-flex items-center gap-2 font-semibold text-teal-300">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Fully insured · Walk-ins welcome
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-20 items-center justify-between gap-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex min-w-0 items-center gap-3"
              aria-label="Age In Place LLC home"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm transition group-hover:bg-teal-800">
                <Accessibility className="h-6 w-6" aria-hidden="true" />
              </span>

              <span className="min-w-0">
                <span className="block truncate text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                  Age In Place LLC
                </span>
                <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:block">
                  Accessibility · Home Safety · Remodeling
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
              {navigation.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-teal-50 text-teal-800'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:6037036633"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-teal-800 transition hover:border-teal-200 hover:bg-teal-50 lg:hidden"
                aria-label="Call Age In Place LLC"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>

              <Link
                href="/contact"
                className="hidden items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 sm:inline-flex"
              >
                Free Consultation
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100 lg:hidden"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <nav
              id="mobile-navigation"
              className="border-t border-slate-200 py-4 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="grid gap-2">
                {navigation.map((item) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'page' : undefined}
                      className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                        isActive
                          ? 'bg-teal-50 text-teal-800'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="mt-2 grid gap-3 border-t border-slate-200 pt-4 sm:grid-cols-2">
                  <a
                    href="tel:6037036633"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-bold text-slate-950 transition hover:bg-slate-100"
                  >
                    <Phone className="h-5 w-5 text-teal-700" aria-hidden="true" />
                    Call (603) 703-6633
                  </a>

                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-4 py-3 font-bold text-white transition hover:bg-teal-800"
                  >
                    Free Consultation
                  </Link>
                </div>

                <p className="px-4 pt-2 text-center text-sm text-slate-500">
                  657 Elm St., Manchester, NH · Walk-ins welcome
                </p>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
