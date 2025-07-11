# <img src="public/newssy_logo.svg" alt="Newssy" width="60"/> Newssy - Real-Time News Aggregator

**Newssy** is a modern, lightweight news web application built using **Next.js**. It provides the latest news articles across various categories, with a clean UI and optimized performance using server-side rendering and efficient font loading.

[🔗 Visit Site](https://newssy-isatyamshivam.vercel.app/)

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Language**: JavaScript (ES6+)
- **UI Library**: React
- **Styling**: CSS / TailwindCSS
- **Fonts**: `next/font` with Geist font family
- **API**: Times of India News API
- **Hosting**: Vercel

## ✅ Features

- Latest news updates fetched via public API
- Fast performance with Next.js server-side rendering
- Optimized font loading using `next/font` (Geist)
- Fully responsive design for all devices
- Dynamic routing for multiple news categories

## 📦 Installation

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/isatyamshivam/newssy.git
cd newssy

# 2. Install dependencies
npm install
# or
yarn install

# 3. Set environment variables
cp .env.example .env.local
# Add your NEWS_API_KEY in .env.local

# 4. Run the development server
npm run dev
# or
yarn dev

# 5. Visit http://localhost:3000 in your browser
```

## 🙏 Acknowledgments

- Next.js – for the powerful SSR framework
- News API – for providing news data
- Geist Font by Vercel – used via next/font
- Special thanks to the open-source community for ongoing inspiration

---
