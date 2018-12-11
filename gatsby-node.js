const path = require('path');

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
          path: node.frontmatter.key,
          component: projectPageTemplate,
          context: {
            html: node.html,
            name: node.frontmatter.name
          }, // additional data can be passed via context
        })
      })
  })
}