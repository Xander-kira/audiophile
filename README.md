# Audiophile E-Commerce

A modern e-commerce platform for audio equipment built with Next.js 16, Convex, and Tailwind CSS.

## Features

- 🎧 Product catalog for headphones, speakers, and earphones
- 🛒 Shopping cart with localStorage persistence
- 📧 Order confirmation emails via Resend
- 💳 Complete checkout flow with order tracking
- 🎨 Responsive design with Tailwind CSS v4
- 🔒 Form validation with Zod

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Set up environment variables:
   Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_CONVEX_URL=<your-convex-dev-url>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Set up Convex:

```bash
# Start Convex in development mode (keep this running)
npx convex dev
```

4. Configure Resend for emails (in Convex dashboard or CLI):

```bash
npx convex env set RESEND_API_KEY <your-resend-api-key>
npx convex env set RESEND_FROM "Audiophile <orders@your-domain.com>"
```

5. Start the development server (in a new terminal):

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Production Deployment

### 1. Deploy Convex Backend

```bash
npx convex deploy
```

Copy the Production URL (e.g., `https://xxx.convex.cloud`)

### 2. Deploy to Vercel

Set the following environment variables in Vercel:

- `NEXT_PUBLIC_CONVEX_URL` = Your Convex Production URL
- `NEXT_PUBLIC_SITE_URL` = Your Vercel domain (e.g., `https://your-app.vercel.app`)

The Resend API key is already set in Convex, so you don't need to add it to Vercel.

### 3. Deploy

```bash
vercel --prod
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export:email` - Generate sample email HTML

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Convex (serverless backend)
- **Styling**: Tailwind CSS v4
- **Email**: Resend
- **Validation**: Zod
- **State**: React Context API

## Project Structure

```
audiophile/
├── app/                    # Next.js app directory
│   ├── (category pages)    # Headphones, speakers, earphones
│   ├── checkout/           # Checkout flow
│   ├── order/              # Order detail pages
│   └── [slug]/             # Product detail pages
├── components/             # React components
│   ├── cards/              # Product & category cards
│   ├── cart/               # Shopping cart
│   └── products/           # Product-related components
├── convex/                 # Convex backend
│   ├── orders.ts           # Order mutations/queries
│   └── _utils/             # Utility functions
└── lib/                    # Shared utilities
    └── data/               # Product data
```

## License

MIT


## Setup
- Node 18+
- `npm i`
- `cp .env.local.example .env.local` and set:
  - NEXT_PUBLIC_CONVEX_URL=<your dev convex url> (Dev)
- `npx convex dev` (in one terminal)
- `npm run dev` (in another)

## Production
- `npx convex deploy` → copy Production URL
- On Vercel set:
  - NEXT_PUBLIC_CONVEX_URL=<Convex Prod URL>
  - NEXT_PUBLIC_SITE_URL=<your Vercel domain>

