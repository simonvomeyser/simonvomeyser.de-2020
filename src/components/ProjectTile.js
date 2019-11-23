import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { Link } from 'i18n'
import Img from 'gatsby-image'
import { ExternalLink as ExternalLinkSvg } from '../svg'
import ExternalLink from './ExternalLink'

export default class ProjectTile extends Component {
  render() {
    const project = this.props.node.frontmatter
    const projectUrl = '/projects/' + project.key
    return (
      <StyledWrapper>
        <StyledLinkToProject to={projectUrl}>&nbsp;</StyledLinkToProject>
        <StyledPreviewImageWrapper>
          <StyledPreviewImage>
            <Img fluid={this.props.image} />
          </StyledPreviewImage>
          <StyledExternalLinkWrapper>
            <ExternalLink href={project.link}>
              <ExternalLinkSvg />
            </ExternalLink>
          </StyledExternalLinkWrapper>
        </StyledPreviewImageWrapper>
        <StyledContent>
          <StyledYear>{project.year}</StyledYear>
          <h2>{project.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: project.excerpt }} />
        </StyledContent>
      </StyledWrapper>
    )
  }
}

const StyledExternalLinkWrapper = styled.div`
  display: block;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${vars.styles.colors.neutral4};
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

// Not used for now, add as a feature later
const StyledLinkToProject = styled(Link)`
  display: none;
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
`
const StyledPreviewImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`
const StyledYear = styled.div`
  font-size: ${vars.styles.fontSizes.size1};
  color: ${vars.styles.colors.neutral3};
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
    margin-bottom: 0.75rem;
  }
  p {
    font-size: ${vars.styles.fontSizes.size2};
    font-weight: 300;
    color: ${vars.styles.colors.neutral4};
    margin-bottom: 1rem;
  }
`
