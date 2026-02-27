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

const FathersHeartSEO: React.FC<SEOProps> = ({
  title = "Father's Heart Ministry | كنيسة قلب الاب – Surrey BC",
  description = "Father's Heart Ministry – A Spirit-filled Arabic Christian Church in Surrey, BC. Join us for powerful worship, biblical teaching, prayer, and community. كنيسة قلب الاب – كنيسة عربية مسيحية في سيري، كولومبيا البريطانية. انضم إلينا للعبادة والتعليم والصلاة والشركة.",
  keywords = "Father's Heart Ministry, Father's Heart Church, Fathers Heart Ministry Surrey, كنيسة قلب الاب, قلب الاب, كنيسة قلب الآب, Father's Heart Ministry Surrey BC, Father's Heart Arabic Church, Arabic Church Surrey, Christian Church Surrey BC, Spirit filled church Surrey, كنيسة عربية سيري, خدمة قلب الاب",
  image = "https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png",
  url = "https://fathersheartministry.ca/",
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

      {/* Geo targeting */}
      <meta name="geo.region" content="CA-BC" />
      <meta name="geo.placename" content="Surrey, British Columbia" />
      <meta name="geo.position" content="49.1913;-122.8490" />
      <meta name="ICBM" content="49.1913, -122.8490" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Hreflang – bilingual support */}
      <link rel="alternate" hrefLang="en" href="https://fathersheartministry.ca/" />
      <link rel="alternate" hrefLang="ar" href="https://fathersheartministry.ca/ar/" />
      <link rel="alternate" hrefLang="x-default" href="https://fathersheartministry.ca/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Father's Heart Ministry | كنيسة قلب الاب" />
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

      {/* Local Business + Church structured data (JSON-LD) */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Church",
          "name": "Father's Heart Ministry",
          "alternateName": [
            "Father's Heart Church",
            "Fathers Heart Ministry",
            "كنيسة قلب الاب",
            "قلب الاب",
            "كنيسة قلب الآب",
            "خدمة قلب الاب"
          ],
          "url": "https://fathersheartministry.ca",
          "logo": "${image}",
          "image": "${image}",
          "description": "Father's Heart Ministry is a Spirit-filled Arabic Christian Church in Surrey, BC, offering worship, biblical teaching, prayer and community in Arabic and English. كنيسة قلب الاب هي كنيسة عربية مسيحية في سيري تقدم العبادة والتعليم والصلاة.",
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
          "areaServed": ["Surrey", "Vancouver", "Burnaby", "British Columbia"],
          "inLanguage": ["en", "ar"],
          "sameAs": [
            "https://arabicchurchsurrey.ca"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Church Office",
            "availableLanguage": ["English", "Arabic"]
          }
        }
      `}</script>

      {/* Organization structured data (JSON-LD) – helps Google Knowledge Panel */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Father's Heart Ministry",
          "alternateName": ["كنيسة قلب الاب", "Father's Heart Church"],
          "url": "https://fathersheartministry.ca",
          "logo": "${image}",
          "foundingLocation": {
            "@type": "Place",
            "name": "Surrey, BC, Canada"
          },
          "sameAs": [
            "https://arabicchurchsurrey.ca"
          ]
        }
      `}</script>
    </Helmet>
  );
};

export default FathersHeartSEO;
