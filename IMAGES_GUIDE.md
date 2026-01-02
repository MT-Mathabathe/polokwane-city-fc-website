# Image Management Guide

This guide explains how to manage page-specific images in the Polokwane City FC website.

## Directory Structure

Each page now has its own `images` folder for page-specific images:

```
app/
├── (home)/
│   ├── page.tsx          # Home page component
│   └── images/           # Home page images
│       └── README.md     # Image guidelines
├── team/
│   ├── page.tsx          # Team page component
│   └── images/           # Team page images
│       ├── players/      # Player photos
│       ├── staff/        # Coaching staff photos
│       └── README.md     # Image guidelines
├── fixtures/
│   ├── page.tsx          # Fixtures page component
│   └── images/           # Fixtures page images
│       ├── logos/        # Opponent team logos
│       ├── stadiums/     # Stadium images
│       └── README.md     # Image guidelines
├── news/
│   ├── page.tsx          # News page component
│   └── images/           # News page images
│       ├── featured/     # Featured article images
│       ├── thumbnails/   # Article thumbnails
│       └── README.md     # Image guidelines
├── about/
│   ├── page.tsx          # About page component
│   └── images/           # About page images
│       ├── history/      # Historical photos
│       ├── stadium/      # Stadium photos
│       ├── trophies/     # Trophy images
│       └── README.md     # Image guidelines
└── tickets/
    ├── page.tsx          # Tickets page component
    └── images/           # Tickets page images
        ├── categories/   # Ticket category icons
        ├── payment/      # Payment method icons
        └── README.md     # Image guidelines
```

## Adding Images

### Method 1: Import Images Directly (Recommended)

1. Add your image to the appropriate page's `images` folder
2. Import it in your page component:

```tsx
import Image from 'next/image';
import heroImage from './images/hero-bg.jpg';

export default function Page() {
  return (
    <Image 
      src={heroImage} 
      alt="Hero Background" 
      priority
    />
  );
}
```

### Method 2: Reference Public Path

1. Add your image to the appropriate page's `images` folder
2. Reference it using the public path:

```tsx
<Image 
  src="/app/(home)/images/hero-bg.jpg" 
  alt="Hero Background"
  width={1920}
  height={1080}
/>
```

### Method 3: Use Public Folder (Global Images)

For images used across multiple pages:

1. Add images to `/public/images/`
2. Reference them:

```tsx
<Image 
  src="/images/club-logo.png" 
  alt="Club Logo"
  width={512}
  height={512}
/>
```

## Image Guidelines

### File Naming
- Use lowercase with hyphens: `player-name.jpg`
- Be descriptive: `hero-background.jpg` not `img1.jpg`
- Use appropriate extensions: `.jpg` for photos, `.png` for logos/transparency

### Image Sizes

| Purpose | Recommended Size | Format |
|---------|-----------------|---------|
| Hero Backgrounds | 1920x1080px | JPG |
| Player Photos | 400x600px | JPG |
| Logos | 512x512px | PNG |
| Thumbnails | 800x600px | JPG |
| Icons | 64x64px | PNG |

### Optimization
- Compress images before uploading
- Use JPG for photographs
- Use PNG for logos and graphics with transparency
- Use WebP for modern browsers (Next.js handles conversion)

## Editing Pages

Each page component is located in its own folder:

- **Home**: `/app/(home)/page.tsx`
- **Team**: `/app/team/page.tsx`
- **Fixtures**: `/app/fixtures/page.tsx`
- **News**: `/app/news/page.tsx`
- **About**: `/app/about/page.tsx`
- **Tickets**: `/app/tickets/page.tsx`

The `(home)` folder uses Next.js route groups - the parentheses mean it doesn't affect the URL structure (still accessible at `/`).

## Example: Updating Team Page Images

1. Add player photos to `/app/team/images/players/`
2. Edit `/app/team/page.tsx`:

```tsx
import Image from 'next/image';
import thaboImage from './images/players/thabo-molefe.jpg';
import kermitImage from './images/players/kermit-erasmus.jpg';

export default function TeamPage() {
  return (
    <div>
      <Image src={thaboImage} alt="Thabo Molefe" width={400} height={600} />
      <Image src={kermitImage} alt="Kermit Erasmus" width={400} height={600} />
    </div>
  );
}
```

## Benefits of This Structure

✅ **Easy to find**: All images for a page are in that page's folder
✅ **Easy to edit**: Each page has its own component file
✅ **Well organized**: Subdirectories for different image types
✅ **Self-documenting**: README files explain what goes where
✅ **Scalable**: Easy to add more images or pages

## Need Help?

Check the README.md file in each page's `images` folder for specific guidelines and examples for that page.
