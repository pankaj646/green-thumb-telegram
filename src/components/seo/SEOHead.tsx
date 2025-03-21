
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
  title = 'Green Thumb | Your Plant Shop',
  description = 'Find the perfect plants, seeds, pots and accessories for your home or garden.',
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
      'og:url': canonicalUrl || `https://yourdomain.com${location.pathname}`,
      'og:image': `https://yourdomain.com${ogImage}`,
      'og:type': 'website'
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
    
    return () => {
      // Cleanup is handled by the browser when navigating between pages
    };
  }, [title, description, canonicalUrl, ogImage, location.pathname]);
  
  return <CanonicalTag url={canonicalUrl} />;
};

export default SEOHead;
