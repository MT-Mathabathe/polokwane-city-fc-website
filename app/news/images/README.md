# News Page Images

Add your news page specific images here.

## Recommended Images

- **News Hero Background**: `news-hero.jpg` (1920x1080px)
  - Background image for the news page header
  
- **Featured Article Image**: `featured/article-slug.jpg` (1200x800px)
  - Large image for the featured article
  
- **Article Thumbnails**: `thumbnails/article-slug.jpg` (800x600px)
  - Thumbnail images for regular news articles
  - Format: `thumbnails/article-slug.jpg`

## Organization

```
news/images/
├── news-hero.jpg
├── featured/
│   └── title-challenge.jpg
└── thumbnails/
    ├── match-report-golden-arrows.jpg
    ├── new-signing-eva-nga.jpg
    └── ...
```

## Usage in Code

```tsx
import Image from 'next/image';
import articleImage from './images/thumbnails/article-slug.jpg';

<Image src={articleImage} alt="Article Title" width={800} height={600} />
```
