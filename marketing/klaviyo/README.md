# Website email follow-ups

Updated October 23, 2026.

The optional, unchecked email checkbox appears only on consultation requests. After the inquiry is accepted, the browser sends only the email address and explicit marketing consent to the public Client Subscription endpoint. Phone numbers, service choices, messages, and reviews are excluded. The list uses double opt-in.

The customer flow remains draft. It contains a welcome email, planning guidance on day two, and a consultation invitation on day seven. Signup failures show a separate retry that does not resend the inquiry.

## Verified

- Sending-domain verification and activation passed.
- An authorized internal test reached the recipient inbox. The separate test flow was returned to draft.
- Preview-only contact email configuration was added with a separate, restricted sending credential.
- Browser inquiry submission succeeded and the provider confirmed delivery.
- Ten automated tests passed.

## Remaining blocker

The optional Client Subscription request failed in the cloud browser with a transport TypeError. Preflight returned HTTP 200, but the observed allowed-methods response listed only OPTIONS. Confirmation delivery, confirmed list membership, and unsubscribe behavior remain unverified. Safe diagnostics log only HTTP status or error class, never contact details or payloads.

Complete the signup test from a normal browser before enabling customer follow-ups. The website changes remain in the draft pull request.

## Documentation

- https://developers.klaviyo.com/en/reference/create_client_subscription
- https://developers.klaviyo.com/en/reference/flows_api_overview
