import { siteConfig } from '@/lib/config';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: '+1-603-703-6633',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '657 Elm St.',
    addressLocality: 'Manchester',
    addressRegion: 'NH',
    postalCode: '03101',
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Manchester',
      containedInPlace: {
        '@type': 'State',
        name: 'New Hampshire',
      },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Southern New Hampshire',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-603-703-6633',
      contactType: 'customer service',
      areaServed: 'US-NH',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-603-677-2737',
      contactType: 'customer service',
      areaServed: 'US-NH',
      availableLanguage: 'English',
    },
  ],
  knowsAbout: [
    'Aging-in-place modifications',
    'Home safety improvements',
    'Accessibility modifications',
    'Grab bar installation',
    'Wheelchair ramps',
    'Accessible bathroom remodeling',
    'Carpentry',
    'Home remodeling',
  ],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
