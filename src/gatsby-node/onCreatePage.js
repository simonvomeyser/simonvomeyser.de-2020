const path = require('path');
const { languages } = require('../i18n/locales')

module.exports = ({ page, actions }) => {

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return createTwoPagesWithTranslatedURL(page, actions);

}

const createTwoPagesWithTranslatedURL = (page, actions) => {
  const { createPage, deletePage } = actions

  // todo
  // delte actual page
  // create for all languages a page with TRANSLATED url
  // Wrap this page into the SetLanguage HOC with the currently active page

  return new Promise(resolve => {
    const redirect = path.resolve('src/i18n/redirect.js')
    const redirectPage = {
      ...page,
      component: redirect,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path,
      },
    }
    deletePage(page)
    createPage(redirectPage)

    languages.forEach(({ value }) => {
      const localePage = {
        ...page,
        originalPath: page.path,
        path: `/${value}${page.path}`,
        context: {
          languages,
          locale: value,
          routed: true,
          originalPath: page.path,
        },
      }
      createPage(localePage)
    })

    resolve()
  })

}
