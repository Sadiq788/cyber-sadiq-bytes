# Mohammed Sadiq - Cybersecurity Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, projects, and achievements.

## 🚀 Features

- **Modern Design**: Dark cybersecurity theme with green/blue accents
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive**: Smooth animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite and optimized bundles

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: EmailJS integration

## 📱 Sections

1. **Hero**: Introduction with call-to-action
2. **About**: Profile, bio, and technical skills
3. **Resume**: Education, certifications, and experience
4. **Projects**: Featured cybersecurity and development projects
5. **CTF**: Capture The Flag achievements and write-ups
6. **Contact**: Working contact form and social links

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sadiq788/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 📦 Build & Deploy

### Local Build

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

1. Update `vite.config.gh-pages.ts` with your repository name
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Use the provided GitHub Actions workflow

### Manual GitHub Pages Deployment

```bash
npm run predeploy
npm run deploy
```

## 🎨 Customization

### Colors & Theme

Edit the design system in:
- `src/index.css` - CSS custom properties
- `tailwind.config.ts` - Tailwind theme extension

### Content

Update personal information in:
- `src/components/Hero.tsx` - Name, title, introduction
- `src/components/About.tsx` - Bio and skills
- `src/components/Resume.tsx` - Education, certifications, experience
- `src/components/Projects.tsx` - Project showcase
- `src/components/CTF.tsx` - CTF achievements
- `src/components/Contact.tsx` - Contact information

### EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Add configuration to `src/components/Contact.tsx`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Resume.tsx      # Resume section
│   ├── Projects.tsx    # Projects showcase
│   ├── CTF.tsx         # CTF achievements
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── index.css          # Global styles & design system
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run predeploy` - Pre-deployment build
- `npm run deploy` - Deploy to GitHub Pages

## 🌟 Key Features

### Design System
- Cybersecurity-themed color palette
- Custom CSS properties for consistency
- Responsive breakpoints
- Dark theme optimized

### Performance
- Code splitting with Rollup
- Optimized images and assets
- Minimal bundle size
- Fast loading times

### SEO & Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Meta tags optimization
- ARIA labels where needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Mohammed Sadiq - Cybersecurity Analyst
- Email: contact.mohammedsadiq@gmail.com
- LinkedIn: [linkedin.com/in/mohammed-sadiq-060a2926b](https://www.linkedin.com/in/mohammed-sadiq-060a2926b)
- GitHub: [github.com/Sadiq788](https://github.com/Sadiq788/)

---

⭐ If you found this portfolio helpful, please consider giving it a star!