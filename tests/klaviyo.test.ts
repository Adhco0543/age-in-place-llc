import assert from 'node:assert/strict';
import { test } from 'node:test';
import { requestEmailFollowups } from '../src/lib/klaviyo';

test('no consent and private feedback never contact Klaviyo', async () => {
  const rejectFetch: typeof fetch = async () => { throw Error('Must not contact provider'); };
  assert.equal(await requestEmailFollowups('person@example.com', false, 'inquiry', rejectFetch), 'skipped');
  assert.equal(await requestEmailFollowups('person@example.com', true, 'review', rejectFetch), 'skipped');
});
test('opt-in sends only email, explicit email marketing consent and the double-opt-in list', async () => {
  let calls = 0;
  const fakeFetch: typeof fetch = async (url, options) => {
    calls++;
    assert.equal(url, 'https://a.klaviyo.com/client/subscriptions/?company_id=V39Qde');
    const body = JSON.parse(options?.body as string).data;
    assert.equal(body.relationships.list.data.id, 'RGfzyF');
    assert.deepEqual(body.attributes.profile.data.attributes, {
      email: 'person@example.com', subscriptions: { email: { marketing: { consent: 'SUBSCRIBED' } } },
    });
    assert.ok(!JSON.stringify(options).includes('Authorization'));
    return new Response(null, { status: 202 });
  };
  assert.equal(await requestEmailFollowups(' person@example.com ', true, 'inquiry', fakeFetch), 'confirmation-requested');
  assert.equal(calls, 1);
});
test('bad addresses do not reach provider and provider failures never claim signup', async () => {
  const unexpected: typeof fetch = async () => { throw Error('Must not contact provider'); };
  await assert.rejects(requestEmailFollowups('invalid', true, 'inquiry', unexpected), /Invalid signup/);
  for (const status of [200, 400, 429, 500]) {
    await assert.rejects(requestEmailFollowups('person@example.com', true, 'inquiry', async () => new Response(null, { status })), /not accepted/);
  }
  await assert.rejects(requestEmailFollowups('person@example.com', true, 'inquiry', async () => { throw Error('Network failed'); }), /Network failed/);
});
