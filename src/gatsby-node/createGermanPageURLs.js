const path = require('path')
const { languages } = require('../i18n/locales')

module.exports = createPage => {
  const privacyPolicyPage = path.resolve(`src/pages/privacy-policy.js`)
  const legalNoticePage = path.resolve(`src/pages/legal-notice.js`)

  createPage({
    path: '/de/datenschutz',
    context: {
      locale: 'de',
      languages,
      originalPath: '/de/privacy-policy',
    },
    component: privacyPolicyPage,
  })
  createPage({
    path: '/de/impressum',
    context: {
      locale: 'de',
      languages,
      originalPath: '/de/legal-notice',
    },
    component: legalNoticePage,
  })
}
