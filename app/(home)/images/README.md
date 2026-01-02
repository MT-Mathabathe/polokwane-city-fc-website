# Home Page Images

Add your home page specific images here.

## Recommended Images

- **Hero Background**: `hero-bg.jpg` (1920x1080px or larger)
  - Main background image for the hero section
  
- **Club Logo**: `club-logo.png` (Transparent PNG, 512x512px)
  - Official club logo for the hero section
  
- **Player Images**: `player-*.jpg` (400x600px)
  - Images for the player spotlight section
  
- **Sponsor Logos**: `sponsor-*.png` (150x60px)
  - Partner and sponsor logos

## Usage in Code

To use images from this folder in your page:

```tsx
import Image from 'next/image';
import heroImage from './images/hero-bg.jpg';

<Image src={heroImage} alt="Description" />
```

Or reference directly:
```tsx
<Image src="/app/(home)/images/hero-bg.jpg" alt="Description" width={1920} height={1080} />
```
