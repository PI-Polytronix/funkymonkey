# Polytronix Corporate Website

## Overview
This project is a static HTML website for Polytronix, Inc., a company specializing in rugged displays and integrated electronics for aerospace, defense, and industrial systems. The website provides comprehensive information about the company's industries, capabilities, quality certifications, and contact details. Its main purpose is to serve as a robust online presence, showcasing Polytronix's expertise and product offerings to potential clients in specialized markets. The project is fully functional and configured for static site deployment.

## User Preferences
- Keep the existing HTML structure and CSS design system
- Maintain static site approach (no build tools)
- Preserve all existing page content and navigation
- Hero sections keep blue gradient, images appear on right side
- Section backgrounds use 70% transparency overlay

## System Architecture
The website is built using static HTML5 and CSS3, following a mobile-first responsive design approach. It utilizes a custom CSS design system (v2.0) defined with CSS variables for a consistent look and feel, incorporating Polytronix Blue, Electric Blue, and Electric Amber in its color palette, and Arial/Helvetica for typography.

**Key Features:**
- **Navigation:** Main navigation includes Home, Industries, Capabilities, Quality, About (with Acquisitions dropdown), Careers, and Request Quote. About has a hover dropdown submenu containing Acquisitions.
- **Content Structure:** Industry and capability sub-pages follow a consistent layout:
    1.  **Hero Section:** Features a banner image, title, use cases, CTA button, and an "At a Glance" table.
    2.  **Overview Section:** A descriptive paragraph immediately following the hero.
    3.  **Content Sections:** Detailed information on relevant capabilities, technical specifications, and certifications.
    4.  **CTA Band:** Call-to-action with contact links.
- **Image Handling:**
    -   **Hero Banners:** Images appear on the right side of hero sections (55% width) with a vertical bar overlay blending into a solid blue background.
    -   **Placeholder Images:** A system for displaying product/feature images in hero-right content areas, with a fallback "Image Coming Soon" display. Images are 4:3 aspect ratio.
    -   **Section Backgrounds:** Images automatically receive a 70% white transparency overlay.
- **URL Structure:** Nested URL structure implemented for industries (e.g., `/industries/aerospace-defense.html`, `/industries/aerospace-defense/commercial-aviation.html`) and capabilities (e.g., `/capabilities/displays.html`).
- **Development Server:** A Python 3.11 HTTP server is used for local development, serving static files on port 5000 with no-cache headers for immediate reflection of changes.
- **Redirects:** The `_redirects` file, in Netlify format, manages URL rewrites for legacy support, trailing slash normalization, and structural changes.

## SEO & Security Files
- **_redirects** - URL rewrites and 404 fallback (Netlify/Cloudflare format)
- **_headers** - Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, etc.)
- **sitemap.xml** - Basic sitemap structure (ADD YOUR PAGES - marked with comments)
- **robots.txt** - Crawler behavior rules with sitemap reference
- **404.html** - Custom 404 error page

## Performance Optimizations
- Preload hints for critical CSS and images in index.html
- Footer logo images use loading="lazy"
- Cache headers configured in _headers file

## External Dependencies
- **Netlify/Cloudflare:** The `_redirects` and `_headers` files are formatted for Netlify/Cloudflare deployment.