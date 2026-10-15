import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import sitemap from '../app/sitemap';
import nextConfig from '../next.config';
import { siteConfig } from '../src/lib/config';
import { POST } from '../app/api/contact/route';

const read = (p: string) => readFileSync(p, 'utf8');

// ---- Regression tests (pass today) ----
test('sitemap lists unique absolute URLs on the site domain', () => {
  const urls = sitemap().map((e) => e.url);
  assert.equal(new Set(urls).size, urls.length);
  for (const u of urls) assert.ok(u.startsWith(siteConfig.url), u);
  assert.ok(urls.includes(siteConfig.url));
});

test('contact API rejects a mismatched Origin', async () => {
  const res = await POST(new Request('https://www.ageinplacellc.com/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://evil.example' }, body: '{}',
  }));
  assert.equal(res.status, 403);
});

// ---- Verified findings: desired behavior, marked todo until integrator fixes ----
test('sitemap lastModified is stable, not new Date() on every call', async () => {
  const a = sitemap()[0].lastModified as Date;
  await new Promise((r) => setTimeout(r, 5));
  const b = sitemap()[0].lastModified as Date;
  assert.equal(new Date(a).getTime(), new Date(b).getTime());
});

test('contact API rejects requests with no Origin header', async () => {
  const res = await POST(new Request('https://www.ageinplacellc.com/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}',
  }));
  assert.equal(res.status, 403);
});

test('next.config defines security headers', () => {
  assert.equal(typeof (nextConfig as { headers?: unknown }).headers, 'function');
});

test('app has not-found and error pages', () => {
  assert.ok(existsSync('app/not-found.tsx'));
  assert.ok(existsSync('app/error.tsx'));
});

test('layout provides a single <main id="main"> and skip link; pages have no <main>', () => {
  const layout = read('app/layout.tsx');
  assert.match(layout, /<main[^>]*id="main"/);
  assert.match(layout, /href="#main"/);
  for (const f of ['app/page.tsx', 'app/about/page.tsx', 'app/contact/page.tsx', 'app/services/page.tsx', 'app/reviews/page.tsx', 'src/components/SeoServicePage.tsx']) {
    assert.doesNotMatch(read(f), /<main[\s>]/, f);
  }
});

test('Header uses siteConfig for phone/email', () => {
  const h = read('src/components/Header.tsx');
  assert.doesNotMatch(h, /6037036633|Adh@Wbhb666\.com/);
});

test('Services.tsx uses next/image, not <img>', () => {
  assert.doesNotMatch(read('src/components/Services.tsx'), /<img\b/);
});

test('ContactForm has no dead dark: classes and uses larger labels', () => {
  const f = read('src/components/ContactForm.tsx');
  assert.doesNotMatch(f, /dark:/);
  assert.doesNotMatch(f, /<label[^>]*text-sm/);
});
