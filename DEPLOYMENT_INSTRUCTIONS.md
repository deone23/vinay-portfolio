# Deployment Instructions

## 🚀 Complete Deployment Workflow

### Step 1: Prepare for GitHub

```bash
# Navigate to project directory
cd vinay-portfolio

# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Portfolio website with truus.co design - ready for deployment"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `vinay-portfolio` or `davincycode-portfolio`
4. Make it public
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
# Add remote origin (replace with your actual repository URL)
git remote add origin https://github.com/deone23/vinay-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 4: Deploy to Netlify

#### Option A: Connect GitHub Repository (Recommended)

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Select your `vinay-portfolio` repository
5. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` (in Environment variables)

#### Option B: Manual Deploy

1. Run build locally: `npm run build`
2. Go to [Netlify](https://netlify.com)
3. Drag and drop the `dist` folder to Netlify deploy area

### Step 5: Configure Custom Domain

1. In Netlify dashboard, go to "Site settings"
2. Click "Domain management"
3. Click "Add custom domain"
4. Enter `davincycode.netlify.app` or your custom domain
5. Follow DNS configuration instructions

### Step 6: Verify Deployment

1. Visit your deployed site
2. Test all pages and functionality
3. Check mobile responsiveness
4. Verify theme toggle works
5. Test contact form
6. Check analytics in Umami dashboard

## 📊 Analytics Setup Verification

### Umami Dashboard Access

1. Go to [Umami Cloud](https://cloud.umami.is)
2. Login to your account
3. Check website: `8fb05d28-617b-4c8a-b49d-aa07046138aa`
4. Verify domain: `davincycode.netlify.app`

### Troubleshooting Analytics

If analytics aren't showing:

1. **Check domain configuration**: Ensure `davincycode.netlify.app` is added in Umami
2. **Verify script loading**: Open browser dev tools, check Network tab
3. **Check CSP**: Ensure `https://cloud.umami.is` is allowed
4. **Wait for data**: Analytics may take a few minutes to appear

## 🔧 Environment Variables (if needed)

If you need to add environment variables in Netlify:

1. Go to Site settings → Environment variables
2. Add variables:
   - `NODE_VERSION`: `18`
   - `NPM_VERSION`: `8` (optional)

## 🛠️ Build Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version compatibility
2. **TypeScript errors**: Run `npm run build` locally first
3. **Missing dependencies**: Run `npm install` before build
4. **Path issues**: Ensure all imports use relative paths

### Build Commands:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Testing Checklist

### Desktop Testing
- [ ] Home page loads correctly
- [ ] Navigation works
- [ ] Theme toggle functions
- [ ] About page displays properly
- [ ] Projects page with filtering
- [ ] Contact form works
- [ ] Footer links functional
- [ ] Animations smooth

### Mobile Testing
- [ ] Responsive design works
- [ ] Mobile menu functions
- [ ] Touch interactions work
- [ ] Text is readable
- [ ] Buttons are accessible
- [ ] Forms work on mobile

### Performance Testing
- [ ] Page load speed < 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] Smooth scrolling
- [ ] Analytics tracking works

## 🔄 Continuous Deployment

Once connected to GitHub, Netlify will automatically:

1. **Deploy on push**: Every push to `main` branch triggers deployment
2. **Build previews**: Pull requests get preview deployments
3. **Rollback capability**: Easy rollback to previous versions
4. **Build notifications**: Get notified of build status

## 🎯 Success Metrics

Your deployment is successful when:

- ✅ Site loads at your Netlify URL
- ✅ All pages are accessible
- ✅ Design matches truus.co aesthetic
- ✅ Mobile responsive
- ✅ Theme toggle works
- ✅ Analytics tracking active
- ✅ No console errors
- ✅ Fast loading times

## 📞 Support

If you encounter issues:

1. Check Netlify build logs
2. Review browser console for errors
3. Verify all environment variables
4. Test locally with `npm run build`
5. Check GitHub repository files

---

**🎉 Congratulations!** Your portfolio website with truus.co design is now live and ready to showcase your professional work!