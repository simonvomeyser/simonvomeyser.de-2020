import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'
import { on } from 'util/breakpoint'
import { withIntl, Link } from 'i18n'

export default class ProjectTiles extends Component {
  render() {
    return (
      <StyledProjectTiles>
        {this.props.projects.map(({ node }) => {
          return (
            <StyledProjectTiles.Item key={node.frontmatter.key}>
              <Link to={'/projects/' + node.frontmatter.key}>
                <img
                  src={node.frontmatter.logo}
                  alt={node.frontmatter.name + ' list image'}
                />
              </Link>
            </StyledProjectTiles.Item>
          )
        })}
      </StyledProjectTiles>
    )
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
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
