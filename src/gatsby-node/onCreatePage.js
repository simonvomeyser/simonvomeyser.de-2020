const path = require('path');
const { languages } = require('../i18n/locales')
const paths = require('../i18n/locales/paths')

module.exports = ({ page, actions }) => {

  if (page.path.includes('404') || page.path === '/') {
    return Promise.resolve()
  }

  return createTwoPagesWithTranslatedURL(page, actions);

}

const createTwoPagesWithTranslatedURL = (page, actions) => {
  const { createPage, deletePage } = actions

  // create for all languages a page with TRANSLATED url
  // Wrap this page into the SetLanguage HOC with the currently active page


  return new Promise((resolve) => {

    deletePage(page)

    languages.forEach(({ value: language }) => {

      const translatedPath = paths[page.path][language];

      const localePage = {
        ...page,
        path: `/${translatedPath}/`,
        context: {
          language: language,
          hasTranslatedURL: true,
        },
      }
      createPage(localePage)
    })
    resolve()
  })

}
