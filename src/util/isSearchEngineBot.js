export const isSearchEngineBot = () => {
  return /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(
    navigator.userAgent
  )
}
