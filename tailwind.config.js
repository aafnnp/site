module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './_playground/**/*.{js,ts,jsx,tsx}',
    './_challenges/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        twitter: 'rgb(29, 155, 240)'
      },
    },
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: []
}
