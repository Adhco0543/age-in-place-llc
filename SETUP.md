# Contact delivery, reviews, and traffic measurement

## Finish email delivery

The form sends inquiries and private customer feedback through Resend. It reports success only after the provider accepts the message. It does not store inquiries or publish reviews. Failed submissions preserve the form and offer an email draft and phone link.

1. Verify a domain you control in Resend and add its provided DNS records at your domain provider.
2. Create a sending API key and set `RESEND_API_KEY` in the Vercel project's Production and Preview environments.
3. Set `CONTACT_FROM_EMAIL` to a sending address on that verified domain. Enter only the address, without a display name.
4. `CONTACT_TO_EMAIL` is optional and defaults to the existing business inbox, `Adh@Wbhb666.com`.
5. Redeploy after updating environment variables. Confirm a real inquiry reaches the business inbox before relying on automatic delivery. Provider acceptance is not proof of inbox delivery.

Do not commit keys or tokens. `.env.example` contains placeholders only. Without a configured sender and key, the form returns an honest unavailable message. The email and phone options remain available.

## Connect Google reviews

Open the business's verified Google Business Profile and use **Read reviews → Get more reviews** (or **Ask for reviews**) to copy the genuine review link. Set `GOOGLE_REVIEW_URL` in Vercel and redeploy. The page shows the link to every visitor, independently of the private form and its rating. With no link configured, no Google review button appears.

The `/reviews` page is in the main menu, footer, home feedback section, and sitemap. Private feedback is not automatically published on the site or Google. Do not create fake testimonials or publish contact details. Get customer permission and confirm authenticity before adding public testimonials.

## Measure visitors

The root layout now includes `@vercel/analytics/next`. Vercel's Analytics tab must be enabled for this project; the current production domain already serves its insights script. Deploy the new component and verify that browsing the production site produces page views. The code collects no contact-form fields in analytics.

Vercel Web Analytics measures website visits. Google Search Console independently measures Google impressions and clicks. Installing visitor analytics does not create Google impressions or recover historic unmeasured visits.

## Check Google performance

1. Use the Search Console property covering `https://www.ageinplacellc.com/`. A verified Domain property covers both www and non-www.
2. In **Performance → Search results**, choose the last three months and remove unintended filters. Review clicks, impressions, Queries, Pages, and average position.
3. In **URL inspection**, inspect the homepage and key service pages. Check their indexed status and Google's selected canonical URL.
4. Submit `https://www.ageinplacellc.com/sitemap.xml` under **Sitemaps**.
5. If using HTML-tag verification, set only the token value in `GOOGLE_SITE_VERIFICATION` and redeploy. DNS verification is another option.

The live site is searchable and allows crawlers. The previous About, Contact, Services index and Grab Bar pages inherited a homepage canonical; this update assigns each its own canonical. This correction is not proof that those signals caused any reported zero traffic.

For local visibility, complete and verify the Google Business Profile, keep contact information accurate, list actual services and service areas, add genuine work photos and request honest reviews from all customers. Relevant project case studies and genuine local links can help customers and search engines understand the business. Rankings and click totals are not guaranteed.

## Validation

```sh
npm ci
npm test
npm run lint
npm run build
```

Tests use mocked email requests and send no real emails.
