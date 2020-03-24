import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import React from 'react';
import { on } from 'src/util/breakpoint';
import styled from 'styled-components';

export default function AboutMeImage() {
    const data = useStaticQuery(
        graphql`
        query {
            fileDesktop: file(relativePath: { eq: "about-me-1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            fileMobile: file(relativePath: { eq: "about-me-1-mobile.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `
    )
    return (
        <>
            <StyledAboutMeImg
                fluid={data.fileDesktop.childImageSharp.fluid}
                desktop
            />
            <StyledAboutMeImg fluid={data.fileMobile.childImageSharp.fluid} />
        </>
    )
}

const StyledAboutMeImg = styled(Img)`
  display: ${props => (props.desktop ? 'block' : 'none')};

  ${on('onlyMobile')} {
    display: ${props => (props.desktop ? 'none' : 'block')};
  }
`
