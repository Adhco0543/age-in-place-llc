const GOOGLE_REVIEW_HOSTS = [
  'g.page',
  'search.google.com',
  'www.google.com',
  'google.com',
  'maps.google.com',
  'maps.app.goo.gl',
];

export function getGoogleReviewUrl() {
  const value = process.env.GOOGLE_REVIEW_URL;
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' &&
      GOOGLE_REVIEW_HOSTS.includes(url.hostname) &&
      !url.username &&
      !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}
