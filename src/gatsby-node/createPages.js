const path = require('path');
const allProjectsByLangQuery = require('./queries/allProjectsByLang');

module.exports = ({ actions, graphql }) => {
    const { createPage } = actions
    
    const projectPageTemplate = path.resolve(`src/templates/project-page.js`);
    
    // Get all english and german pages
    return graphql(allProjectsByLangQuery)
        .then(result => {
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