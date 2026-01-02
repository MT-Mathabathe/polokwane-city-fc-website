# Fixtures & Results Page Images

Add your fixtures page specific images here.

## Recommended Images

- **Fixtures Hero Background**: `fixtures-hero.jpg` (1920x1080px)
  - Background image for the fixtures page header
  
- **Team Logos**: `logos/team-name.png` (100x100px)
  - Opponent team logos for match cards
  - Format: `logos/team-name.png`
  
- **Stadium Images**: `stadiums/stadium-name.jpg` (800x600px)
  - Images of different stadiums (optional)

## Organization

```
fixtures/images/
├── fixtures-hero.jpg
├── logos/
│   ├── mamelodi-sundowns.png
│   ├── orlando-pirates.png
│   └── ...
└── stadiums/
    ├── peter-mokaba-stadium.jpg
    └── ...
```

## Usage in Code

```tsx
import Image from 'next/image';
import opponentLogo from './images/logos/team-name.png';

<Image src={opponentLogo} alt="Team Name" width={100} height={100} />
```
