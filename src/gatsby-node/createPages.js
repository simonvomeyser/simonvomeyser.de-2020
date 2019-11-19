const allProjectsByLangQuery = require('../queries/allProjectsByLang')

module.exports = ({ actions, graphql }) => {
  const { createPage } = actions

  // Get all english and german pages
  return graphql(allProjectsByLangQuery()).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    require('./createProjectPages')(createPage, result)
    require('./createGermanPageURLs')(createPage)
  })
}
