# Bottleneck Calculator Website - Complete Guide

A modern, responsive bottleneck calculator website that helps users identify CPU and GPU bottlenecks in their PC builds.

## 📁 Files Included

- `index.html` - Main HTML file with modern UI
- `style.css` - CSS file with modern styling and responsive design
- `script.js` - JavaScript file with functionality and bottleneck calculation
- `cpu-models.json` - JSON file containing 122 CPU models
- `gpu-models.json` - JSON file containing 89 GPU models
- `README.md` - This guide

## 🚀 How to Upload Your Website

### Method 1: Static Hosting Services (Recommended - FREE)

#### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com) and create a free account
2. Click "Deploy to Netlify" or "Add new site"
3. Choose "Deploy manually" (drag and drop method)
4. Drag all 5 files (`index.html`, `style.css`, `script.js`, `cpu-models.json`, `gpu-models.json`) into the drop zone
5. Your site will be live in seconds with a URL like `https://amazing-site-name.netlify.app`

#### Option B: Vercel
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New Project"
3. Choose "Deploy without Git" or upload files directly
4. Upload all your files
5. Get instant deployment with automatic SSL

#### Option C: GitHub Pages (If you use GitHub)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select source as "Deploy from a branch" → "main"
5. Your site will be available at `https://yourusername.github.io/repositoryname`

### Method 2: Traditional Web Hosting (cPanel/FTP)

#### Using cPanel File Manager:
1. Log into your web hosting cPanel
2. Open "File Manager"
3. Navigate to `public_html` folder
4. Click "Upload"
5. Select all 5 files and upload them
6. Your site will be accessible via your domain

#### Using FTP (FileZilla):
1. Download and install FileZilla
2. Connect to your hosting account using FTP credentials
3. Navigate to the `public_html` or `www` folder
4. Drag and drop all files from your computer to the server
5. Files will be uploaded and accessible via your domain

### Method 3: Cloud Storage Hosting

#### Google Cloud Storage:
1. Create a Google Cloud Storage bucket
2. Enable static website hosting
3. Upload all files to the bucket
4. Set index.html as the main page
5. Configure permissions for public access

## 📝 File Structure After Upload

```
your-website/
├── index.html          (Main page)
├── style.css           (Styling)
├── script.js           (Functionality)
├── cpu-models.json     (CPU database)
├── gpu-models.json     (GPU database)
└── README.md           (Documentation)
```

## 🔧 Testing Your Website

After uploading, test these features:
- [ ] Website loads properly
- [ ] CPU search autocomplete works
- [ ] GPU search autocomplete works
- [ ] RAM input accepts numbers
- [ ] Resolution dropdown works
- [ ] Calculate button produces results
- [ ] Results display with proper styling
- [ ] Responsive design works on mobile

## 🎨 Customization Options

### Adding More CPU/GPU Models:
1. Edit `cpu-models.json` or `gpu-models.json`
2. Add new models to the JSON array
3. Re-upload the modified file

### Changing Colors/Styling:
1. Edit the `:root` variables in `style.css`
2. Modify colors, fonts, or spacing as needed
3. Re-upload the CSS file

### Modifying Bottleneck Logic:
1. Edit the calculation functions in `script.js`
2. Adjust the tier classification or percentage calculations
3. Re-upload the JavaScript file

## 🌐 Domain Setup (Optional)

### Custom Domain on Netlify:
1. Go to your site dashboard
2. Click "Domain settings"
3. Add your custom domain
4. Follow DNS configuration instructions

### Custom Domain on Vercel:
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## 📱 Features

- **Modern UI**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Fast Search**: Autocomplete for 122+ CPU and 89+ GPU models
- **Smart Analysis**: Calculates bottlenecks based on component tiers and resolution
- **Dark Mode**: Automatic dark mode support
- **Accessible**: Keyboard navigation and screen reader friendly

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks needed
- **External JSON data** - Easy to update CPU/GPU lists
- **Progressive Enhancement** - Works even if external files fail to load
- **Modern ES6+ JavaScript** - Clean, maintainable code
- **CSS Grid/Flexbox** - Modern layout techniques

## 🔍 SEO Optimization

Add these meta tags to `index.html` for better search engine visibility:

```html
<meta name="description" content="Free PC Bottleneck Calculator - Check CPU and GPU compatibility for optimal gaming performance">
<meta name="keywords" content="bottleneck calculator, CPU GPU compatibility, PC gaming performance">
<meta property="og:title" content="PC Bottleneck Calculator">
<meta property="og:description" content="Free tool to check CPU and GPU bottlenecks in your PC build">
```

## 🎯 Next Steps

1. **Upload all files** using one of the methods above
2. **Test functionality** to ensure everything works
3. **Share your website** with friends and PC building communities
4. **Monitor usage** and gather feedback for improvements
5. **Update regularly** with new CPU/GPU models as they're released

## 📞 Support

If you encounter any issues:
- Check that all 5 files are uploaded to the same directory
- Ensure file names are exactly as provided (case-sensitive)
- Verify your hosting service supports static HTML files
- Test in different browsers to rule out compatibility issues

Your bottleneck calculator website is now ready to help PC builders worldwide! 🎉
