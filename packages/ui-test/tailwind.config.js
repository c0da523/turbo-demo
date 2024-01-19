/** @type {import('tailwindcss').Config} */
const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  green: {
    foam: "#CCE9E7",
    sinbad: "#A8D0CD",
    tradewind: "#65B3AE",
    halfBaked: "#4D9D98",
    blueDianne: "#2E524E",
    swamp: "#1A2F2D",
    racingGreen: "#0F1B1A",
  },
  gray: {
    silver: "#C4C4C4",
    charcoal: "#464646",
    blackPearl: "#1C1E20",
    nero: "#262626",
    soot: "#141414",
  },
  disabled: {
    gray: "#696969",
    grayLight: "#9D9D9D",
    greenDark: "#0B1413",
  },
  status: {
    error: "#E22F3D",
    success: "#3EB66A",
  },
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        button: {
          primary: baseColors.green.tradewind,
          primaryDark: "#21413f",
          primaryHover: baseColors.green.halfBaked,
          secondary: baseColors.green.foam,
          secondaryHover: baseColors.green.sinbad,
          tertiary: baseColors.green.tradewind,
          tertiaryHover: baseColors.green.swamp,
          disabled: baseColors.disabled.gray,
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
