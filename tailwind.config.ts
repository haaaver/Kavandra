import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        mint: {
          50: "rgba(255, 228, 230, 0.10)",
          100: "rgba(255, 228, 230, 0.18)",
          200: "rgba(254, 205, 211, 0.28)",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337"
        },
        ink: "#f8fafc",
        basil: "#fb7185",
        tomato: "#f43f5e",
        cream: "#111217"
      },
      boxShadow: {
        glass: "0 24px 80px rgba(0, 0, 0, 0.42)",
        lift: "0 18px 50px rgba(225, 29, 72, 0.24)"
      },
      borderRadius: {
        button: "14px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
