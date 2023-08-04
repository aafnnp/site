module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
    './_playground/**/*.{js,ts,jsx,tsx}',
    './_challenges/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        twitter: 'rgb(29, 155, 240)',
        primary: '#232946',
        text: '#b8c1ec',
        emphasis: '#F44336',
        assist: '#fffffe',
        highlight: '#d4939d'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
