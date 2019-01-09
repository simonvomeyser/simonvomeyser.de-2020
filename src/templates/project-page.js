import React, { Component } from 'react'
import { withIntl, Link } from '../i18n'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class ProjectPage extends Component {
  render() {
    // const frontmatter = this.props.pageContext.frontmatter[this.props.pageContext.locale];
    // const html = this.props.pageContext.html[this.props.pageContext.locale];
    console.log("in project page");
    console.log(this.props.pageContext);
    return (
      <Layout>
        <h1>hello test</h1>
      </Layout>
    )
  }
  getFilteredTechnologies = () => {
    const allTechnologies = this.props.data.allMarkdownRemark.edges;
    const technologiesOfProject = this.props.pageContext.frontmatter[this.props.pageContext.locale].technologies;
    return allTechnologies.filter(({node}) => {
      return !!technologiesOfProject.indexOf(node.frontmatter.key);
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