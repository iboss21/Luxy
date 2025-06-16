# TeeAI - AI-Powered Custom T-Shirt Design Platform

A modern, production-ready SaaS platform for creating custom t-shirts using AI-powered design tools. Built with Next.js, TypeScript, and Tailwind CSS, featuring a stunning landing page inspired by Vercel Ship.

## 🚀 Features

### Core Functionality
- **AI-Powered Design Generation** - Create stunning designs from text prompts
- **Real-time 3D Preview** - See your designs on t-shirt mockups instantly  
- **Upload & Transform** - Upload images and let AI enhance them
- **Smart Typography** - AI-suggested fonts and text layouts
- **Color Magic** - Intelligent color palette suggestions
- **Print-Ready Export** - High-resolution files optimized for printing

### User Experience
- **Modern Landing Page** - Vercel Ship-inspired design with animations
- **Responsive Design** - Perfect on all devices
- **Interactive Gallery** - Browse community designs by category
- **Live Design Editor** - Real-time editing with instant preview
- **Emotional Templates** - Pre-made designs for special occasions

### Business Features
- **Tiered Pricing** - Free, Creator ($19/mo), Business ($49/mo)
- **Print-on-Demand Integration** - Ready for Printful/Printify
- **User Authentication** - Secure login and user management
- **Commercial Licensing** - Full rights for business use
- **Team Collaboration** - Share and collaborate on designs

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **3D Graphics**: React Three Fiber, Three.js
- **Canvas**: Konva.js for design editing
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/teeai-platform.git
cd teeai-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Add your API keys:
```env
# OpenAI for AI design generation
OPENAI_API_KEY=your_openai_key

# Stripe for payments
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Printful for print-on-demand
PRINTFUL_API_KEY=your_printful_key

# Supabase for database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🎨 Design System

### Colors
- **Primary**: Blue to Purple gradient
- **Secondary**: Purple to Pink gradient  
- **Accent**: Yellow to Orange gradient
- **Neutral**: Gray scale with proper contrast

### Typography
- **Headings**: Inter font, bold weights
- **Body**: Inter font, regular weight
- **Spacing**: 8px grid system

### Animations
- **Framer Motion** for smooth transitions
- **Hover effects** on interactive elements
- **Scroll-triggered** animations
- **Loading states** and micro-interactions

## 🏗 Architecture

### Frontend Structure
```
app/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation with sticky behavior
│   ├── Hero.tsx        # Landing page hero section
│   ├── Features.tsx    # Feature showcase
│   ├── Gallery.tsx     # Design gallery with filtering
│   ├── TShirtPreview.tsx # 3D t-shirt preview
│   ├── Testimonials.tsx # Customer testimonials
│   ├── Pricing.tsx     # Pricing tiers
│   └── Footer.tsx      # Footer with links
├── globals.css         # Global styles and animations
├── layout.tsx          # Root layout with metadata
└── page.tsx           # Main landing page

styles/
├── globals.css         # Tailwind imports and custom styles
└── components.css      # Component-specific styles
```

### Key Components

#### Hero Section
- Animated background elements
- Dynamic text rotation
- Call-to-action buttons
- Statistics display

#### Features Section  
- Grid layout with hover effects
- Icon animations
- Progressive disclosure
- Feature comparison

#### Gallery Section
- Category filtering
- Masonry grid layout
- Image lazy loading
- Hover overlays

#### T-Shirt Preview
- Real-time 3D rendering
- Color customization
- Text editing
- View angle controls

#### Pricing Section
- Three-tier structure
- Feature comparison
- Popular plan highlighting
- FAQ section

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Tailwind CSS
Custom configuration includes:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Component utilities

### Next.js
Optimized for:
- Image optimization
- Font loading
- Bundle splitting
- SEO optimization

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components and images

## 🔒 Security

- **Environment Variables**: Secure API key management
- **HTTPS**: SSL/TLS encryption
- **Input Validation**: Form validation and sanitization
- **Rate Limiting**: API request throttling

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📚 API Integration

### AI Design Generation
```typescript
// Generate design from prompt
const response = await fetch('/api/generate-design', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: 'Best Dad Ever' })
})
```

### Print-on-Demand
```typescript
// Create product in Printful
const product = await fetch('/api/printful/products', {
  metho: 'POST',
  body: JSON.stringify({ design, variant })
})
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vercel Ship** - Design inspiration
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js** - React framework
- **Lucide** - Icon library

## 📞 Support

- **Email**: support@teeai.com
- **Documentation**: [docs.teeai.com](https://docs.teeai.com)
- **Discord**: [Join our community](https://discord.gg/teeai)

---

Built with ❤️ by the TeeAI team