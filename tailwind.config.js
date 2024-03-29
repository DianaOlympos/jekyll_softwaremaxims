const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './_site/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './_unpublished/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    colors: {
      blue: {
        10: '#f0f5fc',
        20: '#cfe0fc',
        30: '#accbfc',
        40: '#84b1fa',
        50: '#5691f0',
        60: '#3272d9',
        70: '#1d5bbf',
        80: '#114599',
        90: '#103570',
        100: '#15233b'
      },
      bronze: {
        10: '#fcf2e6',
        20: '#fad8af',
        30: '#f5bc76',
        40: '#e89c3f',
        50: '#cf7911',
        60: '#ad5f00',
        70: '#8a4d03',
        80: '#693d07',
        90: '#4d2f0b',
        100: '#33210c'
      },
      dusk: {
        10: '#f4f2f7',
        20: '#e3dcf7',
        30: '#cec2f0',
        40: '#b5a6e3',
        50: '#9886cf',
        60: '#7a68b3',
        70: '#645396',
        80: '#4f4178',
        90: '#3a3154',
        100: '#282436'
      },
      gray: {
        10: '#f5f7fa',
        20: '#ebeff5',
        30: '#dde3ed',
        40: '#c8d1e0',
        50: '#afbacc',
        60: '#8e99ab',
        70: '#707a8a',
        80: '#58606e',
        90: '#434a54',
        100: '#333840'
      },
      green: {
        10: '#e1faeb',
        20: '#abedc5',
        30: '#7ddba3',
        40: '#57c282',
        50: '#3ba164',
        60: '#2a854e',
        70: '#20693d',
        80: '#1a5230',
        90: '#153d25',
        100: '#112b1b'
      },
      indigo: {
        10: '#f2f2fc',
        20: '#dcdcfc',
        30: '#c2c2fc',
        40: '#a7a7fa',
        50: '#8585f2',
        60: '#6767e6',
        70: '#4d4dd1',
        80: '#3737b3',
        90: '#28288a',
        100: '#202057'
      },
      magenta: {
        10: '#faf0f4',
        20: '#fad4e4',
        30: '#fab4d1',
        40: '#f78bb8',
        50: '#ed5393',
        60: '#d6246e',
        70: '#b01355',
        80: '#8a1244',
        90: '#611535',
        100: '#421527'
      },
      purple: {
        10: '#f5f0fa',
        20: '#ead9fa',
        30: '#dabcf7',
        40: '#c79bf2',
        50: '#ae74e8',
        60: '#9656d6',
        70: '#7d3cbd',
        80: '#642b9e',
        90: '#4b2175',
        100: '#371c52'
      },
      red: {
        10: '#faf0f0',
        20: '#fad4d4',
        30: '#fab6b6',
        40: '#fa8e8e',
        50: '#f55353',
        60: '#de1b1b',
        70: '#b80d0d',
        80: '#8f0e0e',
        90: '#661414',
        100: '#451717'
      },
      sky: {
        10: '#e8f4fa',
        20: '#bbe5fa',
        30: '#8dd4f7',
        40: '#53baed',
        50: '#229ad6',
        60: '#0c7bb3',
        70: '#066391',
        80: '#064d70',
        90: '#093952',
        100: '#0c2938'
      },
      slate: {
        10: '#edf4f7',
        20: '#cbe3f5',
        30: '#a7ceeb',
        40: '#84b7db',
        50: '#5e95bd',
        60: '#48799c',
        70: '#376180',
        80: '#2d4d63',
        90: '#243947',
        100: '#1d2830'
      },
      teal: {
        10: '#e4f7f6',
        20: '#a8ede9',
        30: '#6cd9d2',
        40: '#45bfb7',
        50: '#28a199',
        60: '#17827b',
        70: '#116963',
        80: '#0d524d',
        90: '#0b3d3a',
        100: '#092b29'
      },
      black: '#1d1f24',
      white: '#ffffff',
      transparent: 'rgba(0,0,0,0)',
      current: 'currentColor'
    },
    extend: {
      fontFamily: {
        'sans': ["Karla", ...defaultTheme.fontFamily.sans],
        'serif': [...defaultTheme.fontFamily.serif],
        'mono': [...defaultTheme.fontFamily.mono]
      },
    },
  },
  plugins: [
  ],
}