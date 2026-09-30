'use client';

import { useRef, useState } from 'react';
import { services, siteConfig } from '@/lib/config';

export function ContactForm({ kind = 'inquiry' }: { kind?: 'inquiry' | 'review' }) {
  const isReview = kind === 'review';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website: '',
    rating: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const requestId = useRef<string | null>(null);
  const serviceTitle = services.find((service) => service.id === formData.service)?.title || 'Other';
  const emailDraft = `mailto:${siteConfig.email}?subject=${encodeURIComponent(isReview ? 'Customer feedback' : 'Website consultation request')}&body=${encodeURIComponent([
    `Name: ${formData.name}`, `Email: ${formData.email}`, `Phone: ${formData.phone}`,
    isReview ? `Rating: ${formData.rating || 'Not selected'} / 5` : `Service: ${serviceTitle}`, '', formData.message,
  ].join('\n'))}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    requestId.current = null;
    setSubmitted(false);
    setError('');
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      requestId.current ??= crypto.randomUUID();
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, kind, requestId: requestId.current }),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (response.ok && result.success === true) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '', website: '', rating: '' });
        requestId.current = null;
      } else {
        setError(typeof result.error === 'string' ? result.error : 'Your inquiry could not be sent. Please call us or use the email option below.');
      }
    } catch {
      setError('We could not confirm that your inquiry was sent. Your message is still here. Try again, call us, or use the email option below.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-busy={loading}>
      <fieldset disabled={loading} className="space-y-6">
        <legend className="sr-only">{isReview ? 'Customer feedback' : 'Consultation request'}</legend>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={120}
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
              autoComplete="email"
              className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={40}
              autoComplete="tel"
              className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {isReview ? (
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-900">Your rating *</label>
            <select id="rating" name="rating" value={formData.rating} onChange={handleChange} required className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900">
              <option value="">Choose a rating</option>
              {[1, 2, 3, 4, 5].map((rating) => <option key={rating} value={rating}>{rating} {rating === 1 ? 'star' : 'stars'}</option>)}
            </select>
          </div>
        ) : <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-900 dark:text-white">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a service</option>
            {services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
            <option value="other">Other</option>
          </select>
        </div>}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
            {isReview ? 'Your feedback *' : 'Message *'}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={5000}
            rows={4}
            className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder={isReview ? 'Tell us about your experience working with Age In Place LLC...' : 'Tell us about your needs...'}
          />
        </div>

      </fieldset>

      {submitted && (
        <div role="status" className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 text-green-800 dark:text-green-200">
          {isReview ? '✓ Thank you! Your feedback has been sent privately to our team.' : '✓ Thank you! Your inquiry has been sent to our team.'}
        </div>
      )}

      {error && <div role="alert" className="rounded-lg bg-red-50 p-4 text-red-800">{error}</div>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Sending...' : isReview ? 'Send private feedback' : 'Get Free Quote'}
      </button>
      <p className="text-sm leading-6 text-slate-600">
        Prefer another way?{' '}
        <a href={emailDraft} className="font-semibold text-teal-800 underline">Send by email</a>
        {' '}or <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="font-semibold text-teal-800 underline">call {siteConfig.phone}</a>.
        {' '}The email option opens a draft in your email app; press Send there to send it.
      </p>
    </form>
  );
}
