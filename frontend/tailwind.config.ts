import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          subtle: "var(--background-subtle)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          muted: "var(--foreground-muted)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          subtle: "var(--surface-subtle)",
          card: "var(--surface-card)",
          border: "var(--surface-border)",
          hover: "var(--surface-hover)",
        },
        brand: {
          gold: {
            light: "#F3DE8A",
            DEFAULT: "#D4AF37",
            dark: "#B8860B",
          },
          green: {
            light: "#34D399",
            DEFAULT: "#10B981",
            dark: "#059669",
            glow: "rgba(16, 185, 129, 0.15)",
          },
          navy: {
            950: "#05080F",
            900: "#070B12",
            850: "#0B111D",
            800: "#0F172A",
            700: "#1E293B",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      backgroundImage: {
        "radial-subtle": "radial-gradient(circle at 50% 0%, var(--glow-green) 0%, transparent 65%)",
        "radial-gold": "radial-gradient(circle at 100% 0%, var(--glow-gold) 0%, transparent 50%)",
        "financial-grid": "var(--financial-grid)",
      },
      animation: {
        "ticker": "ticker 35s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
