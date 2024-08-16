// tailwind.config.js
module.exports = {
  darkMode: 'class', // Habilita el modo oscuro usando la clase 'dark'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir las rutas correctas
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'rgb(83 101 37)',
          dark: 'rgb(185 207 131)',
        },
        'primary-container': {
          light: 'rgb(213 236 157)',
          dark: 'rgb(59 77 15)',
        },
        'on-primary': {
          light: 'rgb(255 255 255)',
          dark: 'rgb(39 53 0)',
        },
        'on-primary-container': {
          light: 'rgb(21 31 0)',
          dark: 'rgb(213 236 157)',
        },
        secondary: {
          light: 'rgb(90 97 71)',
          dark: 'rgb(195 202 170)',
        },
        'on-secondary': {
          light: 'rgb(255 255 255)',
          dark: 'rgb(44 51 28)',
        },
        'secondary-container': {
          light: 'rgb(223 230 197)',
          dark: 'rgb(67 74 49)',
        },
        'on-secondary-container': {
          light: 'rgb(24 30 9)',
          dark: 'rgb(223 230 197)',
        },
        tertiary: {
          light: 'rgb(57 102 95)',
          dark: 'rgb(161 208 199)',
        },
        'on-tertiary': {
          light: 'rgb(255 255 255)',
          dark: 'rgb(2 55 49)',
        },
        'tertiary-container': {
          light: 'rgb(188 236 227)',
          dark: 'rgb(32 78 72)',
        },
        'on-tertiary-container': {
          light: 'rgb(0 32 28)',
          dark: 'rgb(188 236 227)',
        },
        error: {
          light: 'rgb(186 26 26)',
          dark: 'rgb(255 180 171)',
        },
        'on-error': {
          light: 'rgb(255 255 255)',
          dark: 'rgb(105 0 5)',
        },
        'error-container': {
          light: 'rgb(255 218 214)',
          dark: 'rgb(147 0 10)',
        },
        'on-error-container': {
          light: 'rgb(65 0 2)',
          dark: 'rgb(255 218 214)',
        },
        background: {
          light: 'rgb(250 250 238)',
          dark: 'rgb(18 20 13)',
        },
        'on-background': {
          light: 'rgb(27 28 21)',
          dark: 'rgb(227 227 215)',
        },
        surface: {
          light: 'rgb(250 250 238)',
          dark: 'rgb(18 20 13)',
        },
        'on-surface': {
          light: 'rgb(27 28 21)',
          dark: 'rgb(227 227 215)',
        },
        'surface-variant': {
          light: 'rgb(226 228 212)',
          dark: 'rgb(69 72 60)',
        },
        'on-surface-variant': {
          light: 'rgb(69 72 60)',
          dark: 'rgb(198 200 184)',
        },
        outline: {
          light: 'rgb(118 120 107)',
          dark: 'rgb(144 146 132)',
        },
        'outline-variant': {
          light: 'rgb(198 200 184)',
          dark: 'rgb(69 72 60)',
        },
        shadow: {
          light: 'rgb(0 0 0)',
          dark: 'rgb(0 0 0)',
        },
        scrim: {
          light: 'rgb(0 0 0)',
          dark: 'rgb(0 0 0)',
        },
        'inverse-surface': {
          light: 'rgb(47 49 41)',
          dark: 'rgb(227 227 215)',
        },
        'inverse-on-surface': {
          light: 'rgb(242 241 229)',
          dark: 'rgb(47 49 41)',
        },
        'inverse-primary': {
          light: 'rgb(185 207 131)',
          dark: 'rgb(83 101 37)',
        },
        'surface-dim': {
          light: 'rgb(219 219 207)',
          dark: 'rgb(18 20 13)',
        },
        'surface-bright': {
          light: 'rgb(250 250 238)',
          dark: 'rgb(56 58 50)',
        },
        'surface-container-lowest': {
          light: 'rgb(255 255 255)',
          dark: 'rgb(13 15 8)',
        },
        'surface-container-low': {
          light: 'rgb(244 244 232)',
          dark: 'rgb(27 28 21)',
        },
        'surface-container': {
          light: 'rgb(239 239 226)',
          dark: 'rgb(31 32 25)',
        },
        'surface-container-high': {
          light: 'rgb(233 233 221)',
          dark: 'rgb(41 43 35)',
        },
        'surface-container-highest': {
          light: 'rgb(227 227 215)',
          dark: 'rgb(52 54 45)',
        },
      },
    },
  },
  plugins: [],
}