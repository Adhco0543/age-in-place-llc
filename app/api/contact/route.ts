import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate form data
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send an email to your business
    // 2. Store the inquiry in a database
    // 3. Send confirmation to the user

    // For now, we'll just log and return success
    console.log('New contact inquiry:', data);

    // Example: Send email via a service like SendGrid, Resend, or Nodemailer
    // await sendEmail({
    //   to: 'info@ageinplacellc.com',
    //   subject: `New Service Inquiry from ${data.name}`,
    //   html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Service: ${data.service}</p><p>Message: ${data.message}</p>`
    // });

    return NextResponse.json(
      { success: true, message: 'Thank you for your inquiry. We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
