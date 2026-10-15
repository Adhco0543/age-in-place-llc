import { NextResponse } from 'next/server';
import { services, siteConfig } from '@/lib/config';

const emailPattern = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;
const requestIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const unavailable = 'Your inquiry could not be sent. Please call us or use the email option below. Your message is still in the form.';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: 'Please submit the form from our website.' }, { status: 403 });
  }
  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return NextResponse.json({ error: 'Invalid request format.' }, { status: 415 });
  }
  const contentLength = Number(request.headers.get('content-length'));
  if (contentLength > 16000) {
    return NextResponse.json({ error: 'Your message is too long.' }, { status: 413 });
  }

  let data: Record<string, unknown>;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > 16000) {
      return NextResponse.json({ error: 'Your message is too long.' }, { status: 413 });
    }
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
    }
    data = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  const serviceId = typeof data.service === 'string' ? data.service : '';
  const selectedService = services.find((service) => service.id === serviceId);
  const requestId = typeof data.requestId === 'string' ? data.requestId : '';
  const kind = data.kind ?? 'inquiry';
  const isReview = kind === 'review';
  const rating = typeof data.rating === 'string' ? data.rating : '';

  if (data.website) {
    return NextResponse.json({ error: 'Unable to submit this inquiry.' }, { status: 400 });
  }
  if (!name || name.length > 120 || /[\r\n]/.test(name)) {
    return NextResponse.json({ error: 'Please enter your name (up to 120 characters).' }, { status: 400 });
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (phone.length > 40 || /[\r\n]/.test(phone) || (data.phone !== undefined && typeof data.phone !== 'string')) {
    return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
  }
  if (!message || message.length > 5000) {
    return NextResponse.json({ error: 'Please enter a message (up to 5,000 characters).' }, { status: 400 });
  }
  if (kind !== 'inquiry' && kind !== 'review') {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }
  if (isReview && !/^[1-5]$/.test(rating)) {
    return NextResponse.json({ error: 'Please choose a rating from 1 to 5 stars.' }, { status: 400 });
  }
  if ((!isReview && !selectedService && serviceId !== 'other') || !requestIdPattern.test(requestId)) {
    return NextResponse.json({ error: 'Please choose a service and try submitting again.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;
  if (!apiKey || !from || !emailPattern.test(from) || !emailPattern.test(to)) {
    return NextResponse.json({ error: unavailable }, { status: 503 });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `contact-${requestId}`,
      },
      body: JSON.stringify({
        from: `${siteConfig.name} <${from}>`,
        to: [to],
        reply_to: email,
        subject: isReview ? 'New private customer feedback' : 'New website consultation request',
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || 'Not provided'}`,
          isReview ? `Rating: ${rating} / 5` : `Service: ${selectedService?.title || 'Other'}`,
          '',
          message,
        ].join('\n'),
      }),
      signal: AbortSignal.timeout(10000),
    });

    const result: unknown = await response.json();
    if (!response.ok || !result || typeof result !== 'object' || !('id' in result) || typeof result.id !== 'string' || !result.id) {
      // Do not log names, contact details, inquiry text, or provider response bodies.
      console.error('Contact email was not accepted:', response.status);
      return NextResponse.json({ error: unavailable }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: 'Thank you! Your inquiry has been sent to our team.' });
  } catch {
    console.error('Contact email request failed.');
    return NextResponse.json({ error: unavailable }, { status: 502 });
  }
}
