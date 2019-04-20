import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'
import { on } from 'util/breakpoint'
import { withIntl, Link } from 'i18n'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import posed from 'react-pose'

export default class ProjectTiles extends Component {
  renderList = data => {
    const images = data.allFile.edges
    return (
      <StyledProjectTiles>
        {this.props.projects.map(({ node }) => {
          const currentImage = this.getImage(images, node.frontmatter.logo)
          return (
            <StyledProjectTiles.Item key={node.frontmatter.key}>
              <StyledPreviewImage>
                <Img fluid={currentImage} />
              </StyledPreviewImage>
              <PosedTileContent>
                <Img fluid={currentImage} />
                <PosedTileContentDrawer>
                  <h2>{node.frontmatter.name}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.excerpt,
                    }}
                  />
                </PosedTileContentDrawer>
              </PosedTileContent>
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
`

const StyledPreviewImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`

const StyledTileContent = styled.div`
  position: absolute;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.4);

  h2 {
    font-size: ${vars.styles.fontSizes.size6};
    text-align: center;
    color: ${vars.styles.colors.neutral3};
    background: ${vars.styles.colors.neutral8};
    padding: 1rem;
  }
  p {
    font-size: ${vars.styles.fontSizes.size3};
    background: ${vars.styles.colors.neutral8};
    padding: 0.5rem;
  }
`

const PosedTileContent = posed(StyledTileContent)({
  hoverable: true,
  init: {
    opacity: 0,
    width: '100%',
    left: 0,
    top: 0,
    height: '120%',
    'z-index': 1,
  },
  hover: {
    width: '120%',
    left: '-10%',
    top: '-10%',
    'z-index': 2,
    opacity: 1,
    height: 'auto',
    transition: {
      height: { delay: 200, ease: 'easeOut' },
      opacity: { ease: 'easeOut', duration: 100 },
    },
  },
})

const PosedTileContentDrawer = posed.div({
  init: {
    opacity: 0,
    y: '-100%',
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      y: { delay: 200, ease: 'easeOut' },
      opacity: { ease: 'easeOut', delay: 200 },
    },
  },
})

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
