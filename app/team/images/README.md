# Team Page Images

Add your team page specific images here.

## Recommended Images

- **Team Hero Background**: `team-hero.jpg` (1920x1080px)
  - Background image for the team page header
  
- **Player Photos**: `players/player-name.jpg` (400x600px)
  - Individual player photos for the player cards
  - Format: `players/player-name.jpg`
  
- **Coaching Staff Photos**: `staff/coach-name.jpg` (400x600px)
  - Photos of coaching staff members
  - Format: `staff/coach-name.jpg`

## Organization

```
team/images/
├── team-hero.jpg
├── players/
│   ├── thabo-molefe.jpg
│   ├── kermit-erasmus.jpg
│   └── ...
└── staff/
    ├── bernard-molekwa.jpg
    └── ...
```

## Usage in Code

```tsx
import Image from 'next/image';
import playerImage from './images/players/player-name.jpg';

<Image src={playerImage} alt="Player Name" width={400} height={600} />
```
