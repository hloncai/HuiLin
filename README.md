# Personal Academic Website Setup Guide

## Overview
This is a modern, responsive personal academic website template inspired by professional researcher websites. It includes sections for biography, news, publications, team members, teaching, and contact information.

## Files Included
- `index.html` - Main HTML structure
- `styles.css` - Complete styling with responsive design
- `script.js` - Interactive functionality
- `README.md` - This setup guide

## Quick Start

### 1. Basic Setup
1. Download all files to your computer
2. Place them in a folder for your website
3. Open `index.html` in a web browser to preview

### 2. Hosting Your Website

#### Option A: GitHub Pages (Free)
1. Create a GitHub account at github.com
2. Create a new repository named `[yourusername].github.io`
3. Upload all files to the repository
4. Your site will be live at `https://[yourusername].github.io`

#### Option B: University Hosting
1. Contact your university IT department for web hosting
2. Upload files via FTP or their provided method
3. Your URL will typically be something like `university.edu/~yourusername`

#### Option C: Other Hosting Services
- Netlify (free tier available)
- Vercel (free tier available)
- Traditional web hosting (NameCheap, GoDaddy, etc.)

## Customization Guide

### Essential Changes to Make

#### 1. Personal Information
In `index.html`, replace:
- All instances of "Your Name" with your actual name
- "Your Title" with your position (e.g., "Assistant Professor")
- "Department | University" with your affiliation
- Email and office information
- Bio paragraphs with your actual biography

#### 2. Profile Photo
- Add your professional photo to the website folder
- Name it `your-photo.jpg` (or update the filename in HTML)
- Recommended size: 400x400 pixels or larger
- Square aspect ratio works best

#### 3. Navigation & Sections
The navigation menu links to different sections. You can:
- Remove sections you don't need
- Add new sections by copying the section structure
- Reorder sections as desired

#### 4. News Updates
Add your news items in the news section:
```html
<div class="news-item">
    <span class="news-date">MM/YY:</span>
    <span class="news-content">Your news content here with <a href="#">links</a> if needed.</span>
</div>
```

#### 5. Publications
Add your publications:
```html
<div class="pub-item" data-category="journal">
    <div class="pub-year">2025</div>
    <div class="pub-content">
        <h3>Paper Title</h3>
        <p class="pub-authors">Author1, <strong>Your Name</strong>, Author3</p>
        <p class="pub-venue">Journal/Conference Name, Year</p>
        <div class="pub-links">
            <a href="#" class="pub-link">Paper</a>
            <a href="#" class="pub-link">Code</a>
        </div>
    </div>
</div>
```

Categories: Use `data-category` with values: `journal`, `conference`, or `preprint`

#### 6. Team Members
For each team member:
```html
<div class="team-member">
    <img src="member-photo.jpg" alt="Member Name">
    <h4>Member Name</h4>
    <p>Position</p>
    <p class="member-info">Research interests</p>
</div>
```

#### 7. Teaching
Add your courses:
```html
<div class="course-item">
    <h3>Course Title (CS XXX)</h3>
    <p>Semester Year | <a href="#">Course Website</a></p>
    <p>Course description</p>
</div>
```

### Color Scheme Customization
In `styles.css`, modify the CSS variables at the top:
```css
:root {
    --primary-color: #1a73e8;  /* Main accent color */
    --secondary-color: #34a853; /* Secondary accent */
    --text-dark: #202124;       /* Main text color */
    --text-light: #5f6368;      /* Secondary text */
    --background-light: #f8f9fa; /* Light background */
}
```

### Adding Google Scholar & Social Links
Update the social links section with your profiles:
```html
<div class="social-links">
    <a href="https://scholar.google.com/citations?user=YOURID" class="social-link">Google Scholar</a>
    <a href="https://twitter.com/yourhandle" class="social-link">Twitter</a>
    <a href="https://github.com/yourusername" class="social-link">GitHub</a>
    <a href="https://linkedin.com/in/yourprofile" class="social-link">LinkedIn</a>
</div>
```

### Adding a Google Map
Replace the map placeholder with an embedded Google Map:
1. Go to Google Maps and search for your location
2. Click "Share" → "Embed a map"
3. Copy the iframe code
4. Replace the map-placeholder div with the iframe

## Advanced Features

### Adding More Sections
To add a new section, use this template:
```html
<section id="section-name" class="section-name">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

Don't forget to add a navigation link:
```html
<a href="#section-name" class="nav-link">Section Name</a>
```

### SEO Optimization
Add these meta tags to the `<head>` section:
```html
<meta name="description" content="Personal academic website of [Your Name], [Position] at [University]">
<meta name="keywords" content="your name, research area, university">
<meta property="og:title" content="Your Name - Academic Website">
<meta property="og:description" content="Your brief bio">
<meta property="og:image" content="URL-to-your-photo">
```

### Google Analytics
To track visitors, add Google Analytics:
1. Create a Google Analytics account
2. Get your tracking ID
3. Add the tracking code before `</head>`

## File Organization
Recommended folder structure:
```
/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── your-photo.jpg
│   ├── team/
│   │   ├── member1.jpg
│   │   └── member2.jpg
│   └── projects/
├── papers/
│   ├── paper1.pdf
│   └── paper2.pdf
└── cv/
    └── cv.pdf
```

## Maintenance Tips
1. **Regular Updates**: Update news section monthly
2. **Publications**: Add new publications as they're accepted
3. **Team**: Update when members join or leave
4. **Backup**: Keep a backup of your website files
5. **Test**: Check how it looks on mobile devices

## Troubleshooting

### Images Not Showing
- Check file names (case-sensitive)
- Ensure images are in the correct folder
- Use web-friendly formats (JPG, PNG)

### Layout Issues
- Clear browser cache (Ctrl+F5)
- Check for missing closing tags in HTML
- Validate HTML at validator.w3.org

### Mobile Menu Not Working
- Ensure script.js is linked correctly
- Check browser console for JavaScript errors

## Browser Compatibility
This website works on:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Need Help?
- HTML/CSS basics: MDN Web Docs (developer.mozilla.org)
- Web hosting: Your university IT department
- Design inspiration: Look at other academic websites

## License
This template is free to use and modify for personal academic websites.

---

Last updated: October 2024
