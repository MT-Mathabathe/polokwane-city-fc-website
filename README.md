# Polokwane City FC Website

![Polokwane City FC](https://via.placeholder.com/1200x400/FF6B00/FFFFFF?text=Polokwane+City+FC+-+Rise+of+the+City)

A modern, responsive football club website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean, professional design inspired by top football clubs like FC Barcelona and Cape Town City FC.

## 🎨 Design Features

- **Brand Colors**: Orange (#FF6B00), Black (#000000), White (#FFFFFF)
- Modern, clean aesthetic with bold typography
- High-quality imagery with overlays
- Smooth animations and transitions
- Fully responsive design for all devices

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Custom UI components
- **Carousel**: Swiper

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MT-Mathabathe/polokwane-city-fc-website.git
   cd polokwane-city-fc-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
app/
├── (home)/              # Home page (accessible at /)
│   ├── page.tsx        # Home page component
│   └── images/         # Home page images
├── team/               # Team page
│   ├── page.tsx        # Team page component
│   └── images/         # Team page images
│       ├── players/    # Player photos
│       └── staff/      # Staff photos
├── fixtures/           # Fixtures & Results page
│   ├── page.tsx        # Fixtures page component
│   └── images/         # Fixtures page images
│       ├── logos/      # Team logos
│       └── stadiums/   # Stadium images
├── news/               # News page
│   ├── page.tsx        # News page component
│   └── images/         # News page images
│       ├── featured/   # Featured articles
│       └── thumbnails/ # Article thumbnails
├── about/              # About/Club page
│   ├── page.tsx        # About page component
│   └── images/         # About page images
│       ├── history/    # Historical photos
│       ├── stadium/    # Stadium photos
│       └── trophies/   # Trophy images
└── tickets/            # Tickets page
    ├── page.tsx        # Tickets page component
    └── images/         # Tickets page images
        ├── categories/ # Ticket icons
        └── payment/    # Payment icons
```

## 🖼️ Managing Images

Each page has its own `images` folder for easy organization. See [IMAGES_GUIDE.md](./IMAGES_GUIDE.md) for detailed instructions on:
- Adding page-specific images
- Image size recommendations
- Naming conventions
- Usage examples

**Quick Start:**
1. Navigate to the page folder (e.g., `/app/team/`)
2. Add your images to the `images` subfolder
3. Import and use them in `page.tsx`

Example:
```tsx
import playerImage from './images/players/player-name.jpg';
```

## ✏️ Editing Pages

All page components are easy to find and edit:

- **Home**: `/app/(home)/page.tsx`
- **Team**: `/app/team/page.tsx`
- **Fixtures**: `/app/fixtures/page.tsx`
- **News**: `/app/news/page.tsx`
- **About**: `/app/about/page.tsx`
- **Tickets**: `/app/tickets/page.tsx`

Each page has its own folder with its images, making it simple to manage content.

## 🌐 Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

---

**Rise of the City!** 🟠⚫⚪
