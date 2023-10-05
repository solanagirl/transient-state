/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gray: "linear-gradient(0deg, rgba(0,107,191,1) 0%, rgba(0,0,0,1) 0%, rgba(235,235,235,1) 77%, rgba(255,255,255,1) 92%, rgba(255,255,255,1) 100%);",
      },
      animation: {
        gradient: 'gradient 15s infinite'
      },
      keyframes: {
        gradient: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "0% 0%"
          },
          "50%": {
            "background-size": "200% 300%",
            "background-position": "100% 50%;"
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "0% 0%;"
          }
        }
        
      }
    },
  },
  plugins: [],
}

