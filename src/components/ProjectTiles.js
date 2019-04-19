import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'
import { on } from 'util/breakpoint'
import { withIntl, Link } from 'i18n'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default class ProjectTiles extends Component {
  renderList = data => {
    const images = data.allFile.edges
    return (
      <StyledProjectTiles>
        {this.props.projects.map(({ node }) => {
          return (
            <StyledProjectTiles.Item key={node.frontmatter.key}>
              <StyledPreviewImage>
                <Img fluid={this.getImage(images, node.frontmatter.logo)} />
              </StyledPreviewImage>
            </StyledProjectTiles.Item>
          )
        })}
      </StyledProjectTiles>
    )
  }
  render() {
    return <StaticQuery query={query} render={this.renderList} />
  }
  getImage = (images, key) => {
    const image = images.filter(({ node }) => {
      return key.includes(node.name)
    })
    return image.length ? image[0].node.childImageSharp.fluid : ''
  }
}

const StyledProjectTiles = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  ${on('onlyTablet')} {
    grid-template-columns: 1fr 1fr;
  }
  ${on('onlyMobile')} {
    grid-template-columns: 1fr;
  }
`

StyledProjectTiles.Item = styled.li`
  padding-top: 63%;
  position: relative;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

  h2 {
    font-size: ${vars.styles.fontSizes.size6};
    text-align: center;
    color: ${vars.styles.colors.neutral3};
    margin-bottom: 1rem;
  }
  p {
    font-size: ${vars.styles.fontSizes.size3};
    background: ${vars.styles.colors.neutral8};
    padding: 0.5rem;
  }
`

const StyledPreviewImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
