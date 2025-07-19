import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Veterinary Clinics in Kuwait | PawApp - Trusted Pet Care Directory',
  description: 'Find the best veterinary clinics and animal hospitals in Kuwait. Read reviews, check hours, book appointments, and get directions to trusted pet care facilities near you.',
  keywords: [
    'veterinary clinics Kuwait',
    'animal hospitals Kuwait',
    'vet near me Kuwait',
    'pet clinic Salmiya',
    'emergency vet Kuwait',
    'animal care Kuwait',
    'pet hospital Hawalli',
    'veterinarian Kuwait City',
    'pet clinic Mishref',
    'animal doctor Kuwait'
  ].join(', '),
  openGraph: {
    title: 'Find Veterinary Clinics in Kuwait | PawApp',
    description: 'Discover trusted veterinary clinics and animal hospitals across Kuwait. Read reviews, check availability, and book appointments instantly.',
    url: 'https://pawapp.com/clinics',
    siteName: 'PawApp',
    images: [
      {
        url: '/images/clinics-directory-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Kuwait Veterinary Clinics Directory - PawApp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find Veterinary Clinics in Kuwait | PawApp',
    description: 'Trusted veterinary clinic directory for Kuwait. Find the best pet care near you.',
    images: ['/images/clinics-directory-twitter.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pawapp.com/clinics',
  },
}

export default function ClinicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Veterinary Clinics Directory - Kuwait",
            "description": "Find the best veterinary clinics and animal hospitals in Kuwait",
            "url": "https://pawapp.com/clinics",
            "publisher": {
              "@type": "Organization",
              "name": "PawApp",
              "url": "https://pawapp.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pawapp.com/images/paw-app-logo.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "name": "Veterinary Clinics in Kuwait",
              "description": "A comprehensive list of trusted veterinary clinics and animal hospitals across Kuwait",
              "numberOfItems": 50,
              "itemListElement": [
                {
                  "@type": "VeterinaryCare",
                  "name": "Kuwait Veterinary Center",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Salem Al-Mubarak Street",
                    "addressLocality": "Salmiya",
                    "addressCountry": "Kuwait"
                  },
                  "telephone": "+965 2573 4567",
                  "openingHours": "Mo-Su 08:00-22:00",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "124"
                  }
                }
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://pawapp.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Find Clinics",
                  "item": "https://pawapp.com/clinics"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://pawapp.com/clinics?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* Local Business Structured Data for Featured Clinics */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "VeterinaryCare",
              "name": "Kuwait Veterinary Center",
              "image": "https://pawapp.com/images/kuwait-vet-center.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Salem Al-Mubarak Street",
                "addressLocality": "Salmiya",
                "addressRegion": "Hawalli",
                "addressCountry": "Kuwait"
              },
              "telephone": "+965 2573 4567",
              "url": "https://pawapp.com/clinics/kuwait-veterinary-center",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "22:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "124"
              },
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Veterinary Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "General Veterinary Care"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Emergency Pet Care"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Pet Surgery"
                    }
                  }
                ]
              }
            }
          ])
        }}
      />
      {children}
    </>
  )
}