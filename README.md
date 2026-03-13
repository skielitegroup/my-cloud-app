# Skielite – My Cloud App

**Skielite** is a one-stop solution for all trading business, covering:

- **Nutraceuticals** – vitamins, supplements, protein powders, herbal extracts
- **Surgical Equipment** – instruments, PPE, diagnostics, disposables
- **Borderline Products** – wound care, barrier creams, antiseptics, stoma care
- **General Use Items** – safety gear, packaging, office supplies, hygiene

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **React Router DOM** (client-side routing)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, stats, categories and CTA |
| `/categories` | All four product categories |
| `/categories/:categoryId` | Product listing for a specific category |
| `/about` | About Skielite |
| `/contact` | Contact / quote request form |
