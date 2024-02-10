/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// npx tailwind init
// npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch   => for apply css