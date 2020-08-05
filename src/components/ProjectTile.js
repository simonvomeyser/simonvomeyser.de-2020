import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import Img from 'gatsby-image'
import { ExternalLink as ExternalLinkSvg } from '../svg'
import ExternalLink from './ExternalLink'

export default class ProjectTile extends Component {
  render() {
    const project = this.props.node.frontmatter
    const content = this.props.node.html
    return (
      <StyledWrapper>
        <StyledPreviewImageWrapper>
          <StyledPreviewImage>
            <Img fluid={this.props.image} />
          </StyledPreviewImage>
        </StyledPreviewImageWrapper>
        <StyledContent>
          <StyledExternalLinkWrapper>
            <ExternalLink href={project.link}>
              <ExternalLinkSvg />
            </ExternalLink>
          </StyledExternalLinkWrapper>
          <StyledYear>{project.year}</StyledYear>
          <h2>{project.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </StyledContent>
      </StyledWrapper>
    )
  }
}

const StyledExternalLinkWrapper = styled.div`
  display: block;
  position: absolute;
  right: 0.5rem;
  top: 0;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${vars.styles.colors.neutral6};
  transition: 0.3s all ease-in-out;

  &:hover {
    transform: translateY(-50%) scale3d(1.1, 1.1, 1.1);
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

const StyledTechnologies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  img {
    width: 1rem;
  }

  > div {
    background-color: ${vars.styles.colors.neutral1};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    + div {
      margin-left: 0.5rem;
    }
  }
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
  font-family: ${vars.styles.fontFamilies.special};
  margin-bottom: 0.1rem;
`

const StyledPreviewImageWrapper = styled.div`
  position: relative;
  padding-top: 50%;
  overflow: hidden;
`

const StyledContent = styled.div`
  position: relative;
  padding: 0.75rem;
  h2 {
    font-size: ${vars.styles.fontSizes.size5};
    color: ${vars.styles.colors.black};
    margin-bottom: 0.75rem;
  }
  p {
    font-size: ${vars.styles.fontSizes.size2};
    font-weight: 300;
    line-height: 1.5;
    color: ${vars.styles.colors.neutral4};
    margin-bottom: 1rem;
  }
  a {
    color: ${vars.styles.colors.neutral5};
    text-decoration: underline;
  }
`
