import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'

class SecondPage extends React.Component {
  render() {
    const projects = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <h1>Projects</h1>
        <ul>
          {projects.map(({ node }) => {
            return (
              <li key={node.frontmatter.key}><a href={ '/projects/' + node.frontmatter.key }>{ node.frontmatter.name }</a></li>
            )
          })}
        </ul>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default withIntl(SecondPage);

export const query = graphql`
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
`;