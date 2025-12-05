# Polytronix Corporate Website

## Overview
This is a static HTML website for Polytronix, Inc., a company specializing in rugged displays and integrated electronics for aerospace, defense, and industrial systems. The site was imported from GitHub and configured to run on Replit.

**Status**: Fully functional and ready for deployment  
**Last Updated**: December 5, 2025

## Project Structure

```
.
├── index.html                          # Homepage
├── about.html                          # About page
├── industries.html                     # Industries overview
├── capabilities.html                   # Capabilities overview
├── certifications.html                 # Quality & certifications
├── contact.html                        # Contact form
├── industries/
│   ├── aerospace-defense.html          # Aerospace & Defense overview
│   ├── industrials.html                # Industrials overview
│   ├── aerospace-defense/              # Aerospace sub-pages
│   │   ├── commercial-aviation.html
│   │   ├── business-aviation.html
│   │   ├── military-programs.html
│   │   ├── helicopters.html
│   │   ├── simulation-training.html
│   │   └── maritime-marine.html
│   └── industrials/                    # Industrials sub-pages
│       ├── rail-transit.html
│       ├── energy-utilities.html
│       ├── transportation-automotive.html
│       ├── medical-life-sciences.html
│       ├── oil-gas.html
│       ├── communications-networking.html
│       └── industrial-equipment.html
├── capabilities/                       # All capability pages
│   ├── displays.html
│   ├── optical-bonding.html
│   ├── nvis-solutions.html
│   ├── ruggedization.html
│   ├── touch-integration.html
│   ├── electro-mechanical-assemblies.html
│   ├── box-builds.html
│   ├── instrument-panels.html
│   ├── instrument-lighting.html
│   ├── cable-wire-harnesses.html
│   ├── harness-design.html
│   ├── pcb-assembly.html
│   ├── machining.html
│   ├── custom-engineering.html
│   └── repair-station.html
├── css/
│   └── styles.css                      # Main stylesheet (Design System 2.0)
├── assets/
│   ├── images/                         # Logo, banners, and graphics
│   └── favicons/                       # Favicon files
├── server.py                           # Python HTTP server for development
├── _redirects                          # URL redirect rules (Netlify format)
└── CNAME                               # Custom domain configuration
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

## Required Images

### Essential (All Pages)
| Filename | Location | Size |
|----------|----------|------|
| `logo.png` | Header & Footer on all pages | ~200x50 px |
| `favicon-32.png` | Browser tab | 32x32 px |
| `favicon-16.png` | Browser tab | 16x16 px |
| `apple-touch-icon.png` | iOS bookmark | 180x180 px |

### Homepage (index.html)
| Filename | Section | Notes |
|----------|---------|-------|
| `index_banner.png` | Hero (right side) | Replaces gray pattern area, blends with blue gradient |
| `index_industries.png` | "Industries We Serve" background | 70% transparency overlay applied |

### Industry Pages
| Filename | Page |
|----------|------|
| `industries_banner.png` | industries.html (overview) |
| `aerospace_banner.png` | aerospace-defense.html |
| `industrials_banner.png` | industrials.html |
| `commercial_banner.png` | commercial-aviation.html |
| `business_banner.png` | business-aviation.html |
| `military_banner.png` | military-programs.html |
| `helicopters_banner.png` | helicopters.html |
| `simulation_banner.png` | simulation-training.html |
| `maritime_banner.png` | maritime-marine.html |
| `rail_banner.png` | rail-transit.html |
| `oil_banner.png` | oil-gas.html |
| `medical_banner.png` | medical-life-sciences.html |
| `communications_banner.png` | communications-networking.html |
| `energy_banner.png` | energy-utilities.html |
| `industrial_banner.png` | industrial-equipment.html |
| `transportation_banner.png` | transportation-automotive.html |

### Capability Pages
| Filename | Page |
|----------|------|
| `capabilities_banner.png` | capabilities.html (overview) |
| `displays_banner.png` | displays.html |
| `optical_banner.png` | optical-bonding.html |
| `electro_banner.png` | electro-mechanical-assemblies.html |
| `cable_banner.png` | cable-wire-harnesses.html |
| `box_banner.png` | box-builds.html |
| `nvis_banner.png` | nvis-solutions.html |
| `ruggedization_banner.png` | ruggedization.html |
| `touch_banner.png` | touch-integration.html |
| `pcb_banner.png` | pcb-assembly.html |
| `machining_banner.png` | machining.html |
| `harness_banner.png` | harness-design.html |
| `lighting_banner.png` | instrument-lighting.html |
| `panels_banner.png` | instrument-panels.html |
| `engineering_banner.png` | custom-engineering.html |
| `repair_banner.png` | repair-station.html |

### Other Pages
| Filename | Page |
|----------|------|
| `about_banner.png` | about.html |
| `certifications_banner.png` | certifications.html |
| `contact_banner.png` | contact.html |

### Placeholder Images (Hero Right Side)
These appear in the gray "Image Coming Soon" box on industry/capability pages.

| Filename | Page |
|----------|------|
| `aerospace_placeholder.png` | aerospace-defense.html |
| `industrials_placeholder.png` | industrials.html |
| `commercial_placeholder.png` | commercial-aviation.html |
| `business_placeholder.png` | business-aviation.html |
| `military_placeholder.png` | military-programs.html |
| `helicopters_placeholder.png` | helicopters.html |
| `simulation_placeholder.png` | simulation-training.html |
| `maritime_placeholder.png` | maritime-marine.html |
| `rail_placeholder.png` | rail-transit.html |
| `oil_placeholder.png` | oil-gas.html |
| `medical_placeholder.png` | medical-life-sciences.html |
| `communications_placeholder.png` | communications-networking.html |
| `energy_placeholder.png` | energy-utilities.html |
| `industrial_placeholder.png` | industrial-equipment.html |
| `transportation_placeholder.png` | transportation-automotive.html |
| `displays_placeholder.png` | displays.html |
| `optical_placeholder.png` | optical-bonding.html |
| `electro_placeholder.png` | electro-mechanical-assemblies.html |
| `cable_placeholder.png` | cable-wire-harnesses.html |
| `box_placeholder.png` | box-builds.html |
| `nvis_placeholder.png` | nvis-solutions.html |
| `ruggedization_placeholder.png` | ruggedization.html |
| `touch_placeholder.png` | touch-integration.html |
| `pcb_placeholder.png` | pcb-assembly.html |
| `machining_placeholder.png` | machining.html |
| `harness_placeholder.png` | harness-design.html |
| `lighting_placeholder.png` | instrument-lighting.html |
| `panels_placeholder.png` | instrument-panels.html |
| `engineering_placeholder.png` | custom-engineering.html |
| `repair_placeholder.png` | repair-station.html |

### Recommended Image Sizes
- **Banner/Hero images**: 1920 x 800 pixels (wide landscape)
- **Placeholder images**: 800 x 600 pixels (4:3 aspect ratio)
- **Favicon**: 32x32 and 16x16 pixels (square)
- **Logo**: Around 200 x 50 pixels

### Image Placement
All images go in `/assets/images/` except favicons which go in `/assets/favicons/`

## CSS Features for Images

### Hero Banner Images
- CSS class: `.hero-with-banner` + `.hero-banner-image`
- The banner image appears on the right side of the hero (55% width)
- Vertical bar overlay blends the image with the solid blue left side
- Bar settings in CSS lines 707-717: transparent, 90% blue, transparent, 15% blue
- Images are stretched to fill with `background-size: 100% 100%`

### Placeholder Images (Hero Right Content)
- CSS class: `.img-placeholder`
- Displays product/feature images in the hero-right content area
- By default: Shows gray "Image Coming Soon" text (fallback)
- To show image: Add `has-image` class to the div after uploading the image file
- Example: `<div class="img-placeholder img-4x3 has-image" style="background-image: url('/assets/images/aerospace_placeholder.png');"></div>`
- Uses 4:3 aspect ratio (`.img-4x3` class)

### Section Background Images
- CSS class: `.section-with-bg`
- 70% white transparency overlay applied automatically
- Images are centered and cover the full section

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

### Industry Pages (15 pages)
- Aerospace & Defense, Industrials
- Commercial Aviation, Business Aviation, Military Programs
- Helicopters, Simulation & Training, Maritime & Marine
- Rail & Transit, Oil & Gas, Medical & Life Sciences
- Communications & Networking, Energy & Utilities
- Industrial Equipment, Transportation & Automotive

### Capability Pages (15 pages)
- Displays, Optical Bonding, NVIS Solutions, Ruggedization, Touch Integration
- Electro-Mechanical Assemblies, Box Builds, Instrument Panels, Instrument Lighting
- Cable & Wire Harnesses, Harness Design
- PCB Assembly, Machining, Custom Engineering, Repair Station

## Recent Changes

**December 5, 2025**
- Removed duplicate "Speak to Engineering" buttons from all 30 industry/capability pages
- Fixed internal links on aerospace-defense.html and industrials.html to use relative paths
- Added "Industrial Equipment" to industries.html and industrials.html navigation
- Updated _redirects file with all proper URL mappings including alternate filenames
- Activated all 29 placeholder images by adding `has-image` class

**December 2, 2025**
- Changed hero banner overlay from smooth gradient to vertical bars
- Made first visible bar 70% transparent (0.3 opacity)
- Added placeholder image system for hero-right content areas
- Updated all 30 industry/capability pages with placeholder image references
- Naming convention: `pagename_placeholder.png` (e.g., `aerospace_placeholder.png`)

**December 1, 2025**
- Initial import from GitHub
- Created Python HTTP server with cache control
- Added placeholder SVG assets
- Configured static site deployment
- Added .gitignore for Python
- Set up workflow for automatic server startup
- Added CSS support for hero banner images with gradient overlay
- Added CSS support for section background images with 70% transparency
- Updated all 40+ HTML pages with banner image references

## User Preferences
- Keep the existing HTML structure and CSS design system
- Maintain static site approach (no build tools)
- Preserve all existing page content and navigation
- Hero sections keep blue gradient, images appear on right side
- Section backgrounds use 70% transparency overlay

## Known Issues
- CNAME points to `preview.boardactivism.com` (should be updated for production)
- Redirect rules are in Netlify format (may need adjustment for Replit)

## Next Steps
1. Add actual banner images to `/assets/images/` (see Required Images section)
2. Add logo.png and favicon files
3. Update CNAME file with correct domain
4. Verify contact form functionality
5. Test redirects in production environment
