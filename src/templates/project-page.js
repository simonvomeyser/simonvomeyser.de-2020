import React, { Component } from 'react'
import { withIntl, Link } from '../i18n'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class ProjectPage extends Component {
  render() {
    const frontmatter = this.props.pageContext.frontmatter;
    const html = this.props.pageContext.html;
    return (
      <Layout>
        <h1>{ frontmatter.name }</h1>
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
        <ul>
         {this.getFilteredTechnologies().map(({ node }) => {
           return (
             <li key={node.frontmatter.key}>
              <Link href={ '/projects/' + node.frontmatter.key }>{ node.frontmatter.name } ({node.html})</Link>
             </li>
           )
         })}
       </ul>
      </Layout>
    )
  }
  /**
   * Filters out technologies not belonging to project and those that don't have the right locale
   */
  getFilteredTechnologies = () => {
    const allTechnologies = this.props.data.allMarkdownRemark.edges;
    const technologiesOfProject = this.props.pageContext.frontmatter.technologies;
    return allTechnologies.filter(({node}) => {

      const hasRightLocale = node.fileAbsolutePath.includes('technologies/'+ this.props.pageContext.locale)
      const belongsToProject = technologiesOfProject.includes(node.frontmatter.key);

      return hasRightLocale && belongsToProject;
      
    })
  }
}

export default withIntl(ProjectPage);

export const query = graphql`
{
  allMarkdownRemark(
  	    filter: {fileAbsolutePath: {regex: "/(content/technologies).*/"}}
  ) {
    totalCount,
    edges {
      node {
        fileAbsolutePath
        frontmatter {
          key
          name
        }
				html
      }
    }
  }
}
`;