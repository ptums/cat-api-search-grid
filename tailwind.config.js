const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  /** Improves the performance of tailwind **/
  /** Generates CSS on demand rather */
  mode: 'jit',
  /** Look to files in these directories to apply tailwind  **/
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Catamaran', ...defaultTheme.fontFamily.sans],
    },
    /** Adding a new breakpoint or dark mode balloons the size of the tailwind css file */
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
}
