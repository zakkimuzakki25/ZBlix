/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-home': "url('/src/assets/background/Home.jpg')",
        'linear-top-black-0.75': "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.0))",
        'linear-top-black-1': "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.0))",
        'backdrop': "url('/src/assets/dummy/backdrop.jpg')",
        'poster-1': "url('/src/assets/dummy/poster-1.jpg')",
        'poster-2': "url('/src/assets/dummy/poster-2.jpg')",
      },
      width: {
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        400: "400px",
        520: "520px",
        1040: "1040px",
      },
      height: {
        0.75: "3px",
        200: "200px",
        250: "250px",
        300: "300px",
        350: "350px",
        "banner-lg": "720px",
        520: "520px",
        1040: "1040px",
      },
      padding: {
        '50': "50px",
        '120': "120px",
        '150': "150px",
      },
      colors: {
        red: "#FE170F",
        grey: "#4E4E4E",
        yellow: "#FCC21B",
        soft: {
          white: "#D9D9D9",
        },
        black: {
          0.25: 'rgba(0, 0, 0, 0.25)',
          0.5: 'rgba(0, 0, 0, 0.5)',
          0.75: 'rgba(0, 0, 0, 0.75)',
          0.85: 'rgba(0, 0, 0, 0.85)',
          1: 'rgba(0, 0, 0, 1)',
        },
        white: {
          0.25: 'rgba(255, 255, 255, 0.25)',
          0.5: 'rgba(255, 255, 255, 0.5)',
          0.75: 'rgba(255, 255, 255, 0.75)',
          0.85: 'rgba(255, 255, 255, 0.85)',
          1: 'rgba(255, 255, 255, 1)',
        },
      },
      borderRadius: {
        10: "10px",
        15: "15px",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        'default': '0px 0px 5px 5px rgba(0, 0, 0, 0.25)',
        'y-axis': '0px 5px 5px 0px rgba(0, 0, 0, 0.5)',
        'spread': '-4px 4px 10px 5px rgba(0, 0, 0, 0.35)',
        'spread-2': '-4px 4px 10px 5px rgba(0, 0, 0, 0.6)',
      },
      translate: {
        '7/5': '140%',
      },
      animation: {
        'scale-110': 'scale-110 8s ease-in-out forwards',
        'slide-to-right': 'slide-to-right 0.3s ease-in-out forwards',
        'slide-to-left': 'slide-to-left 0.3s ease-in-out forwards',
      },
      keyframes: {
        'scale-110': {
          '0%': { backgroundSize: '100%' },
          '20%': { backgroundSize: '115%' },
          '100%': { backgroundSize: '100%' },
        },
        'slide-to-right': {
          '0%': { left: '0px' },
          '100%': { right: '0px' },
        },
        'slide-to-left': {
          '0%': { right: '0px' },
          '100%': { left: '0px' },
        },
      },
    },
  },
  plugins: [],
}

