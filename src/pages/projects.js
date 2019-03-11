import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'

class SecondPage extends React.Component {
  getLocalizedProjects = () => {
    const { locale } = this.props.pageContext
    const allLangProjects = this.props.data.allMarkdownRemark.edges
    return allLangProjects.filter(project => {
      return project.node.fileAbsolutePath.includes(`projects/${locale}`)
    })
  }
  render() {
    const projects = this.getLocalizedProjects()
    return (
      <Layout>
        <PageLayout>
          <ChangeTitle additionalText="navigationProjects" />
          <h1>Projects</h1>
          <ul>
            {projects.map(({ node }) => {
              return (
                <li key={node.frontmatter.key}>
                  <Link to={'/projects/' + node.frontmatter.key}>
                    {node.frontmatter.name} ({node.frontmatter.excerpt})
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link to="/">Go back to the homepage</Link>
        </PageLayout>
      </Layout>
    )
  }
}

export default withIntl(SecondPage)

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/projects).*/" } }
    ) {
      totalCount
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
