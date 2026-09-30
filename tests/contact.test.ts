import assert from 'node:assert/strict';
import { afterEach, beforeEach, test } from 'node:test';
import { POST } from '../app/api/contact/route';

const savedEnv = { ...process.env };
const payload = {
  name: 'Example Customer', email: 'customer@example.com', phone: '6035550100',
  service: 'bathroom', message: 'Please discuss a grab bar installation.',
  requestId: 'dc189ca4-0e0b-4bfe-9e6e-8b9cc53a2f20', website: '',
};
const makeRequest = (body: unknown = payload, origin = 'https://www.ageinplacellc.com') => new Request(`${origin === 'https://other.example' ? 'https://www.ageinplacellc.com' : origin}/api/contact`, {
  method: 'POST', headers: { 'Content-Type': 'application/json', Origin: origin }, body: JSON.stringify(body),
});

beforeEach(() => {
  process.env.RESEND_API_KEY = 'test-key-never-sent';
  process.env.CONTACT_FROM_EMAIL = 'website@example.com';
  process.env.CONTACT_TO_EMAIL = 'office@example.com';
});
afterEach(() => {
  for (const key of ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL']) {
    if (savedEnv[key] === undefined) delete process.env[key];
    else process.env[key] = savedEnv[key];
  }
});

test('success requires provider acceptance and sends only to the configured business', async (t) => {
  const send = t.mock.method(globalThis, 'fetch', async (_url: unknown, options: RequestInit) => {
    assert.equal(_url, 'https://api.resend.com/emails');
    const email = JSON.parse(options.body as string);
    assert.deepEqual(email.to, ['office@example.com']);
    assert.equal(email.reply_to, payload.email);
    assert.equal(email.from, 'Age In Place LLC <website@example.com>');
    assert.equal(email.subject, 'New website consultation request');
    assert.equal(email.html, undefined);
    assert.ok(email.text.includes(payload.message));
    assert.equal((options.headers as Record<string, string>)['Idempotency-Key'], `contact-${payload.requestId}`);
    return Response.json({ id: 'provider-message-id' });
  });
  const response = await POST(makeRequest({ ...payload, to: 'attacker@example.com', from: 'attacker@example.com' }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(send.mock.callCount(), 1);
});

test('missing email configuration never reports success or sends a request', async (t) => {
  delete process.env.RESEND_API_KEY;
  const send = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected send'); });
  const response = await POST(makeRequest());
  assert.equal(response.status, 503);
  assert.equal((await response.json()).success, undefined);
  assert.equal(send.mock.callCount(), 0);
});

test('provider rejection and malformed acceptance never report success or leak provider details', async (t) => {
  const send = t.mock.method(globalThis, 'fetch');
  t.mock.method(console, 'error', () => {});
  for (const result of [Response.json({ error: 'provider-private-info' }, { status: 422 }), Response.json({}), Response.json({ id: '' })]) {
    send.mock.mockImplementation(async () => result);
    const response = await POST(makeRequest());
    assert.equal(response.status, 502);
    const body = await response.json();
    assert.equal(body.success, undefined);
    assert.ok(!JSON.stringify(body).includes('provider-private-info'));
  }
});

test('provider timeout or network failure returns an actionable failure', async (t) => {
  t.mock.method(console, 'error', () => {});
  t.mock.method(globalThis, 'fetch', async () => { throw new Error('Timed out'); });
  const response = await POST(makeRequest());
  assert.equal(response.status, 502);
  assert.match((await response.json()).error, /call us|email option/i);
});

test('invalid input, spam trap, cross-site requests and large bodies never send mail', async (t) => {
  const send = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected send'); });
  for (const body of [null, [], { ...payload, name: ' ' }, { ...payload, email: 'bad' }, { ...payload, email: 'a@example.com\nBcc: evil@example.com' }, { ...payload, service: 'unknown' }, { ...payload, requestId: 'bad' }, { ...payload, message: 'x'.repeat(5001) }, { ...payload, website: 'spam' }, { ...payload, kind: 'other' }]) {
    assert.equal((await POST(makeRequest(body))).status, 400);
  }
  assert.equal((await POST(makeRequest(payload, 'https://other.example'))).status, 403);
  assert.equal((await POST(makeRequest({ ...payload, message: 'x'.repeat(16001) }))).status, 413);
  assert.equal(send.mock.callCount(), 0);
});

test('malformed JSON and non-JSON submissions fail without sending mail', async (t) => {
  const send = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected send'); });
  assert.equal((await POST(new Request('https://www.ageinplacellc.com/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' }))).status, 400);
  assert.equal((await POST(new Request('https://www.ageinplacellc.com/api/contact', { method: 'POST', body: 'name=test' }))).status, 415);
  assert.equal(send.mock.callCount(), 0);
});

test('every review rating is accepted equally and sent as private feedback', async (t) => {
  const send = t.mock.method(globalThis, 'fetch', async (_url: unknown, options: RequestInit) => {
    const email = JSON.parse(options.body as string);
    assert.equal(email.subject, 'New private customer feedback');
    assert.match(email.text, /Rating: [1-5] \/ 5/);
    assert.deepEqual(email.to, ['office@example.com']);
    return Response.json({ id: 'provider-message-id' });
  });
  for (const rating of ['1', '2', '3', '4', '5']) {
    assert.equal((await POST(makeRequest({ ...payload, service: '', kind: 'review', rating }))).status, 200);
  }
  assert.equal((await POST(makeRequest({ ...payload, kind: 'review', rating: '6' }))).status, 400);
  assert.equal(send.mock.callCount(), 5);
});
