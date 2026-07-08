import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400 text-sm">
              Making homes safer, more accessible, and smarter for seniors and families.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#bathroom" className="hover:text-white transition-colors">Bathroom Safety</a></li>
              <li><a href="#kitchen" className="hover:text-white transition-colors">Kitchen Mods</a></li>
              <li><a href="#entrances" className="hover:text-white transition-colors">Entrances</a></li>
              <li><a href="#smart-home" className="hover:text-white transition-colors">Smart Home</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block rounded bg-blue-600 px-3 py-1 text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href={siteConfig.social.facebook} className="hover:text-white transition-colors">Facebook</a>
              <a href={siteConfig.social.instagram} className="hover:text-white transition-colors">Instagram</a>
              <a href={siteConfig.social.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
