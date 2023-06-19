/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "Cabin" : 'Cabin',
      "Inter" : "Inter"
    },
    
    extend: {
      backgroundImage: {
        'herolarge': "url('/src/assets/large-bg.png')",
      },
      colors: {
      "white" : "#FFFFFF",
      "mainblue": '#724FE5',
      "maingreen" : "#42E8E0",
      "black" : "#000000",
      "grey" : "#A8A8A8",
      "panelgrey" : "#14151B"
    },
    },
  },
  plugins: [],
}
