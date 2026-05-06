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
          50: "#f1fff9",
          100: "#dcfff0",
          200: "#b8fadd",
          300: "#7ef0c0",
          400: "#37dfa0",
          500: "#12c789",
          600: "#08a56f",
          700: "#0a845c",
          800: "#0d684c",
          900: "#0f5641"
        },
        ink: "#13211d",
        basil: "#1d6b54",
        tomato: "#d95032",
        cream: "#fffaf1"
      },
      boxShadow: {
        glass: "0 24px 80px rgba(13, 104, 76, 0.16)",
        lift: "0 18px 50px rgba(19, 33, 29, 0.12)"
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
