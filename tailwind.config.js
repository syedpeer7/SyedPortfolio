module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'blink': 'blink 1s step-end infinite',
        'timeline': 'timeline 1s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        timeline: {
          '0%': { 
            opacity: 0,
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
};
