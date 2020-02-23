import React from 'react'
import { isSearchEngineBot } from '../util/isSearchEngineBot'
import { isUnsupportedBrowser } from '../util/isUnsupportedBrowser'

export default function UnsupportedBrowserRedirect() {
  if (!isSearchEngineBot() && isUnsupportedBrowser()) {
    window.location.href = 'https://legacy.simonvomeyser.de'
  }
  return null
}
