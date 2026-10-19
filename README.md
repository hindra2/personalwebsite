# Personal Website

This is the repository for my personal website

## Development
Setup
```
git clone https://github.com/hindra2/personalwebsite.git
cd personalwebsite
npm install
```

Usage
```
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the build
```

Blog posts are Markdown files in `src/content/blog/`. Each needs `title`, `date`
and `summary` frontmatter, and the filename becomes the URL (`/blog/<filename>`).
Setup gh-pages
https://github.com/gitname/react-gh-pages