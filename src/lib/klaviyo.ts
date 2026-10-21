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
  });
  if (response.status !== 202) throw new Error('Email signup was not accepted.');
  return 'confirmation-requested';
}
