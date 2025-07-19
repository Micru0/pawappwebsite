import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pet Health Resource Center | PawApp Kuwait - Expert Veterinary Health Guides',
  description: 'Comprehensive pet health resources, symptom checker, emergency care guides, and expert veterinary advice for dogs and cats in Kuwait. Get instant answers to your pet health questions.',
  keywords: [
    'pet health Kuwait',
    'veterinary advice Kuwait',
    'pet symptoms checker',
    'dog health problems',
    'cat health issues',
    'pet emergency care',
    'animal health Kuwait',
    'pet first aid',
    'veterinary consultation Kuwait',
    'pet wellness guide'
  ].join(', '),
  openGraph: {
    title: 'Pet Health Resource Center | PawApp Kuwait',
    description: 'Expert pet health information, symptom checker, and emergency care guides. Get professional veterinary advice for your pets in Kuwait.',
    url: 'https://pawapp.com/health',
    siteName: 'PawApp',
    images: [
      {
        url: '/images/health-center-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PawApp Pet Health Resource Center',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Health Resource Center | PawApp Kuwait',
    description: 'Expert pet health information, symptom checker, and emergency care guides for Kuwait pet owners.',
    images: ['/images/health-center-twitter.jpg'],
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
    canonical: 'https://pawapp.com/health',
  },
}

export default function HealthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data for SEO and AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Pet Health Resource Center",
            "description": "Comprehensive pet health resources, symptom checker, and expert veterinary advice",
            "url": "https://pawapp.com/health",
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
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are common signs that my pet needs veterinary attention?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common warning signs include persistent vomiting, diarrhea, loss of appetite, lethargy, difficulty breathing, limping, or changes in behavior. If you notice any of these symptoms, contact your veterinarian."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should I take my pet for checkups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Adult pets should have annual checkups, while senior pets (7+ years) should visit the vet twice yearly. Puppies and kittens need more frequent visits for vaccinations and monitoring."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What should I do in a pet emergency?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In a pet emergency, stay calm, assess the situation, provide basic first aid if trained, and contact your emergency veterinarian immediately. Do not attempt treatments you're not trained for."
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
                  "name": "Health Center",
                  "item": "https://pawapp.com/health"
                }
              ]
            }
          })
        }}
      />
      {children}
    </>
  )
}