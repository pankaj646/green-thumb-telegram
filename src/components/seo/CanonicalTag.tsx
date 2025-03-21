
import React from 'react';
import { useLocation } from 'react-router-dom';

interface CanonicalTagProps {
  // Optional override URL, if not provided, current URL will be used
  url?: string;
}

const CanonicalTag = ({ url }: CanonicalTagProps) => {
  const location = useLocation();
  
  // Use provided URL or construct from current location
  const canonicalUrl = url || `https://yourdomain.com${location.pathname}`;
  
  // This component doesn't render anything visible, only adds to the document head
  React.useEffect(() => {
    // Remove any existing canonical tags to prevent duplicates
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Create and add the canonical tag
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
    
    // Cleanup function to remove the tag when component unmounts
    return () => {
      const canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.remove();
      }
    };
  }, [canonicalUrl]);
  
  // This component doesn't render anything to the DOM
  return null;
};

export default CanonicalTag;
