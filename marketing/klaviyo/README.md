# Age In Place — website email follow-ups

Prepared October 21, 2026. Review round: first complete Klaviyo integration draft.

## Account resources

- Klaviyo account/public site ID: V39Qde (public identifier, never a private key).
- New list: RGfzyF, `Age In Place — Website Email Follow-ups`, double opt-in.
- Draft flow: RY3QHp, `Age In Place — Website Welcome & Follow-ups`.
- Original template IDs: Sxg94r, XXa3LK, Ste8Kp.
- Flow-owned cloned template IDs: Rm2N6L, W7hpZA, URfiLk. Edit flow-owned versions when revising an existing flow.
- Flow email actions: 121518295, 121518297, 121518301. All remain draft.

## Behavior

The optional unchecked box appears only on consultation requests. A successful inquiry continues to be delivered through the existing server-side Resend endpoint. Only after provider acceptance, and only with explicit email consent, does the browser call Klaviyo's documented public Client Subscription endpoint. Only the email address is sent; no phone, service selection, free text, rating, or health-related inquiry content is shared with Klaviyo. Consent source is recorded as the website optional checkbox v1.

The new list requires email confirmation. Joining the confirmed list is the flow trigger. The flow filters for subscribed email-marketing recipients, has no repeat entry, and uses smart sending. Messages: welcome immediately, planning ideas after 2 days, consultation invitation 5 days later (day 7). All action statuses and the flow remain draft. Nothing is sent automatically by this draft flow.

Signup failure never changes a successful inquiry into a failure. A separate retry button retries only signup, never the consultation email. Editing a new inquiry clears any stale signup retry. There are no private API keys, additional packages, tracking scripts, session recording, or new Vercel environment variables.

## Remaining release decisions

1. Address resolved October 21: Teejay confirmed 655 Elm St, Manchester, NH 03101. Website display text, shared configuration, and structured business data now use 655. Klaviyo account already uses 655; footer organization tags render that address at send time.
2. Sending domain send.ageinplacellc.com was registered in Klaviyo on October 21: ID 3442482, static configuration, status pending. Existing Resend records must be preserved. Before activation, change the draft sender from adh@wbhb666.com to an aligned ageinplacellc.com address; retain the monitored business reply-to.
3. Approve the website release and activate the flow only after address, sender setup, message review, and an authorized controlled end-to-end test.
4. Double-opt-in confirmation delivery, actual inbox rendering, unsubscribe behavior, and real profile entry have not been tested with a recipient. No test emails, live subscriptions, imported contacts, or SMS sends were created.
5. Phone viewport visual verification depends on available browser tools. Static responsive layout uses existing form styling.

## Verification

- Ten tests pass, including opt-out/private feedback no-network paths, exact minimal signup payload, rejected/invalid/network errors, and all seven existing contact endpoint tests.
- Production build and TypeScript pass for all 17 routes. ESLint: zero errors, one existing img optimization warning in Services.tsx.
- Klaviyo server-side template renders succeeded for all three flow-owned templates with clearly fictitious preview recipient context. No email was sent.
- Public subscription CORS preflight returned HTTP 200. Live subscription delivery has not been exercised.
- Visual baseline is the warm cream/forest website. Improvements: explicit optional consent and clear independent signup status/retry behavior.

## Documentation

- https://developers.klaviyo.com/en/reference/create_client_subscription
- https://developers.klaviyo.com/en/reference/flows_api_overview
- https://help.klaviyo.com/hc/en-us/articles/4408802648731

## DNS records prepared, not published

Domain: ageinplacellc.com. Exact Klaviyo host/value pairs:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | send | 3849573873990490671.klaviyodns.com |
| CNAME | mtd1._domainkey | mtd1._domainkey.3849573873990490671.klaviyodns.com |
| CNAME | mtd2._domainkey | mtd2._domainkey.3849573873990490671.klaviyodns.com |
| TXT | @ | klaviyo-site-verification=V39Qde |

Check conflicts and preserve existing records. After publication, verify domain 3442482 and activate the sending domain. Review the sender on all draft emails before flow activation. No DNS changes or live-flow activation performed.
