const path = require('path');
const allProjectsByLangQuery = require('../queries/allProjectsByLang');
const { languages } = require('../i18n/locales')

module.exports = ({ actions, graphql }) => {
    const { createPage } = actions
    
    const projectPageTemplate = path.resolve(`src/templates/project-page.js`);
    const redirect = path.resolve('src/i18n/redirect.js')
    
    // Get all english and german pages
    return graphql(allProjectsByLangQuery())
        .then(result => {
            if (result.errors) {
                return Promise.reject(result.errors)
            }

            const englishProjects = result.data.en.edges; // english used as default
            const germanProjects = result.data.de.edges;

            if (germanProjects.length !== englishProjects.length) {
                return Promise.reject('A Project is not translated, that will cause errors');
            }  
            
            englishProjects.forEach(({ node }, index) => {
                const englishProject = node;
                const germanProject = germanProjects[index].node;

                const pageParams =  {
                    component: projectPageTemplate,
                    context: {
                        html: {
                            en: englishProject.html,
                            de: germanProject.html
                        },
                        frontmatter: {
                            en: englishProject.frontmatter,
                            de: germanProject.frontmatter
                        }
                    }
                }
                
                // Redirect on URL withoug lang key
                createPage({
                    path: '/projects/' + englishProject.frontmatter.key,
                    component: redirect,
                    context: {
                        languages,
                        locale: '',
                        routed: false
                    }
                })
                // English page
                createPage({
                    path: '/en/projects/' + englishProject.frontmatter.key,
                    context: {
                        locale: 'en',
                        // ...pageParams.context,
                    },
                    component: pageParams.component,
                })
                // German Page
                createPage({
                    path: '/de/projects/' + germanProject.frontmatter.key,
                    context: {
                        locale: 'de',
                        // ...pageParams.context,
                    },
                    component: pageParams.component,

                })
            })
        })
    }