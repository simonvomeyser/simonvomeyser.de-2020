import { isSSR } from './isSSR'

export const isSupportedBrowser = () => {
  if (isSSR()) {
    return true
  }

  const Bowser = require('bowser')
  const browser = Bowser.getParser(window.navigator.userAgent)
  return browser.satisfies({
    mobile: {
      safari: '>=9',
      'android browser': '>4.4',
    },
    // Don't support any IE, the target group should use a modern browser
    ie: '>11',
    // Add browsers upporting grid from these version
    chrome: '>=29',
    firefox: '>28',
    opera: '>=17',
    safari: '>=9',
    edge: '>=12',
  })
}
