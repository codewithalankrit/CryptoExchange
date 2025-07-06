# 🚀 Coin Stock Oasis - Trading Platform Landing Page

A modern, responsive landing page for a comprehensive trading platform that offers access to stocks, crypto, commodities, and forex markets. Built with React, TypeScript, and Tailwind CSS using the shadcn/ui component library.

![Trading Platform Landing Page](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🎯 Core Features

- **Multi-Asset Trading**: Support for stocks, crypto, commodities, and forex
- **Live Market Data**: Real-time price updates across all asset classes
  - **Stocks**: Updates every 10 seconds with market indices
  - **Crypto**: Updates every 8 seconds with higher volatility simulation
  - **Commodities**: Updates every 8 seconds (gold, silver, oil, etc.)
  - **Forex**: Updates every 8 seconds with major currency pairs
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Built-in theme support with CSS custom properties
- **Component Library**: Comprehensive UI components using shadcn/ui

### 🛠️ Technical Features

- **TypeScript**: Full type safety and better developer experience
- **React Router**: Client-side routing with nested routes
- **React Query**: Data fetching and state management
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide Icons**: Beautiful, customizable icons
- **Form Handling**: React Hook Form with Zod validation

### 📱 Pages & Components

- **Landing Page**: Hero section with trading statistics and CTAs
- **Trading Pages**: Dedicated pages for different asset classes with live data
  - **Stocks**: AAPL, MSFT, GOOGL, TSLA, AMZN, NVDA with S&P 500, NASDAQ, DOW JONES
  - **Crypto**: BTC, ETH, BNB, ADA, SOL, DOT with market stats and categories
  - **Commodities**: Gold, Silver, WTI Oil, Brent Oil, Platinum, Palladium
  - **Forex**: EUR/USD, USD/JPY, GBP/USD, AUD/USD, USD/CAD, USD/CHF
- **Live Data Indicators**: Real-time status indicators and refresh animations
- **Loading Skeletons**: Smooth loading states for better UX
- **Navigation**: Responsive navbar with dropdown menus
- **Footer**: Comprehensive footer with links and information
- **Features Section**: Highlighting platform capabilities
- **About, Blog, Careers**: Additional informational pages

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun package manager

### Live Data Setup

The application includes comprehensive live market data functionality:

1. **Demo Mode**: By default, the app runs in demo mode with simulated price updates
2. **Real APIs**: For live data, get free API keys from:
   - **Stocks**: [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
   - **Crypto**: [CoinGecko](https://www.coingecko.com/en/api) (free tier)
   - **Commodities**: [Metals-API](https://metals-api.com/) (free tier)
   - **Forex**: [exchangerate.host](https://exchangerate.host/) (free)
3. **Configuration**: Create a `.env` file in the root directory:
   ```bash
   VITE_ALPHA_VANTAGE_API_KEY=your_stocks_api_key_here
   VITE_COINGECKO_API_KEY=your_crypto_api_key_here
   VITE_METALS_API_KEY=your_commodities_api_key_here
   ```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/coin-stock-oasis-landing.git
   cd coin-stock-oasis-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
coin-stock-oasis-landing/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.tsx    # Navigation component
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Features.tsx  # Features showcase
│   │   ├── Footer.tsx    # Footer component
│   │   └── LiveDataIndicator.tsx # Live data status component
│   ├── hooks/            # Custom React hooks
│   │   ├── useStockData.ts      # Stock data hooks
│   │   ├── useCryptoData.ts     # Crypto data hooks
│   │   ├── useCommoditiesData.ts # Commodities data hooks
│   │   └── useForexData.ts      # Forex data hooks
│   ├── lib/              # Utility functions and APIs
│   │   ├── stockApi.ts         # Stock API service
│   │   ├── cryptoApi.ts        # Crypto API service
│   │   ├── commoditiesApi.ts   # Commodities API service
│   │   ├── forexApi.ts         # Forex API service
│   │   ├── config.ts           # API configuration
│   │   └── utils.ts            # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Landing page
│   │   ├── Stocks.tsx    # Stocks trading page with live data
│   │   ├── Crypto.tsx    # Crypto trading page with live data
│   │   ├── Commodities.tsx # Commodities page with live data
│   │   ├── Forex.tsx     # Forex trading page with live data
│   │   └── ...           # Other pages
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue gradient for main actions
- **Accent**: Purple gradient for highlights
- **Success**: Green for positive actions
- **Trading Colors**: Green (buy), Red (sell), Gold (premium)

### Typography

- Modern, clean font stack
- Responsive text sizing
- Proper hierarchy with headings and body text

### Components

- **Buttons**: Multiple variants (hero, outline, ghost)
- **Cards**: Gradient backgrounds with elegant shadows
- **Navigation**: Responsive with dropdown menus
- **Forms**: Accessible form components with validation
- **Live Data UI**: Consistent loading states and live indicators across all asset classes

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🧩 Key Components

### Navbar

- Responsive navigation with mobile menu
- Dropdown menus for trading categories
- Authentication buttons
- Smooth animations and transitions

### Hero Section

- Compelling headline with gradient text
- Call-to-action buttons
- Trading statistics cards
- Background image with overlay

### Features

- Platform capabilities showcase
- Interactive elements
- Professional presentation

### Live Data Components

- **LiveDataIndicator**: Real-time status with refresh animations
- **Loading Skeletons**: Smooth loading states for better UX
- **Data Hooks**: React Query hooks for efficient data fetching
- **API Services**: Centralized API management with fallback data

## 🌐 Routing

The application uses React Router with the following routes:

- `/` - Landing page
- `/stocks` - Stocks trading page
- `/crypto` - Cryptocurrency trading page
- `/commodities` - Commodities trading page
- `/forex` - Forex trading page
- `/about` - About page
- `/blog` - Blog page
- `/careers` - Careers page
- `/help` - Help center
- `/contact` - Contact page
- `/status` - Platform status

## 🎯 Customization

### Styling

The project uses a custom design system built on Tailwind CSS with:

- CSS custom properties for theming
- Custom gradients and shadows
- Responsive breakpoints
- Animation utilities

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.tsx`
3. Update navigation if needed

### Modifying Components

All components are built with shadcn/ui primitives and can be customized through:

- Tailwind CSS classes
- CSS custom properties
- Component props

## 📦 Dependencies

### Core Dependencies

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.1** - Build tool
- **React Router 6.26.2** - Routing
- **Tailwind CSS 3.4.11** - Styling
- **React Query 5.28.4** - Data fetching and caching

### UI Libraries

- **shadcn/ui** - Component library
- **Radix UI** - UI primitives
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Alpha Vantage](https://www.alphavantage.co/) for stock market data
- [CoinGecko](https://www.coingecko.com/) for cryptocurrency data
- [Metals-API](https://metals-api.com/) for commodities data
- [exchangerate.host](https://exchangerate.host/) for forex data

## 📞 Support

For support, email support@coinstockoasis.com or join our Slack channel.

---

**Built with ❤️ for the trading community**
