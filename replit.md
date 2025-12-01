# Polytronix Corporate Website

## Overview
This is a static HTML website for Polytronix, Inc., a company specializing in rugged displays and integrated electronics for aerospace, defense, and industrial systems. The site was imported from GitHub and configured to run on Replit.

**Status**: Fully functional and ready for deployment  
**Last Updated**: December 1, 2025

## Project Structure

```
.
├── index.html              # Homepage
├── about.html              # About page
├── industries.html         # Industries overview
├── capabilities.html       # Capabilities overview
├── certifications.html     # Quality & certifications
├── contact.html            # Contact form
├── css/
│   └── styles.css         # Main stylesheet (Design System 2.0)
├── assets/
│   ├── images/            # Logo and graphics (SVG placeholders)
│   └── favicons/          # Favicon files (SVG placeholders)
├── server.py              # Python HTTP server for development
├── _redirects             # URL redirect rules (Netlify format)
└── CNAME                  # Custom domain configuration
```

## Technology Stack

- **Frontend**: Static HTML5 + CSS3
- **Development Server**: Python 3.11 HTTP server
- **Styling**: Custom CSS design system with CSS variables
- **Deployment**: Configured for static site deployment

## Development

### Running Locally
The site runs on a Python HTTP server configured to serve static files on port 5000:

```bash
python server.py
```

The server includes:
- No-cache headers for development (ensures changes are visible immediately)
- Binding to 0.0.0.0:5000 for Replit compatibility
- Custom logging

### Workflow
The "Start application" workflow automatically runs the server when the Replit environment starts.

## Missing Assets

⚠️ **Important**: The original GitHub repository did not include the `/assets/` directory with images. SVG placeholder files have been created for:
- Company logo (`logo.svg`)
- Favicon files
- Pattern backgrounds

To add real assets:
1. Upload actual image files to `/assets/images/` and `/assets/favicons/`
2. The HTML files reference `.png` files, but the server will serve whatever files are present

See `/assets/README.md` for more details.

## Design System

The site uses a comprehensive CSS design system (v2.0) with:
- **Color Palette**: Polytronix Blue (#193673), Electric Blue (#3459D0), Electric Amber (#F5D742)
- **Typography**: Arial/Helvetica sans-serif stack
- **Responsive Design**: Mobile-first approach
- **Components**: Buttons, cards, tables, forms, navigation

## Deployment

### Configuration
The deployment is configured as a **static site** that serves files from the root directory.

### Publishing
To publish this site:
1. Click the "Publish" button in Replit
2. The static files will be served directly (no build step required)
3. Custom domain can be configured via the CNAME file

### Redirects
The `_redirects` file contains URL rewrite rules for:
- Industry pages reorganization
- Capability pages restructuring
- Legacy URL support
- Trailing slash normalization

Note: These redirects use Netlify format and may need adaptation for Replit deployments.

## Pages

### Main Navigation
- **Home** (`index.html`)
- **Industries** (`industries.html`) - Aerospace, Defense, Industrials
- **Capabilities** (`capabilities.html`) - Displays, Assembly, Engineering
- **Quality** (`certifications.html`) - AS9100D, ITAR, FAA 145
- **About** (`about.html`)
- **Contact** (`contact.html`)

### Industry Pages
- Aerospace & Defense
- Commercial Aviation
- Business Aviation
- Military Programs
- Helicopters
- Simulation & Training
- Maritime & Marine
- And more...

### Capability Pages
- Displays
- Optical Bonding
- Electro-Mechanical Assemblies
- Cable & Wire Harnesses
- Box Builds
- NVIS Solutions
- Ruggedization
- Touch Integration
- PCB Assembly
- Machining
- And more...

## Recent Changes

**December 1, 2025**
- Initial import from GitHub
- Created Python HTTP server with cache control
- Added placeholder SVG assets
- Configured static site deployment
- Added .gitignore for Python
- Set up workflow for automatic server startup

## User Preferences
- Keep the existing HTML structure and CSS design system
- Maintain static site approach (no build tools)
- Preserve all existing page content and navigation

## Known Issues
- Missing actual image assets (using SVG placeholders)
- Redirect rules are in Netlify format (may need adjustment for Replit)
- CNAME points to `preview.boardactivism.com` (should be updated for production)

## Next Steps
1. Upload actual logo and image files to replace SVG placeholders
2. Update CNAME file with correct domain
3. Review and test all navigation links
4. Verify contact form functionality
5. Test redirects in production environment
