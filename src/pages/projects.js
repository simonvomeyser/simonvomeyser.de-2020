import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'
import {
  StyledContainer,
  StyledPageHeading,
  StyledTextSection,
} from '../styled-components'
import ProjectTiles from '../components/ProjectTiles'
import { FormattedMessage } from 'react-intl'

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
                <p>
                  Hier eine kleine Auswahl der Projekte, an denen ich beteiligt
                  war. Nicht alle wurden vollständig von mir umgesetzt, aber ich
                  hatte definitv meine Finger im Spiel.
                </p>
                <p>
                  Klick die Projekte an um mehr zu erfahren oder benutz die
                  Suche, 🙂
                </p>
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
      sort: { fields: [frontmatter___year, frontmatter___month], order: DESC }
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
