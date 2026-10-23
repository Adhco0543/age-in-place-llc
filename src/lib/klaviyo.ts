// Public identifiers, not credentials. Only used by the browser after explicit consent.
export const klaviyoSiteId = 'V39Qde';
export const klaviyoFollowupListId = 'RGfzyF';

export async function requestEmailFollowups(
  email: string,
  consent: boolean,
  kind: 'inquiry' | 'review',
  fetcher: typeof fetch = fetch,
): Promise<'skipped' | 'confirmation-requested'> {
  if (!consent || kind !== 'inquiry') return 'skipped';
  const address = email.trim();
  if (address.length > 254 || !/^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/.test(address)) {
    throw new Error('Invalid signup email.');
  }
  const response = await fetcher(`https://a.klaviyo.com/client/subscriptions/?company_id=${klaviyoSiteId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/vnd.api+json', Accept: 'application/vnd.api+json', revision: '2026-10-15' },
    body: JSON.stringify({ data: {
      type: 'subscription',
      attributes: {
        custom_source: 'Age In Place website inquiry — optional email checkbox v1',
        profile: { data: { type: 'profile', attributes: {
          email: address,
          subscriptions: { email: { marketing: { consent: 'SUBSCRIBED' } } },
        } } },
      },
      relationships: { list: { data: { type: 'list', id: klaviyoFollowupListId } } },
    } }),
    signal: AbortSignal.timeout(8000),
  }).catch((error: unknown) => {
    // The error name distinguishes a timeout from a network failure without PII.
    console.warn('Email signup transport failure:', error instanceof Error ? error.name : 'Error');
    throw error;
  });
  if (response.status !== 202) {
    // Status only: never log the address, payload, or provider response body.
    console.warn('Email signup provider returned HTTP status:', response.status);
    throw new Error('Email signup was not accepted.');
  }
  return 'confirmation-requested';
}
