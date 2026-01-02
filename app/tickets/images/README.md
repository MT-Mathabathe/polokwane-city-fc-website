# Tickets Page Images

Add your tickets page specific images here.

## Recommended Images

- **Tickets Hero Background**: `tickets-hero.jpg` (1920x1080px)
  - Background image for the tickets page header
  
- **Seating Chart**: `seating-chart.png` (1200x800px)
  - Stadium seating chart diagram (optional)
  
- **Ticket Category Icons**: `categories/*.png` (64x64px)
  - Icons for VIP, Premium, Standard, Family sections
  
- **Payment Icons**: `payment/*.png` (48x48px)
  - Icons for different payment methods

## Organization

```
tickets/images/
├── tickets-hero.jpg
├── seating-chart.png
├── categories/
│   ├── vip.png
│   ├── premium.png
│   ├── standard.png
│   └── family.png
└── payment/
    ├── visa.png
    ├── mastercard.png
    └── ...
```

## Usage in Code

```tsx
import Image from 'next/image';
import seatingChart from './images/seating-chart.png';

<Image src={seatingChart} alt="Stadium Seating Chart" width={1200} height={800} />
```
