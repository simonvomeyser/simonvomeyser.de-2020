import React, { Component } from 'react'
import { withIntl, Link } from 'i18n'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'
import { Backlink } from '../components/Backlink'
import { vars } from 'util/vars'
import { StyledPageHeading } from '../styled-components'

class ProjectPage extends Component {
  render() {
    const frontmatter = this.props.pageContext.frontmatter
    const html = this.props.pageContext.html

    return (
      <Layout>
        <ChangeTitle additionalText={frontmatter.name} />
        <PageLayout>
          <StyledMarginWrapper>
            <Backlink to="/projects">Back</Backlink>
          </StyledMarginWrapper>
          <StyledMarginWrapper>
            <StyledPageHeading>{frontmatter.name}</StyledPageHeading>
          </StyledMarginWrapper>
          {frontmatter.link ? (
            <StyledLinkToProject
              href={frontmatter.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {frontmatter.link}
            </StyledLinkToProject>
          ) : null}

          <p dangerouslySetInnerHTML={{ __html: html }} />
          <ul>
            {this.getFilteredTechnologies().map(({ node }) => {
              return (
                <li key={node.frontmatter.key}>
                  <Link to={'/projects/' + node.frontmatter.key}>
                    {node.frontmatter.name} ({node.html})
                  </Link>
                </li>
              )
            })}
          </ul>
        </PageLayout>
      </Layout>
    )
  }
  /**
   * Filters out technologies not belonging to project and those that don't have the right locale
   */
  getFilteredTechnologies = () => {
    const allTechnologies = this.props.data.allMarkdownRemark.edges
    const technologiesOfProject = this.props.pageContext.frontmatter
      .technologies
    return allTechnologies.filter(({ node }) => {
      const hasRightLocale = node.fileAbsolutePath.includes(
        'technologies/' + this.props.pageContext.locale
      )
      const belongsToProject = technologiesOfProject.includes(
        node.frontmatter.key
      )

      return hasRightLocale && belongsToProject
    })
  }
}

const StyledMarginWrapper = styled.div`
  margin-bottom: 1rem;
`
const StyledLinkToProject = styled.a`
  font-size: ${vars.styles.fontSizes.size6};
`

export default withIntl(ProjectPage)

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/technologies).*/" } }
    ) {
      totalCount
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
`
