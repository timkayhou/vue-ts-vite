module.exports = {
  theme: {
    colors: {
      gray: 'colors.coolGray',
      blue: 'colors.lightBlue',
      red: 'colors.rose',
      pink: 'colors.fuchsia'
    },
    fontFamily: {
      helvetica: ['Avenir', 'Helvetica'],
      sans: ['Arial', 'sans-serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: {
    tailwindcss: { config: './tailwindcss-config.ts' }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['focus-visible', 'first'],
      textColor: ['visited']
    }
  }
}
