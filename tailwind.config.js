const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Catamaran', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  variants: {
    height: ['hover']
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
