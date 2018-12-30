const path = require('path');

module.exports = ({ actions, graphql }) => {
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