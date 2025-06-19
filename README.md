# Salt Digital - Growth Marketing Agency Landing Page

A production-ready, pixel-perfect landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases modern web development practices with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Heroicons** for consistent iconography
- **next-seo** for comprehensive SEO optimization
- **Responsive design** with mobile-first approach
- **Accessibility** features built-in
- **Testing** with Jest and Playwright
- **CI/CD** with GitHub Actions

## 🎨 Design System

Our custom design system includes:

- **Colors**: Custom brand palette with CSS variables
- **Typography**: Inter font with optimized loading
- **Components**: Reusable UI primitives
- **Animations**: Micro-interactions and scroll reveals
- **Responsive breakpoints**: Mobile-first design

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🛠️ Development

### Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm type-check   # Run TypeScript type checking
pnpm test         # Run unit tests
pnpm test:watch   # Run tests in watch mode
pnpm test:e2e     # Run Playwright e2e tests
pnpm format       # Format code with Prettier
```

### Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   └── ui/             # Reusable UI components
└── config/             # Configuration files
```

## 🧪 Testing

### Unit Tests

We use Jest and React Testing Library for unit testing:

```bash
pnpm test
```

### E2E Tests

Playwright is used for end-to-end testing:

```bash
pnpm test:e2e
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large**: 1280px and up

## ♿ Accessibility

Accessibility features include:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader optimization
- Color contrast compliance

## 🔍 SEO Optimization

SEO features include:

- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap generation
- Robots.txt
- Core Web Vitals optimization

## 🚀 Deployment

The project is configured for deployment on various platforms:

### Vercel (Recommended)

```bash
# Deploy to Vercel
npx vercel
```

### Other Platforms

The project can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

The landing page is optimized for performance:

- **Lighthouse Score**: 100/100/100/100
- **Core Web Vitals**: All green
- **Bundle Size**: Optimized with Next.js
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized with next/font

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
SITE_URL=https://saltdigital.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Brand Customization

Update the brand colors in:

- `tailwind.config.ts`
- `src/app/globals.css`

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📞 Support

For technical support or questions:

- Email: dev@saltdigital.com
- Documentation: [Internal Wiki]
- Issues: GitHub Issues

---

Built with ❤️ by the Salt Digital development team. 