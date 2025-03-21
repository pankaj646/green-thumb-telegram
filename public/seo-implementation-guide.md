
# SEO Implementation Guide

This document provides guidance on implementing and maintaining the SEO elements in your website.

## XML Sitemap

### What is an XML Sitemap?
An XML sitemap helps search engines discover and index your website's pages more efficiently. It's a file that lists all important pages on your site along with metadata about each URL.

### Implementation
1. The sitemap is located at: `/public/sitemap.xml`
2. Update the `<lastmod>` dates whenever you make significant changes to pages
3. Adjust the `<priority>` and `<changefreq>` values as needed

### Submitting to Search Engines

#### Google Search Console
1. Create/sign in to your [Google Search Console](https://search.google.com/search-console) account
2. Add your website as a property if not already added
3. Navigate to "Sitemaps" in the left menu
4. Enter "sitemap.xml" in the submission field and click "Submit"
5. Verify that the sitemap is accepted and properly processed

#### Bing Webmaster Tools
1. Create/sign in to your [Bing Webmaster Tools](https://www.bing.com/webmasters) account
2. Add your website if not already added
3. Go to "Sitemaps" in the left navigation
4. Add your sitemap URL (https://yourdomain.com/sitemap.xml) and click "Submit"

## Robots.txt

### What is Robots.txt?
Robots.txt is a text file that tells search engine crawlers which pages or sections of your website they can or cannot access.

### Implementation
1. The robots.txt file is located at: `/public/robots.txt`
2. Update the file as needed when you add new sections that should be blocked from indexing
3. Always keep the Sitemap URL updated in the robots.txt file

### Testing
1. Test your robots.txt using Google's [Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)
2. Check for syntax errors or unintended blocking of important pages

## Canonical Tags

### What are Canonical Tags?
Canonical tags help prevent duplicate content issues by specifying the "preferred" version of a webpage among similar or duplicate pages.

### Implementation
1. A `CanonicalTag` component has been created at: `src/components/seo/CanonicalTag.tsx`
2. This component is included in the `SEOHead` component
3. The canonical URL is automatically set based on the current URL path

### Best Practices
1. Use self-referential canonical tags on unique pages
2. For similar pages (like paginated content or filtered views), point to the main/parent page
3. Make sure the canonical URL uses the preferred domain (www vs non-www)
4. Use absolute URLs, not relative URLs
5. Only use one canonical tag per page

### Usage in React Components
```jsx
// For self-referential canonical (uses current URL)
<SEOHead title="Page Title" description="Page description" />

// For custom canonical URL
<SEOHead 
  title="Page Title" 
  description="Page description" 
  canonicalUrl="https://yourdomain.com/preferred-url" 
/>
```

## Maintenance

### Regular Updates
1. Update the XML sitemap when:
   - Adding or removing pages
   - Making significant changes to existing pages
   - Changing URL structures

2. Update robots.txt when:
   - Adding new sections that should be blocked
   - Opening previously blocked sections for crawling

3. Review canonical tags when:
   - Creating new pages with similar content
   - Making changes to URL structure
   - Implementing pagination or filtering

### Monitoring
1. Check Search Console/Webmaster Tools regularly for:
   - Indexing issues
   - Crawl errors
   - Sitemap status

2. Set up alerts for critical SEO issues

## Additional SEO Tips

1. Use descriptive, keyword-rich URLs
2. Optimize page titles and meta descriptions
3. Use proper heading structure (H1, H2, H3)
4. Optimize images with alt text
5. Improve page load speed
6. Build high-quality backlinks
7. Create valuable, unique content
8. Make your site mobile-friendly
