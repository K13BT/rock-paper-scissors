/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark_text: 'hsl(229, 25%, 31%)',
        score_text: 'hsl(229, 64%, 46%)',
        header_outline: 'hsl(217, 16%, 45%)',
        radial_gradient: 'hsl(214, 47%, 23%',
        radial_gradient2: 'hsl(237, 49%, 15%)'
      }
    },
  },
  plugins: [],
}

