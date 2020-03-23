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

      const translatedPath = getTranslatedPath(page.path, language)

      const localePage = {
        ...page,
        path: translatedPath,
        context: {
          language: language,
        },
      }
      createPage(localePage)
    })

    resolve()
  })
}
