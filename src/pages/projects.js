import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from 'src/i18n'
import Layout from 'src/components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'src/components/PageLayout'
import {
  StyledContainer,
  StyledPageHeading,
  StyledTextSection,
} from '../styled-components'
import ProjectTiles from '../components/ProjectTiles'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

class Projects extends React.Component {
  getLocalizedProjects = () => {
    const { locale } = this.props.pageContext
    const allLangProjects = this.props.data.allMarkdownRemark.edges
    return allLangProjects.filter(project => {
      return project.node.fileAbsolutePath.includes(`projects/${locale}`)
    })
  }
  render() {
    const projects = this.getLocalizedProjects()
    const numberOfProjects = projects.length
    const numberOfAllProjects = numberOfProjects + 40
    return (
      <Layout>
        <PageLayout>
          <ChangeTitle translate additionalText="navigationProjects" />
          <StyledContainer>
            <StyledPageHeading>
              <FormattedMessage id="navigationProjects" />
            </StyledPageHeading>
            <StyledContainer small>
              <StyledTextSection>
                <FormattedHTMLMessage
                  id="projectsCopy"
                  values={{ numberOfProjects, numberOfAllProjects }}
                />
              </StyledTextSection>
            </StyledContainer>
          </StyledContainer>
          <ProjectTiles projects={projects} />
        </PageLayout>
      </Layout>
    )
  }
}

export default withIntl(Projects)

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(content/projects).*/" } }
      sort: {
        fields: [frontmatter___year, frontmatter___month]
        order: [DESC, DESC]
      }
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
            year
            link
          }
          html
        }
      }
    }
  }
`
