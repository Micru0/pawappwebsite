import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Pet Training & Behavior Modification | PawApp Kuwait - Expert Dog Trainers',
  description: 'Find certified pet trainers in Kuwait for obedience training, behavior modification, and puppy socialization. Book professional training sessions through PawApp with experienced trainers.',
  keywords: [
    'pet training Kuwait',
    'dog training Kuwait',
    'puppy training Kuwait',
    'behavior modification Kuwait',
    'pet obedience training',
    'professional dog trainer Kuwait',
    'puppy socialization classes',
    'animal behavior training',
    'pet trainer near me Kuwait',
    'dog behavior problems'
  ].join(', '),
  openGraph: {
    title: 'Professional Pet Training & Behavior | PawApp Kuwait',
    description: 'Expert pet trainers for obedience, behavior modification, and specialized training. Book certified professionals in Kuwait through PawApp.',
    url: 'https://pawapp.com/training',
    siteName: 'PawApp',
    images: [
      {
        url: '/images/training-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Pet Training Services Kuwait - PawApp',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Pet Training & Behavior | PawApp Kuwait',
    description: 'Expert pet trainers for obedience, behavior modification, and specialized training in Kuwait.',
    images: ['/images/training-twitter.jpg'],
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
    canonical: 'https://pawapp.com/training',
  },
}

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Training Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Pet Training & Behavior Modification",
            "description": "Expert pet training services including obedience training, behavior modification, and puppy socialization in Kuwait",
            "url": "https://pawapp.com/training",
            "provider": {
              "@type": "Organization",
              "name": "PawApp",
              "url": "https://pawapp.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pawapp.com/images/paw-app-logo.png"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "Kuwait"
            },
            "serviceType": "Pet Training",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pet Training Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Basic Obedience Training",
                    "description": "Foundation training for puppies and adult dogs"
                  },
                  "priceRange": "KD 150-200"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Behavior Modification",
                    "description": "Address specific behavioral issues like aggression and anxiety"
                  },
                  "priceRange": "KD 80-120"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Puppy Socialization",
                    "description": "Early socialization for puppies to build confidence"
                  },
                  "priceRange": "KD 120-160"
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
                  "name": "Training",
                  "item": "https://pawapp.com/training"
                }
              ]
            }
          })
        }}
      />
      
      {/* FAQ Schema for Training Questions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What age should I start training my puppy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Puppy training can start as early as 8 weeks old. Early socialization and basic obedience training between 8-16 weeks is crucial for proper development."
                }
              },
              {
                "@type": "Question",
                "name": "How long does basic obedience training take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Basic obedience training typically takes 6-8 weeks with weekly 1-hour sessions. Results depend on the dog's age, breed, and consistency of practice at home."
                }
              },
              {
                "@type": "Question",
                "name": "Can you help with aggressive dog behavior?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our certified trainers specialize in behavior modification for aggressive dogs using positive reinforcement methods. We assess each case individually and create customized training plans."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer in-home training sessions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer personalized in-home training sessions for dogs who may be more comfortable in their familiar environment. Sessions are 1-2 hours and can be booked through PawApp."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}