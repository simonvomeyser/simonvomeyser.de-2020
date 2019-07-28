import React from 'react'
import { graphql } from 'gatsby'
import { withIntl, Link } from 'i18n'
import Layout from 'components/Layout'
import ChangeTitle from '../components/ChangeTitle'
import PageLayout from 'components/PageLayout'
import { StyledPageHeading, StyledSubHeadingText } from '../styled-components'
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
          <StyledPageHeading>
            <FormattedMessage id="navigationProjects" />
          </StyledPageHeading>
          <StyledSubHeadingText>
            <p>
              Hier eine kleine Auswahl der Projekte, an denen ich beteiligt war.
              Nicht alle wurden vollständig von mir umgesetzt, aber ich hatte
              definitv meine Finger im Spiel.
            </p>
            <p>
              Klick die Projekte an um mehr zu erfahren oder benutz die Suche,
              🙂
            </p>
          </StyledSubHeadingText>
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
