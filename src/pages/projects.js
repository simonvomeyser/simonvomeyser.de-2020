import { graphql } from 'gatsby'
import React from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import PageLayout from 'src/components/PageLayout'
import ChangeTitle from '../components/ChangeTitle'
import ProjectTiles from '../components/ProjectTiles'
import { StyledContainer, StyledPageHeading, StyledTextSection } from '../styled-components'

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
      <>
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
      </>
    )
  }
}

export default Projects

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
