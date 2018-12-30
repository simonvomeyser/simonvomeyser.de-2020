const path = require('path');
const allProjectsByLangQuery = require('./queries/allProjectsByLang');
const { languages } = require('../i18n/locales')

module.exports = ({ actions, graphql }) => {
    const { createPage } = actions
    
    const projectPageTemplate = path.resolve(`src/templates/project-page.js`);
    const redirect = path.resolve('src/i18n/redirect.js')
    
    // Get all english and german pages
    return graphql(allProjectsByLangQuery)
        .then(result => {
            if (result.errors) {
                return Promise.reject(result.errors)
            }

            const englishProjects = result.data.en.edges; // english used as default
            const germanProjects = result.data.de.edges;
            
            englishProjects.forEach(({ node }) => {
                createPage({
                    path: '/projects/' + node.frontmatter.key,
                    component: redirect,
                    context: {
                        languages,
                        locale: '',
                        routed: false
                    }
                })
                
                // todo: loop over languages, create both actual pages
                createPage({
                    path: '/en/projects/' + node.frontmatter.key,
                    component: projectPageTemplate,
                    context: {
                        html: node.html,
                        frontmatter: node.frontmatter
                    }, // additional data can be passed via context
                })
            })
        })
    }