import { createPageMetadata } from '@/lib/metadata';
import { ExternalLink, MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { getGoogleReviewUrl } from '@/lib/googleReviewUrl';
import { publishedReviews } from '@/lib/publishedReviews';

export const metadata = createPageMetadata({
  path: '/reviews',
  title: 'Customer Reviews | Age In Place LLC',
  description: 'Read verified customer reviews and share your experience with Age In Place LLC in Manchester, NH.',
});

export default function ReviewsPage() {
  const googleReviewUrl = getGoogleReviewUrl();

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Customer reviews</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Real experiences. Honest feedback.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Read customer reviews or share your experience with Age In Place LLC. Reviews are shown publicly only after they are verified and approved.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Star className="h-7 w-7 text-teal-700" aria-hidden="true" />
            <h2 className="text-2xl font-black">Reviews from our customers</h2>
          </div>

          {publishedReviews.length === 0 ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">No public reviews yet</h3>
              <p className="mt-3 leading-7 text-slate-600">
                We will post genuine customer reviews here after confirming the review and receiving permission to share it.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {publishedReviews.map((review, index) => (
                <article key={`${review.name}-${index}`} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex gap-1 text-amber-500" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">“{review.review}”</p>
                  <p className="mt-5 font-bold text-slate-950">{review.name}</p>
                  {review.service && <p className="mt-1 text-sm text-slate-500">{review.service}</p>}
                </article>
              ))}
            </div>
          )}

          {googleReviewUrl && (
            <div className="mt-6 rounded-3xl bg-teal-800 p-7 text-white">
              <h2 className="text-xl font-black">Review us on Google</h2>
              <p className="mt-3 leading-7 text-teal-50">You can also share your review publicly on Google.</p>
              <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950">
                Leave a Google review <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <MessageSquare className="h-8 w-8 text-teal-700" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-black">Share your experience</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Tell us about work we completed for you. Your submission goes to our team first; nothing is posted automatically. If you give permission, we may publish your verified review after approval. Your contact details stay private.
          </p>
          <div className="mt-6">
            <ContactForm kind="review" />
          </div>
          <div className="mt-6 flex items-start gap-3 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" aria-hidden="true" />
            <p>Every rating is welcome. We do not offer rewards for reviews or ask only satisfied customers to share feedback.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
