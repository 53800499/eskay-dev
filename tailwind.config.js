// Description: Tailwind CSS configuration file
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Activer le mode sombre basé sur la classe
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      "8xl": [
        "60px",
        {
          lineHeight: "72px",
          letterSpacing: "(-2%)",
          fontWeight: "700"
        }
      ],
      "7xl": [
        "48px",
        {
          lineHeight: "48px",
          letterSpacing: "(-2%)",
          fontWeight: "700"
        }
      ],
      "6xl": [
        "36px",
        {
          lineHeight: "40px",
          letterSpacing: "(-2%)",
          fontWeight: "600"
        }
      ],
      /* hAEDING H2 */
      "5xl": [
        "36px",
        {
          lineHeight: "40px",
          letterSpacing: "(-2%)",
          fontWeight: "600"
        }
      ],
      "4xl": [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "-1.2px",
          fontWeight: "600"
        }
      ],
      /* Heading H3 */
      "3xl": [
        "30px",
        {
          lineHeight: "36px",
          letterSpacing: "(-2%)",
          fontWeight: "600"
        }
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "-1px",
          fontWeight: "600"
        }
      ],
      /* Subtitle */
      xl: [
        "20px",
        {
          lineHeight: "28px",
          letterSpacing: "-1px",
          fontWeight: "400"}
      ],
      lg: [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.8px",
          fontWeight: "400"
        }
      ],
      /* Body1 */
      body1: [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.6px",
          fontWeight: "400"
        }
      ],
      body11: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400"
        }
      ],
      /* body2 */
      body2: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.3px",
          fontWeight: "400"
        }
      ],
      /* body3 */
      body3: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "400"
        }
      ],
    },
    colors: {
      white: "#ffffff",
      primary: {
        500: "#10b981"
      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe9de",
        400: "#56c4a7",
        DEFAULT: "#2AB691",
        600: "#26a482"
      },
      gray: {
        DEFAULT: "##ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
        950: "#030712",
      }
    },
    borderRadius: {
      DEFAULT: "10px",
      full: "9999px"
    },
    fontWeight: {
      DEFAULT: "400",
      bold: "700"
    },
    extend: {}
  },
  plugins: []
};

