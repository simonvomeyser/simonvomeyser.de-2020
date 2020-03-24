import { graphql } from 'gatsby'

export default graphql`
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