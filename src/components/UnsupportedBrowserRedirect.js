import React from 'react'
import { isSearchEngineBot } from '../util/isSearchEngineBot'
import { isSupportedBrowser } from '../util/isSupportedBrowser'

export default function UnsupportedBrowserRedirect() {
  if (!isSearchEngineBot() && !isSupportedBrowser()) {
    window.location.href = 'https://legacy.simonvomeyser.de'
  }
  return null
}
