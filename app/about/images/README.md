# About/Club Page Images

Add your about page specific images here.

## Recommended Images

- **About Hero Background**: `about-hero.jpg` (1920x1080px)
  - Background image for the about page header
  
- **Club History Images**: `history/*.jpg` (800x600px)
  - Historical photos of the club
  
- **Stadium Images**: `stadium/*.jpg` (1200x800px)
  - Photos of Peter Mokaba Stadium
  - Interior, exterior, facilities
  
- **Trophy Images**: `trophies/*.jpg` (400x400px)
  - Images of club achievements and trophies

## Organization

```
about/images/
├── about-hero.jpg
├── history/
│   ├── club-founding.jpg
│   └── promotion-2018.jpg
├── stadium/
│   ├── exterior.jpg
│   ├── interior.jpg
│   └── facilities.jpg
└── trophies/
    ├── community-shield-2023.jpg
    └── ...
```

## Usage in Code

```tsx
import Image from 'next/image';
import stadiumImage from './images/stadium/exterior.jpg';

<Image src={stadiumImage} alt="Peter Mokaba Stadium" width={1200} height={800} />
```
