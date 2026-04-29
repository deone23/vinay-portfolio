# Vinay Mourya - Portfolio Website

> A modern, professional portfolio website built with React and TypeScript, featuring a truus.co-inspired design aesthetic.

![Portfolio Preview](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Portfolio+Website)

## ✨ Features

- **🎨 Modern Design**: Truus.co-inspired aesthetic with glass morphism effects
- **🌙 Dark/Light Theme**: Toggle between themes with smooth transitions
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds
- **🎭 Smooth Animations**: Framer Motion for delightful interactions
- **📊 Analytics**: Umami analytics for privacy-friendly tracking
- **🚀 SEO Optimized**: Meta tags and structured content
- **♿ Accessible**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Netlify
- **Analytics**: Umami Cloud

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/deone23/vinay-portfolio.git

# Navigate to project directory
cd vinay-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
vinay-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Site footer
│   │   └── common/
│   │       └── ScrollToTop.tsx # Scroll to top utility
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── About.tsx          # About page with timeline
│   │   ├── Projects.tsx       # Projects showcase
│   │   └── Contact.tsx        # Contact form and info
│   ├── context/
│   │   └── ThemeContext.tsx   # Theme management
│   ├── App.tsx                # Main app component
│   └── main.tsx              # App entry point
├── public/
├── dist/                     # Build output
├── netlify.toml             # Netlify configuration
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue to Purple gradients (#3B82F6 → #8B5CF6)
- **Secondary**: Slate and Gray tones
- **Accent**: Green, Orange for highlights
- **Background**: Light/Dark adaptive

### Typography

- **Headings**: Inter font family, bold weights
- **Body**: Inter font family, regular weights
- **Code**: JetBrains Mono for technical content

### Components

- **Cards**: Rounded corners, subtle shadows, backdrop blur
- **Buttons**: Gradient backgrounds, hover animations
- **Forms**: Clean inputs with focus states
- **Navigation**: Backdrop blur with active states

## 📊 Analytics

This site uses [Umami Analytics](https://umami.is) for privacy-friendly tracking:

- **Website ID**: `8fb05d28-617b-4c8a-b49d-aa07046138aa`
- **Domains**: `davincycode.netlify.app`, `localhost`
- **Privacy**: GDPR compliant, no cookies

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file for local development:

```env
VITE_UMAMI_WEBSITE_ID=8fb05d28-617b-4c8a-b49d-aa07046138aa
VITE_UMAMI_SRC=https://cloud.umami.is/script.js
```

### Netlify Configuration

The `netlify.toml` file includes:

- Build settings
- Redirect rules for SPA
- Security headers
- Cache optimization

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: ~325KB (gzipped: ~99KB)
- **Load Time**: < 2 seconds on 3G
- **Core Web Vitals**: All green

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vinay Mourya**
- Website: [davincycode.netlify.app](https://davincycode.netlify.app)
- GitHub: [@deone23](https://github.com/deone23)
- LinkedIn: [vinay-mourya](https://www.linkedin.com/in/vinay-mourya/)
- Twitter: [@vin__ay](https://x.com/vin__ay)
- Email: vinaymourya1234@gmail.com

## 🙏 Acknowledgments

- Design inspiration from [truus.co](https://truus.co)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Analytics by [Umami](https://umami.is)

---

⭐ **Star this repository if you found it helpful!**