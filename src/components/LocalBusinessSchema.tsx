import { siteConfig } from '@/lib/config';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': `${siteConfig.url}/#business`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: '+1-603-703-6633',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '657 Elm St.',
    addressLocality: 'Manchester',
    addressRegion: 'NH',
    postalCode: '03101',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Manchester, New Hampshire' },
    { '@type': 'City', name: 'Bedford, New Hampshire' },
    { '@type': 'City', name: 'Goffstown, New Hampshire' },
    { '@type': 'City', name: 'Hooksett, New Hampshire' },
    { '@type': 'City', name: 'Merrimack, New Hampshire' },
    { '@type': 'City', name: 'Londonderry, New Hampshire' },
    { '@type': 'AdministrativeArea', name: 'Southern New Hampshire' },
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
    'Aging in place remodeling',
    'Senior home modifications',
    'Home safety assessments',
    'Accessibility modifications',
    'Grab bar installation',
    'Wheelchair ramp installation',
    'Handrails and safer entrances',
    'Accessible bathroom remodeling',
    'Doorway widening',
    'Fall prevention home modifications',
    'Carpentry',
    'Home remodeling',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Aging in Place and Home Accessibility Services',
    itemListElement: [
      'Home Safety Assessments',
      'Grab Bar Installation',
      'Ramps and Railings',
      'Bathroom Safety and Accessibility',
      'Accessibility Modifications',
      'Remodeling for Independent Living',
      'Carpentry and Home Improvements',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
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
