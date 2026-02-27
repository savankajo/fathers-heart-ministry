import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  lang?: 'en' | 'ar';
}

const SEO: React.FC<SEOProps> = ({
  title = "Arabic Church Surrey BC | كنيسة عربية في سيري",
  description = "Father's Heart Ministry – Arabic Christian Church in Surrey, BC. Join us for Arabic worship services, sermons, prayer, and community. كنيسة عربية مسيحية في سيري، كولومبيا البريطانية. انضم إلينا للعبادة والتعليم والشركة.",
  keywords = "Arabic Church Surrey, Arabic Church in Surrey, Arabic Christian Church Surrey BC, كنيسة عربية في سيري, كنيسة عربية, كنيسة سيري, Father's Heart Ministry, Arabic worship Surrey, Arab church Vancouver, Arabic speaking church BC, كنيسة مسيحية عربية, عبادة عربية",
  image = "https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png",
  url = "https://arabicchurchsurrey.ca/",
  lang = 'en',
}) => {
  const fullTitle = title.includes("|")
    ? title
    : `${title} | Father's Heart Ministry`;

  return (
    <Helmet>
      {/* Language & charset */}
      <html lang={lang === 'ar' ? 'ar' : 'en'} dir={lang === 'ar' ? 'rtl' : 'ltr'} />
      <meta charSet="UTF-8" />

      {/* Primary SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Father's Heart Ministry" />

      {/* Geo targeting – tells Google this is a Surrey BC business */}
      <meta name="geo.region" content="CA-BC" />
      <meta name="geo.placename" content="Surrey, British Columbia" />
      <meta name="geo.position" content="49.1913;-122.8490" />
      <meta name="ICBM" content="49.1913, -122.8490" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Hreflang – bilingual support */}
      <link rel="alternate" hrefLang="en" href="https://arabicchurchsurrey.ca/" />
      <link rel="alternate" hrefLang="ar" href="https://arabicchurchsurrey.ca/ar/" />
      <link rel="alternate" hrefLang="x-default" href="https://arabicchurchsurrey.ca/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Arabic Church Surrey – Father's Heart Ministry" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:locale:alternate" content="ar_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local Business structured data (JSON-LD) */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Church",
          "name": "Father's Heart Ministry – Arabic Church Surrey",
          "alternateName": ["Arabic Church Surrey", "كنيسة عربية في سيري"],
          "url": "https://arabicchurchsurrey.ca",
          "logo": "${image}",
          "image": "${image}",
          "description": "Arabic Christian Church in Surrey, BC offering worship services, sermons, and community in Arabic. كنيسة عربية مسيحية في سيري.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surrey",
            "addressRegion": "BC",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.1913,
            "longitude": -122.8490
          },
          "areaServed": ["Surrey", "Vancouver", "British Columbia"],
          "inLanguage": ["en", "ar"],
          "sameAs": [
            "https://fathersheartministry.ca"
          ]
        }
      `}</script>
    </Helmet>
  );
};

export default SEO;
