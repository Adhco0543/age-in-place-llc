import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-4xl font-black text-slate-950">Page not found</h1>
      <p className="mt-4 text-lg leading-8 text-slate-700">
        We couldn&apos;t find that page. Please return home or call us at{" "}
        <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="font-bold text-teal-800 underline">
          {siteConfig.phone}
        </a>
        .
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-xl bg-teal-700 px-6 py-3 font-bold text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
        Back to home
      </Link>
    </div>
  );
}
