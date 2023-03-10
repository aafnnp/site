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
        primary: '#FFFFFF',
        text: '#333333',
        emphasis: '#F44336F44336',
        assist: '#EFEFEF',
        shadow: '#ffffff',
        highlight: '#000000'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
