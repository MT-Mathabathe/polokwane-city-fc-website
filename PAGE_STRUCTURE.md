# Page Structure Overview

## Quick Reference: Where to Find Everything

### 🏠 Home Page
- **Component**: `/app/(home)/page.tsx`
- **Images**: `/app/(home)/images/`
- **URL**: `https://yoursite.com/`

### 👥 Team Page
- **Component**: `/app/team/page.tsx`
- **Images**: `/app/team/images/`
  - Player photos: `/app/team/images/players/`
  - Staff photos: `/app/team/images/staff/`
- **URL**: `https://yoursite.com/team`

### 📅 Fixtures & Results Page
- **Component**: `/app/fixtures/page.tsx`
- **Images**: `/app/fixtures/images/`
  - Team logos: `/app/fixtures/images/logos/`
  - Stadium images: `/app/fixtures/images/stadiums/`
- **URL**: `https://yoursite.com/fixtures`

### 📰 News Page
- **Component**: `/app/news/page.tsx`
- **Images**: `/app/news/images/`
  - Featured articles: `/app/news/images/featured/`
  - Thumbnails: `/app/news/images/thumbnails/`
- **URL**: `https://yoursite.com/news`

### ℹ️ About/Club Page
- **Component**: `/app/about/page.tsx`
- **Images**: `/app/about/images/`
  - History photos: `/app/about/images/history/`
  - Stadium photos: `/app/about/images/stadium/`
  - Trophy images: `/app/about/images/trophies/`
- **URL**: `https://yoursite.com/about`

### 🎫 Tickets Page
- **Component**: `/app/tickets/page.tsx`
- **Images**: `/app/tickets/images/`
  - Category icons: `/app/tickets/images/categories/`
  - Payment icons: `/app/tickets/images/payment/`
- **URL**: `https://yoursite.com/tickets`

## How to Edit a Page

1. **Navigate** to the page folder (e.g., `/app/team/`)
2. **Open** `page.tsx` in your editor
3. **Edit** the content, components, or layout
4. **Save** your changes
5. **Add images** to the `images/` folder if needed
6. **Preview** by running `npm run dev`

## How to Add Images

### Step 1: Choose the right location
Find the page you want to add images to and navigate to its `images/` folder.

### Step 2: Add your image file
Place your image in the appropriate subfolder:
- Player photos go in `/app/team/images/players/`
- News thumbnails go in `/app/news/images/thumbnails/`
- etc.

### Step 3: Use the image in your page
Edit the `page.tsx` file and import your image:

```tsx
import playerPhoto from './images/players/john-doe.jpg';
import Image from 'next/image';

// Then use it:
<Image src={playerPhoto} alt="John Doe" width={400} height={600} />
```

## Benefits of This Structure

✅ **Everything is grouped together** - Page code and images are in the same folder
✅ **Easy to navigate** - No more searching through complex folder structures
✅ **Self-contained** - Each page is independent and portable
✅ **Clear organization** - Subdirectories keep different image types separated
✅ **Quick editing** - Find what you need in seconds

## Need More Help?

- See [IMAGES_GUIDE.md](./IMAGES_GUIDE.md) for detailed image management
- See [README.md](./README.md) for general project information
- Check the `README.md` in each page's `images/` folder for specific guidelines
