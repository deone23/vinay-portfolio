# Vinay Mourya - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing 8.5 years of software development experience with interactive animations and professional design.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Dark/Light Mode**: Theme switching with system preference detection
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Performance Optimized**: Fast loading with Vite build system
- **SEO Friendly**: Meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with keyboard navigation support
- **Contact Form**: Interactive contact form with validation
- **Project Showcase**: Filterable project gallery with detailed modals

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Netlify
- **Domain**: davincycode.netlify.app

## 📁 Project Structure

```
vinay-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── ScrollToTop.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deone23/vinay-portfolio.git
   cd vinay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Colors and Theme

Customize the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom primary colors
      },
    },
  },
},
```

### Content Updates

- **Personal Information**: Update contact details in `src/pages/Contact.tsx`
- **Projects**: Add/modify projects in `src/pages/Projects.tsx`
- **About Section**: Update experience and skills in `src/pages/About.tsx`
- **Home Page**: Modify hero content in `src/pages/Home.tsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Add routing in `src/App.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Color contrast compliance

## 🌐 Deployment

### Netlify Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy!

### Custom Domain Setup

1. In Netlify dashboard, go to Domain settings
2. Add custom domain: `davincycode.netlify.app`
3. Configure DNS settings as provided by Netlify

## 📊 Performance Optimizations

- **Code Splitting**: React.lazy for route-based splitting
- **Image Optimization**: Responsive images with proper sizing
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Caching**: Proper cache headers for static assets
- **Minification**: CSS and JS minification in production

## 🔧 Development Tools

- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting (recommended)
- **TypeScript**: Type checking and IntelliSense
- **Vite**: Fast development server and build tool

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Vinay Mourya**
- 8.5 years of software development experience
- Specializes in React, TypeScript, and modern web technologies
- Email: vinaymourya1234@gmail.com
- LinkedIn: [vinay-mourya](https://www.linkedin.com/in/vinay-mourya/)
- GitHub: [deone23](https://github.com/deone23)
- Twitter: [@vin__ay](https://x.com/vin__ay)

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with the portfolio, feel free to reach out:

- Email: vinaymourya1234@gmail.com
- LinkedIn: [Vinay Mourya](https://www.linkedin.com/in/vinay-mourya/)

---

**Built with ❤️ by Vinay Mourya**
