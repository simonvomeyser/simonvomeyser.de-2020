export const isSearchEngineBot = () => {
  if (typeof window === 'undefined') {
    return false
  }

  return /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(
    navigator.userAgent
  )
}
