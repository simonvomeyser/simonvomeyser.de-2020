import React from 'react'
import { isSearchEngineBot } from '../util/isSearchEngineBot'

export default function UnsupportedBrowserRedirect() {
  if (typeof window !== undefined) {
    const Bowser = require('bowser')
    const browser = Bowser.getParser(window.navigator.userAgent)
    const isValidBrowser = browser.satisfies({
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

    if (!isSearchEngineBot() && !isValidBrowser) {
      window.location.href = 'https://legacy.simonvomeyser.de'
    }
  }
  return null
}
