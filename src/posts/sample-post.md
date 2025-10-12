---
layout: base.njk
title: "Sample Blog Post"
date: 2024-10-12
description: "This is a sample blog post to demonstrate the system"
---

# {{ title }}

<div class="post-meta">
Published on {{ date | date: "%B %d, %Y" }}
</div>

Welcome to your first blog post! This sample post demonstrates how content works in your new Jamstack publishing system.

## How This Works

When you create posts through the Decap CMS admin interface:

1. **Content Creation**: You'll write in a user-friendly editor
2. **Git Commit**: Your post gets saved as a file in your GitHub repository
3. **Automatic Build**: GitHub Actions triggers a build of your site
4. **Live Deployment**: Your new post appears on your live website

## Content Features

Your blog posts support:

- **Markdown formatting** for rich text
- **Frontmatter** for metadata like titles and dates
- **Automatic URL generation** based on your filename
- **SEO optimization** with meta descriptions

## Next Steps

Once your OAuth setup is complete, you can:

- Delete this sample post
- Create your own content
- Customize the design
- Add new page types

Happy publishing! 🚀
