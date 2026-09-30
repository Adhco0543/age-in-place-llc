import type { Metadata } from 'next';
import { ExternalLink, MessageSquare, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Customer Reviews & Feedback',
  description: 'Share your experience with Age In Place LLC in Manchester, NH. We welcome honest feedback about our accessibility, home safety, carpentry, and remodeling work.',
  alternates: { canonical: '/reviews' },
};

function getGoogleReviewUrl() {
  const value = process.env.GOOGLE_REVIEW_URL;
  if (!value) return null;
  try {
    const url = new URL(value);
    const allowed = ['g.page', 'search.google.com', 'www.google.com', 'google.com', 'maps.google.com', 'maps.app.goo.gl'];
    return url.protocol === 'https:' && allowed.includes(url.hostname) && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
}

export default function ReviewsPage() {
  const googleReviewUrl = getGoogleReviewUrl();
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Customer feedback</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Your experience matters.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Have we worked on your home? Tell us what went well and what we could do better. Every honest review is welcome.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <MessageSquare className="h-8 w-8 text-teal-700" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-black">Send feedback to our team</h2>
          <p className="mb-8 mt-3 leading-7 text-slate-600">This form sends your feedback privately to Age In Place LLC. It does not post a public review on this website or on Google.</p>
          <ContactForm kind="review" />
        </div>
        <div className="space-y-6">
          {googleReviewUrl && (
            <div className="rounded-3xl bg-teal-700 p-8 text-white">
              <h2 className="text-2xl font-black">Leave a public Google review</h2>
              <p className="mt-4 leading-7 text-teal-50">Share your experience directly on Google. You can use this link without filling out our form, whatever rating you choose.</p>
              <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950">Review us on Google <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          )}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <ShieldCheck className="h-8 w-8 text-teal-700" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black">Honest feedback, respected</h2>
            <p className="mt-4 leading-7 text-slate-600">We welcome all ratings. We do not offer rewards for reviews or ask only satisfied customers to share their experience.</p>
            <p className="mt-4 leading-7 text-slate-600">We are building our public review history. Customer testimonials will be added with permission after we confirm the feedback is genuine. Your email and phone number will not be published.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
