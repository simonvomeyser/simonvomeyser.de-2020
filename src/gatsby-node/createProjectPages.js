const path = require('path')
const { languages } = require('../i18n/locales')
const projectPageTemplate = path.resolve(`src/templates/project-page.js`)
const redirect = path.resolve('src/i18n/redirect.js')

module.exports = (createPage, result) => {
  const englishProjects = result.data.en.edges // english used as default
  const germanProjects = result.data.de.edges

  if (germanProjects.length !== englishProjects.length) {
    return Promise.reject('A project is not translated, this will cause errors')
  }

  englishProjects.forEach(({ node }, index) => {
    const englishProject = node
    const germanProject = germanProjects[index].node

    // Redirect on URL withoug lang key
    createPage({
      path: '/projects/' + englishProject.frontmatter.key,
      component: redirect,
      context: {
        languages,
        locale: '',
        routed: false,
      },
    })
    // English page
    createPage({
      path: '/en/projects/' + englishProject.frontmatter.key,
      context: {
        locale: 'en',
        html: englishProject.html,
        frontmatter: englishProject.frontmatter,
        languages,
        originalPath: '/projects/' + englishProject.frontmatter.key,
      },
      component: projectPageTemplate,
    })
    // German Page
    createPage({
      path: '/de/projects/' + germanProject.frontmatter.key,
      context: {
        locale: 'de',
        html: germanProject.html,
        frontmatter: germanProject.frontmatter,
        languages,
        originalPath: '/projects/' + englishProject.frontmatter.key,
      },
      component: projectPageTemplate,
    })
  })
}
