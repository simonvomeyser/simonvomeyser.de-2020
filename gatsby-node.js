const path = require('path')
const createPages = require('./src/gatsby-node/createPages')
const onCreatePage = require('./src/gatsby-node/onCreatePage')

exports.onCreatePage = onCreatePage
exports.createPages = createPages

// Makes it possible to have absoulte imports
// https://www.gatsbyjs.org/docs/add-custom-webpack-config/#absolute-imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
