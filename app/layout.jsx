import './globals.css';

export const metadata = {
  title: 'FKNM Digital – Website & Chatbot in 7 Tagen | Webdesign Trier',
  description: 'Moderne Websites & individuelle Chatbots – schnell umgesetzt, fair bepreist. Neue Website in 7 Tagen inkl. Setup & Go-Live. Professionelles Webdesign aus Osburg bei Trier.',
  keywords: 'Webdesign, Website erstellen, Chatbot, Trier, Osburg, Website Relaunch, moderne Website, schnelle Website',
  authors: [{ name: 'FKNM Digital' }],
  creator: 'FKNM Digital',
  publisher: 'FKNM Digital',
  metadataBase: new URL('https://fknm.digital'),
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://fknm.digital',
    title: 'FKNM Digital – Website & Chatbot in 7 Tagen',
    description: 'Moderne Websites & individuelle Chatbots – schnell umgesetzt, fair bepreist. Neue Website in 7 Tagen!',
    siteName: 'FKNM Digital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FKNM Digital - Webdesign & Chatbots'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FKNM Digital – Website & Chatbot in 7 Tagen',
    description: 'Moderne Websites & individuelle Chatbots – schnell umgesetzt, fair bepreist.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://fknm.digital" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0A1F3C" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FKNM Digital",
              "url": "https://fknm.digital",
              "logo": "https://fknm.digital/logo.png",
              "description": "Moderne Websites & individuelle Chatbots – schnell umgesetzt, fair bepreist.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Unterstraße 21",
                "addressLocality": "Osburg",
                "postalCode": "54317",
                "addressCountry": "DE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-151-22855923",
                "contactType": "customer service",
                "email": "fknm.digital@gmail.com",
                "availableLanguage": ["de"]
              },
              "sameAs": [],
              "founder": [
                {
                  "@type": "Person",
                  "name": "Felix Frank Klemens"
                },
                {
                  "@type": "Person",
                  "name": "Nils Müller"
                }
              ],
              "areaServed": "DE",
              "service": [
                {
                  "@type": "Service",
                  "name": "Webdesign",
                  "description": "Moderne, schnelle Websites – klar strukturiert & mobil-optimiert."
                },
                {
                  "@type": "Service",
                  "name": "Website-Relaunch",
                  "description": "Neugestaltung & technische Optimierung – inkl. Basis-SEO."
                },
                {
                  "@type": "Service",
                  "name": "Chatbot-Integration",
                  "description": "Automatisierte Kommunikation, Termin- & Angebotsanfragen."
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
        <script src="//code.tidio.co/ydzqdxqp9yiyfs3zaqkhgrmza5q0sqej.js" async></script>
      </body>
    </html>
  );
}
