
import React from 'react';
import { useLocation } from 'react-router-dom';
import CanonicalTag from './CanonicalTag';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = 'Das Nursery | Your Plant Shop in Siliguri',
  description = 'Find the perfect plants, seeds, pots and accessories at Das Nursery in Siliguri. Free delivery within Siliguri, bulk orders for Darjeeling, Sikkim, Nepal, Bhutan, and Assam.',
  canonicalUrl,
  ogImage = '/og-image.png'
}: SEOHeadProps) => {
  const location = useLocation();
  
  React.useEffect(() => {
    // Update page title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
    
    // Update OG tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:url': canonicalUrl || `https://dasnursery.com${location.pathname}`,
      'og:image': `https://dasnursery.com${ogImage}`,
      'og:type': 'website',
      'og:site_name': 'Das Nursery Siliguri'
    };
    
    Object.entries(ogTags).forEach(([property, content]) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    });
    
    // Add additional meta tags for enhanced SEO
    
    // Twitter card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': `https://dasnursery.com${ogImage}`
    };
    
    Object.entries(twitterTags).forEach(([name, content]) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    });
    
    // Business information structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "GardenStore",
      "name": "Das Nursery",
      "image": `https://dasnursery.com${ogImage}`,
      "url": `https://dasnursery.com${location.pathname}`,
      "telephone": "+917319322612",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mamu More",
        "addressLocality": "Siliguri",
        "addressRegion": "West Bengal",
        "postalCode": "734001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.7139, // Approximate for Siliguri
        "longitude": 88.4233 // Approximate for Siliguri
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "10:00",
          "closes": "14:00"
        }
      ],
      "priceRange": "₹₹",
      "sameAs": [
        // Add social media links when available
      ],
      "description": description
    };
    
    // Add or update JSON-LD script
    let scriptLD = document.querySelector('script[type="application/ld+json"]');
    if (scriptLD) {
      scriptLD.textContent = JSON.stringify(structuredData);
    } else {
      scriptLD = document.createElement('script');
      scriptLD.setAttribute('type', 'application/ld+json');
      scriptLD.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptLD);
    }
    
    return () => {
      // Cleanup is handled by the browser when navigating between pages
    };
  }, [title, description, canonicalUrl, ogImage, location.pathname]);
  
  return <CanonicalTag url={canonicalUrl} />;
};

export default SEOHead;
