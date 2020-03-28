import { isSSR } from './isSSR'

export const isSupportedBrowser = () => {
  if (isSSR()) {
    return true
  }

  const Bowser = require('bowser')
  const browser = Bowser.getParser(window.navigator.userAgent)
  return browser.satisfies({
    // Don't support any IE - using flexbox and grid extensively
    windows: {
      'internet explorer': '>11',
    },
    mobile: {
      safari: '>=9',
      'android browser': '>4.4',
    },
    chrome: '>=29',
    firefox: '>28',
    opera: '>=17',
    safari: '>=9',
    edge: '>=12',
  })
}
