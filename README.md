# Age in Place LLC - Professional Website

A modern, responsive website for Age in Place LLC, an accessibility and aging-in-place modification service company. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Live Features

- **Responsive Design** - Mobile-first, works on all devices
- **Dark/Light Mode** - Toggle theme preference
- **SEO Optimized** - Built-in Next.js SEO features
- **Fast Performance** - Optimized with Turbopack
- **Professional Layout** - Clean, accessible design
- **Contact Forms** - Lead capture ready to integrate

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
age-in-place-llc/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── api/contact/        # API endpoint for forms
│   └── globals.css         # Global styles
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   └── lib/
│       └── config.ts       # Site configuration
├── public/                 # Static assets
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind config
└── next.config.ts          # Next.js config
```

## ⚙️ Configuration

Edit `/src/lib/config.ts` to customize your website:

```typescript
export const siteConfig = {
  name: 'Age in Place LLC',
  domain: 'ageinplacellc.com',
  description: '...',
  email: 'info@ageinplacellc.com',
  phone: '(555) 123-4567',
  address: 'Your Address Here',
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
};
```

## 📧 Email Integration

The contact form currently logs submissions. To enable email:

### Option 1: SendGrid/Resend (Recommended)

```bash
npm install resend  # or sendgrid
```

Update `/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your POST handler:
await resend.emails.send({
  from: 'noreply@ageinplacellc.com',
  to: 'info@ageinplacellc.com',
  subject: `New Service Inquiry from ${data.name}`,
  html: `<p>Email: ${data.email}</p>...`,
});
```

### Option 2: Formspree/Basin

Replace form submission with:

```typescript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(data),
});
```

## 🎨 Customization

### Colors & Styling
- Edit `tailwind.config.ts` for theme colors
- Modify `app/globals.css` for global styles
- Components use Tailwind utility classes

### Content
- Update service descriptions in `src/lib/config.ts`
- Edit testimonials in the same file
- Modify page content in `app/*/page.tsx` files

### Images
- Replace emoji placeholders with real images
- Add images to `/public/images/`
- Reference in components like: `<Image src="/images/service.jpg" />`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components are mobile-first responsive.

## 🔍 SEO Optimization

- Meta tags configured in `app/layout.tsx`
- Each page has custom title/description
- Open Graph support for social sharing
- Semantic HTML structure
- Mobile-friendly

To add Google Analytics:

```typescript
// In app/layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
></script>
<script>
  window.dataLayer = [];
  function gtag(){...}
</script>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo at vercel.com
3. Deploy automatically

### Other Platforms

- **Netlify**: Drag & drop build folder or git integration
- **AWS**: Use Amplify
- **Docker**: Build and deploy container

## 📦 Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icons
- **React 19** - UI library

## 🔒 Security

- No sensitive data in client code
- Form validation on client & server
- CSRF protection built-in
- CSP headers configured

## 📝 Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_api_key
```

## 🐛 Troubleshooting

**Development server won't start**
```bash
npm cache clean --force
rm -rf node_modules
npm install
npm run dev
```

**Build errors**
```bash
npm run build  # Check error details
npm run lint   # Find linting issues
```

**Import errors**
- Check `tsconfig.json` paths configuration
- Verify file paths use `@/` alias correctly
- Clear `.next` folder: `rm -rf .next`

## 📞 Support

For questions about:
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

## 📄 License

All rights reserved - Age in Place LLC
