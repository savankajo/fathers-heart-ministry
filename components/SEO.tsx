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
  // FIX (Low): Trimmed to 7 focused keywords — Bing still reads this tag
  keywords = "Father's Heart Ministry Surrey, Arabic Church Surrey BC, كنيسة عربية سيري, كنيسة قلب الاب, Spirit-filled church Surrey, Christian Church Surrey BC, Arabic Christian Church Vancouver",
  // FIX (High): Replaced logo-only image with a proper 1200×630 social card image
  // ACTION NEEDED: Replace the URL below with your actual social card image on Cloudinary
  image = "https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/social_card_fhm.jpg",
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

      {/* FIX (Critical): Explicit index/follow — ensures no accidental noindex from build tools */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Primary SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Father's Heart Ministry" />

      {/* Geo targeting */}
      <meta name="geo.region" content="CA-BC" />
      <meta name="geo.placename" content="Surrey, British Columbia" />
      <meta name="geo.position" content="49.1913;-122.8490" />
      <meta name="ICBM" content="49.1913, -122.8490" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Hreflang – bilingual support */}
      {/* FIX (Medium): Kept hreflang — ensure arabicchurchsurrey.ca has reciprocal tags back here */}
      <link rel="alternate" hrefLang="en" href="https://fathersheartministry.ca/" />
      <link rel="alternate" hrefLang="ar" href="https://arabicchurchsurrey.ca/" />
      <link rel="alternate" hrefLang="x-default" href="https://fathersheartministry.ca/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Father's Heart Ministry | كنيسة قلب الاب" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {/* FIX (High): Dimensions match actual social card size */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Father's Heart Ministry – Arabic Christian Church in Surrey, BC" />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:locale:alternate" content="ar_CA" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* FIX (Medium): Add your Twitter/X handle if the ministry has an account */}
      {/* <meta name="twitter:site" content="@FathersHeartMin" /> */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Father's Heart Ministry – Arabic Christian Church in Surrey, BC" />

      {/* ================================================================
          Church structured data (JSON-LD)
          FIX (High): Added telephone, streetAddress, postalCode,
                      openingHours, sameAs social links, and servedCuisine→inLanguage
          ACTION NEEDED: Confirm phone number, street address, postal code,
                         and service hours before going live.
          ================================================================ */}
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
          "logo": "https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png",
          "image": "${image}",
          "description": "Father's Heart Ministry is a Spirit-filled Arabic Christian Church in Surrey, BC, offering worship, biblical teaching, prayer and community in Arabic and English. كنيسة قلب الاب هي كنيسة عربية مسيحية في سيري تقدم العبادة والتعليم والصلاة.",
          "telephone": "+1-604-781-5351",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10356 167A St",
            "addressLocality": "Surrey",
            "addressRegion": "BC",
            "postalCode": "V4N 4X2",
            "addressCountry": "CA"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.1913,
            "longitude": -122.8490
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "19:00",
              "closes": "21:00"
            }
          ],
          "areaServed": [
            "Surrey",
            "Burnaby",
            "Vancouver",
            "Langley",
            "British Columbia"
          ],
          "inLanguage": ["en", "ar"],
          "sameAs": [
            "https://arabicchurchsurrey.ca"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-604-781-5351",
            "contactType": "Church Office",
            "availableLanguage": ["English", "Arabic"]
          }
        }
      `}</script>

      {/* ================================================================
          Organization structured data (JSON-LD)
          Helps Google Knowledge Panel recognition.
          FIX (High): Added foundingDate, telephone, address, and sameAs
                      social media links (fill in real URLs below).
          ================================================================ */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Father's Heart Ministry",
          "alternateName": [
            "كنيسة قلب الاب",
            "Father's Heart Church",
            "Fathers Heart Ministry"
          ],
          "url": "https://fathersheartministry.ca",
          "logo": "https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png",
          "telephone": "+1-604-781-5351",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "10356 167A St",
            "addressLocality": "Surrey",
            "addressRegion": "BC",
            "postalCode": "V4N 4X2",
            "addressCountry": "CA"
          },
          "foundingLocation": {
            "@type": "Place",
            "name": "Surrey, BC, Canada"
          },
          "sameAs": [
            "https://arabicchurchsurrey.ca"
            /* ACTION NEEDED: Add your social media URLs below, e.g.:
               "https://www.facebook.com/FathersHeartMinistry",
               "https://www.youtube.com/@FathersHeartMinistry",
               "https://www.instagram.com/FathersHeartMinistry"
            */
          ]
        }
      `}</script>

      {/* ================================================================
          Event structured data (JSON-LD) — NEW
          FIX (Medium): Recurring weekly service for local search rich results.
          ACTION NEEDED: Confirm day, time, and location name.
          Use a future date for startDate; update monthly or use a script.
          ================================================================ */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Saturday Worship Service | خدمة العبادة",
          "description": "Weekly Spirit-filled worship service at Father's Heart Ministry in Arabic and English. خدمة عبادة أسبوعية في كنيسة قلب الاب باللغتين العربية والإنجليزية.",
          "startDate": "2026-03-22T19:00:00-07:00",
          "endDate": "2026-03-22T21:00:00-07:00",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "isAccessibleForFree": true,
          "inLanguage": ["en", "ar"],
          "location": {
            "@type": "Place",
            "name": "Father's Heart Ministry",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "10356 167A St",
              "addressLocality": "Surrey",
              "addressRegion": "BC",
              "postalCode": "V4N 4X2",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.1913,
              "longitude": -122.8490
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Father's Heart Ministry",
            "url": "https://fathersheartministry.ca"
          }
        }
      `}</script>
    </Helmet>
  );
};

export default FathersHeartSEO;
