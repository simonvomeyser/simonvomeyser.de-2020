const paths = require('./locales/paths')

exports.isTranslatedPath = (path) => {
  const purePath = purifyPath(path)
  return !!paths[purePath];
}

exports.getTranslatedPath = (path, language) => {
  const purePath = purifyPath(path)
  const translations = paths[purePath];

  if (!translations) {
    return null
  }

  if (!language) {
    return translations
  }

  return translations[language]
}

function purifyPath(path) {
  return path.replace(/\//g, '')
}