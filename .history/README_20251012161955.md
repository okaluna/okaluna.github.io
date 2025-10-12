# Okaluna Web Publishing System

A complete, automated web publishing system built with modern Jamstack architecture.

## 🚀 What You Have

- **Static Site Generator**: Eleventy (11ty) - Transforms your content into fast, secure web pages
- **Content Management**: Decap CMS - Easy-to-use web interface for creating content
- **Hosting**: GitHub Pages - Free, reliable hosting directly from your repository
- **Automation**: GitHub Actions - Automatic deployment every time you publish content

## 📁 Project Structure

```
web/
├── .github/workflows/     # GitHub Actions for automated deployment
│   └── deploy.yml
├── src/                   # Source files
│   ├── _includes/         # Layout templates
│   │   └── base.njk      # Main page template
│   ├── admin/            # Decap CMS configuration
│   │   ├── index.html    # CMS interface
│   │   └── config.yml    # CMS configuration
│   ├── assets/           # Static assets
│   │   └── images/       # Image uploads
│   ├── posts/            # Blog posts (Markdown files)
│   └── index.md          # Homepage
├── .eleventy.js          # Eleventy configuration
├── package.json          # Node.js project configuration
└── README.md            # This file
```

## 🛠️ Local Development

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Content Management

Once OAuth is configured (see setup steps below), you can:

1. Navigate to `/admin/` on your live site
2. Log in with your GitHub account
3. Create and edit blog posts through the web interface
4. Upload images and media files
5. Preview content before publishing

All changes automatically trigger a rebuild and deployment of your site.

## 🎯 Key Features

- ✅ **Zero-maintenance hosting** - GitHub Pages handles everything
- ✅ **Automatic deployments** - Push content, get live updates
- ✅ **Version controlled** - Full history of all content changes
- ✅ **Lightning fast** - Static site = optimal performance
- ✅ **SEO optimized** - Clean URLs and meta tags
- ✅ **Mobile responsive** - Works great on all devices

## 🔧 Technology Stack

- **[Eleventy](https://www.11ty.dev/)** - Simple, powerful static site generator
- **[Decap CMS](https://decapcms.org/)** - Git-based content management
- **[GitHub Pages](https://pages.github.com/)** - Free static site hosting
- **[GitHub Actions](https://github.com/features/actions)** - Automated CI/CD pipeline

---

## ⚠️ IMPORTANT: Required Setup Steps

Your web publishing system is ready, but you need to complete the OAuth setup to enable the content management interface. Follow the detailed instructions in `SETUP.md` to activate your CMS.
