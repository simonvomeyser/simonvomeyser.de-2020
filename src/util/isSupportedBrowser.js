export const isSupportedBrowser = () => {
  if (typeof window === 'undefined') {
    return true
  }

  const Bowser = require('bowser')
  const browser = Bowser.getParser(window.navigator.userAgent)
  return browser.satisfies({
    // declare browsers per OS
    windows: {
      'internet explorer': '<11',
    },
    // per platform (mobile, desktop or tablet)
    mobile: {
      safari: '>=9',
      'android browser': '>4.4',
    },

    // or in general
    chrome: '>=29',
    firefox: '>28',
    opera: '>=17',
    safari: '>=9',
    edge: '>=12',
  })
}
