import React from 'react'
import * as Bowser from 'bowser'
import { isSearchEngineBot } from '../util/isSearchEngineBot'

export default function UnsupportedBrowserRedirect() {
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

  if (typeof window !== undefined && !isSearchEngineBot() && !isValidBrowser) {
    window.location.href = 'https://legacy.simonvomeyser.de'
  }
  return null
}
