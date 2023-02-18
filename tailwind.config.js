module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './_playground/**/*.{js,ts,jsx,tsx}',
    './_challenges/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        twitter: 'rgb(29, 155, 240)',
        brand: '#FF506E',
        dark: '#1E293B',
        mid: '#475569',
        light: '#F1F5F9'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
//#1d9bf0 #6F8EFF #F55F9C
