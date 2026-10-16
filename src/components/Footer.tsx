import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell footer-main">
        <div>
          <Link href="/" className="footer-brand">
            Age In Place <span className="text-sm">LLC</span>
          </Link>
          <p className="footer-about">
            Thoughtful improvements for the home you love. Accessibility,
            safety, remodeling, and skilled carpentry in Southern New Hampshire.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Our services</Link>
            <Link href="/about">Our approach</Link>
            <Link href="/reviews">Reviews & feedback</Link>
            <Link href="/contact">Free consultation</Link>
          </nav>
        </div>
        <div className="footer-contact">
          <h2 className="footer-heading">Let&apos;s talk</h2>
          <a href="tel:6037036633">{siteConfig.phone}</a>
          <a href="tel:6036772737">{siteConfig.secondaryPhone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>
            {siteConfig.address}
            <br />
            Call or email to arrange a consultation.
          </p>
        </div>
      </div>
      <div className="footer-shell footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p>Locally owned. Fully insured. Built around you.</p>
      </div>
    </footer>
  );
}
