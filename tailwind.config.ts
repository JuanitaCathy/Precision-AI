/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#19ECBF",  // Neon Green
        },
        secondary: "#09080E", // Dark Blue
        white: "#FFFFFF",    // White
        gray: {
          400: "#B0B0B0",  // Light Gray for some text
          300: "#D0D5DD",
          600: "#475467",
          700: "#344054",
        },
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      maxWidth: {
        "10xl": '1440px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        10: "10px"
      }
    },
  },
  plugins: [],
};
