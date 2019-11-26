import React, { Component } from 'react'
import styled from 'styled-components'
import { on } from 'util/breakpoint'
import { StaticQuery, graphql } from 'gatsby'
import ProjectTile from './ProjectTile'

export default class ProjectTiles extends Component {
  renderList = data => {
    const images = data.allFile.edges
    return (
      <StyledProjectTiles>
        {this.props.projects.map(({ node }) => {
          const currentImage = this.getImage(images, node.frontmatter.logo)
          return (
            <StyledProjectTiles.Item key={node.frontmatter.key}>
              <ProjectTile image={currentImage} node={node} />
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  ${on('onlyMobile')} {
    grid-template-columns: 1fr;
  }
`

StyledProjectTiles.Item = styled.li`
  position: relative;
`

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "projects" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
