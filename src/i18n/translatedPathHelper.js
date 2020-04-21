const paths = require('./locales/paths')


// 'about-me' and 'ueber-mich' should both return 'true'
exports.isTranslatedPath = (path) => {
  return !!getPathKey(path)
}

exports.getTranslatedPath = (path, language) => {
  const translations = paths[getPathKey(path)];

  if (!translations) {
    return null
  }

  if (!language) {
    return translations
  }

  return `/${translations[language]}/`
}

function purifyPath(path) {
  return path.replace(/\//g, '')
}

function getPathKey(path) {
  const purePath = purifyPath(path)
  let matchingPathKey = null

  for (pathKey in paths) {
    if (paths[pathKey].en === purePath || paths[pathKey].de === purePath) {
      matchingPathKey = pathKey;
    }
  }
  return matchingPathKey;

}

exports.getPathKey = getPathKey;