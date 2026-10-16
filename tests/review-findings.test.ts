import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (p: string) => readFileSync(p, 'utf8');

const phoneFiles = [
  'src/components/Hero.tsx', 'src/components/HomeSections.tsx', 'src/components/Owners.tsx',
  'src/components/Footer.tsx', 'src/components/SeoServicePage.tsx', 'src/components/LocalBusinessSchema.tsx',
  'app/contact/page.tsx', 'app/services/page.tsx', 'app/grab-bar-installation/page.tsx',
];

test('no hardcoded phone number outside src/lib/config', () => {
  for (const f of phoneFiles) assert.doesNotMatch(read(f), /6037036633|603-703-6633|\(603\) 703-6633/, f);
});

test('Header mobile menu closes on Escape', () => {
  assert.match(read('src/components/Header.tsx'), /Escape/);
});

test('globals.css honors prefers-reduced-motion', () => {
  assert.match(read('app/globals.css'), /prefers-reduced-motion/);
});

test('key pages define their own openGraph metadata', () => {
  for (const f of ['app/about/page.tsx', 'app/contact/page.tsx', 'app/services/page.tsx', 'app/reviews/page.tsx']) {
    assert.match(read(f), /openGraph/, f);
  }
});

test('layout does not load unused Geist_Mono font', () => {
  assert.doesNotMatch(read('app/layout.tsx'), /Geist_Mono/);
});

test('Footer and ProjectGalleryPreview avoid text-xs', () => {
  assert.doesNotMatch(read('src/components/Footer.tsx'), /\btext-xs\b/);
  assert.doesNotMatch(read('src/components/ProjectGalleryPreview.tsx'), /\btext-xs\b/);
});
