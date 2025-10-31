# Sinterklaas Kleurboeken Landing Page

## Project Overview

A static, responsive landing page for promoting Sinterklaas coloring books sold on Amazon. Built with pure HTML, CSS, and JavaScript - no frameworks, no build tools, ready for GitHub Pages deployment.

**Created:** October 31, 2025  
**Status:** Complete and functional

## Purpose

Promote a collection of 5 Sinterklaas coloring books targeting different age groups (from toddlers to 12-year-olds). The page is designed to be festive, family-friendly, and easy to navigate.

## Project Structure

```
├── index.html       # Main HTML structure with semantic markup
├── style.css        # Responsive CSS with Sinterklaas color scheme
├── script.js        # Dynamic book rendering from JavaScript array
├── README.md        # Deployment and usage documentation
└── .gitignore       # Python-related ignores
```

## Key Features

1. **Responsive Navigation**: Sticky navbar with smooth scroll to sections
2. **Hero Section**: Eye-catching banner with CTA button
3. **Dynamic Book Catalog**: 5 books rendered from JavaScript array for easy updates
4. **Responsive Grid**: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
5. **Examples Gallery**: 6 placeholder coloring page samples
6. **Sinterklaas Theme**: Dark red (#8B0000) and gold (#F4C430) color scheme

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6)
- **No Dependencies**: Completely standalone
- **Deployment Ready**: GitHub Pages compatible
- **Dev Server**: Python 3 http.server on port 5000

## Recent Changes

- **Oct 31, 2025**: Initial creation of all project files
- **Oct 31, 2025**: Added responsive grid layout and smooth scrolling navigation
- **Oct 31, 2025**: Implemented dynamic book rendering system
- **Oct 31, 2025**: Created comprehensive README with deployment instructions

## Architecture Decisions

### Dynamic Rendering
Books are stored in a JavaScript array and rendered dynamically. This allows easy updates without touching HTML:
- Add/remove books by editing the array in `script.js`
- Each book object contains: title, targetAge, description, cover, link
- Cards are generated on page load via DOM manipulation

### Mobile-First Design
CSS uses mobile-first approach with progressive enhancement:
- Base styles optimized for mobile (1 column)
- Media queries at 768px (tablets - 2 columns)
- Media queries at 1024px (desktop - 3 columns)

### Portability
- No server-side code
- No external dependencies
- No build process required
- All assets are CDN-hosted placeholders (user will replace)

## User Preferences

None documented yet.

## How to Update Books

Edit the `books` array in `script.js`:

```javascript
const books = [
    {
        title: "Full book title",
        targetAge: "age range",
        description: "Short promotional text",
        cover: "URL to cover image",
        link: "Amazon product URL"
    }
];
```

## Deployment to GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Site will be live at `https://username.github.io/repository-name/`

Detailed instructions are in README.md.

## Notes

- Placeholder images use via.placeholder.com service
- User needs to replace with actual book covers and Amazon links
- All text is in Dutch (Nederlands) as requested
- Color scheme follows traditional Sinterklaas festival colors
