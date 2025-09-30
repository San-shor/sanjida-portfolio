# Sanjida Portfolio

A modern, responsive portfolio website built with Next.js 15.5.4, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Automatic dark/light mode based on system preference
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Optimized for speed and SEO
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd sanjida-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update personal story and skills
- `src/components/Experience.tsx` - Update work experience
- `src/components/Projects.tsx` - Update project information
- `src/components/Contact.tsx` - Update contact information
- `src/app/layout.tsx` - Update metadata (title, description)

### Styling

- Colors: Update the gradient colors in components and `globals.css`
- Fonts: Change fonts in `layout.tsx`
- Animations: Modify animations in `globals.css`

### Content

- Replace placeholder images with your actual project screenshots
- Update project URLs and GitHub links
- Add your real contact information

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect your GitHub repository
- **Railway**: Deploy with one click
- **DigitalOcean**: Use App Platform

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Fully optimized for search engines

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for the deployment platform
- The open-source community for inspiration

---

**Made with ❤️ by Sanjida**
