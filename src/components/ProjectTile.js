import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { FormattedMessage } from 'react-intl'
import { on } from 'util/breakpoint'
import { withIntl, Link } from 'i18n'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import posed from 'react-pose'
import {
  StyledPrimaryButtonLink,
  StyledSecondaryButtonLink,
} from '../styled-components'

export default class ProjectTile extends Component {
  render() {
    const project = this.props.node.frontmatter
    const projectUrl = '/projects/' + project.key
    return (
      <StyledWrapper>
        <StyledLink to={projectUrl}>&nbsp;</StyledLink>
        <StyledPreviewImageWrapper>
          <StyledPreviewImage>
            <Img fluid={this.props.image} />
          </StyledPreviewImage>
        </StyledPreviewImageWrapper>
        <StyledContent>
          <h2>{project.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: project.excerpt }} />
        </StyledContent>
      </StyledWrapper>
    )
  }
}

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const StyledWrapper = styled.div`
  position: relative;
  box-shadow: 0 4px 6px 1px rgba(0, 0, 0, 0.1);
  background: ${vars.styles.colors.neutral8};
  transition: all 0.3s ease-in-out;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 5px 8px 1px rgba(0, 0, 0, 0.2);
  }
`
const StyledPreviewImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`

const StyledPreviewImageWrapper = styled.div`
  position: relative;
  padding-top: 56.666%;
  overflow: hidden;
`

const StyledContent = styled.div`
  padding: 0.75rem;
  h2 {
    font-size: ${vars.styles.fontSizes.size6};
    color: ${vars.styles.colors.neutral5};
    font-family: ${vars.styles.fontFamilies.special};
    margin-bottom: 0.75rem;
  }
  p {
    font-size: ${vars.styles.fontSizes.size2};
    color: ${vars.styles.colors.neutral3};
    margin-bottom: 1rem;
  }
`