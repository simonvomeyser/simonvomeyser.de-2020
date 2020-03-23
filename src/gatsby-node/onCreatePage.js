const { languages } = require('../i18n/locales')
const { isTranslatedPath, getTranslatedPath } = require('../i18n/translatedPathHelper')

module.exports = ({ page, actions }) => {

  if (isTranslatedPath(page.path)) {
    return createTwoPagesWithTranslatedPath(page, actions);
  }
  return Promise.resolve()
}

const createTwoPagesWithTranslatedPath = (page, actions) => {
  const { createPage, deletePage } = actions

  return new Promise((resolve) => {

    deletePage(page)

    languages.forEach(({ value: language }) => {

      createPage({
        ...page,
        path: getTranslatedPath(page.path, language),
        context: {
          language
        }
      })
    })

    resolve()
  })
}
