const path = require('path');
const { languages } = require('./src/i18n/locales')

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const projectPageTemplate = path.resolve(`src/templates/project-page.js`);

  return graphql(`
  {
    allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(content/projects).*/"}}
    ) {
      totalCount,
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            key
            logo
            name
            excerpt
            technologies
          }
          html
        }
      }
    }
  }
  `
).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: 'projects/' + node.frontmatter.key,
          component: projectPageTemplate,
          context: {
            html: node.html,
            frontmatter: node.frontmatter
          }, // additional data can be passed via context
        })
      })
  })
}