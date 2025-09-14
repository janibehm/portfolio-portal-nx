# Portfolio Portal

A modern portfolio website built with Nx monorepo architecture, featuring a Next.js frontend and Sanity CMS backend.

## Architecture

- **Frontend**: Next.js 15 with App Router
- **CMS**: Sanity Studio for content management
- **Monorepo**: Nx workspace for unified development
- **Styling**: CSS Modules and global styles
- **Images**: Next.js Image optimization with WebP support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the portfolio website:
```bash
npx nx serve portfolio-portal
```
Available at: http://localhost:4200

Start the Sanity CMS studio:
```bash
npx nx serve portfolio-portal-sanity
```
Available at: http://localhost:3333

Both applications can run simultaneously.

### Building

Build the portfolio for production:
```bash
npx nx build portfolio-portal
```

Build the Sanity studio:
```bash
npx nx build portfolio-portal-sanity
```

## Project Structure

```
apps/
├── portfolio-portal/          # Next.js frontend application
│   ├── app/                  # App Router pages and components
│   ├── public/               # Static assets
│   └── project.json          # Nx project configuration
├── portfolio-portal-sanity/   # Sanity CMS studio
│   ├── schemaTypes/          # Content schemas
│   └── sanity.config.ts      # Sanity configuration
```

## Deployment

The applications are configured for deployment on Vercel with automatic builds from the repository.

## Commands

- `npx nx serve <project>` - Start development server
- `npx nx build <project>` - Build for production
- `npx nx start <project>` - Start production server (port 3000)
- `npx nx graph` - View project dependency graph
- `npx nx reset` - Clear Nx cache

## PWA Features

The portfolio is configured as a Progressive Web App (PWA) with:
- Offline functionality
- Install prompt on mobile/desktop
- Service worker caching
- App-like experience

Test PWA features at http://localhost:3000 after running the production build command above.
