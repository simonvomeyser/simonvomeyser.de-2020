import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import styled from 'styled-components'
import { vars } from '../util/vars'
import PolaroidStack from '../components/PolaroidStack'
import AboutMeBackgroundSvg from 'svg/about-me-background.svg'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import { on } from 'util/breakpoint'
import ChangeTitle from '../components/ChangeTitle'

import Img from 'gatsby-image'

export const query = graphql`
  query {
    file(relativePath: { eq: "about-me-1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const AboutMePage = ({ data }) => (
  <Layout>
    <ChangeTitle additionalText="navigationAboutMe" />
    <PageLayout>
      <StyledBackgroundWrapper>
        <StyledBackgroundWrapper.Image> </StyledBackgroundWrapper.Image>
        <StyledBackgroundWrapper.Left>
          <StyledPageHeading>
            <FormattedMessage id="niceToMeetYou" />
          </StyledPageHeading>
          <StyledHeadingQuote>
            <FormattedHTMLMessage id="aboutMeOpener" />
          </StyledHeadingQuote>
          <StyledAboutMeFirstText>
            <FormattedMessage id="aboutMeFirstText" />
          </StyledAboutMeFirstText>
          <StyledButtonWrapper>
            <StyledSecondaryButton>kontaktier mich</StyledSecondaryButton>
            <StyledPrimaryButton>mehr über Simon</StyledPrimaryButton>
          </StyledButtonWrapper>
        </StyledBackgroundWrapper.Left>
        <StyledBackgroundWrapper.Right>
          <Img fluid={data.file.childImageSharp.fluid} />
        </StyledBackgroundWrapper.Right>
      </StyledBackgroundWrapper>
    </PageLayout>
  </Layout>
)
export default withIntl(AboutMePage)

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledButton = styled.button`
  font-size: ${vars.styles.fontSizes.size6};
  font-family: ${vars.styles.fontFamilies.special};
  border: 3px solid ${vars.styles.colors.accent4};
  font-weight: 500;
  padding: 8px 5px;
  min-width: 200px;
`

const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${vars.styles.colors.accent4};
  color: ${vars.styles.colors.white};
`

const StyledSecondaryButton = styled(StyledButton)`
  border: 3px solid ${vars.styles.colors.accent4};
  color: ${vars.styles.colors.accent4};
`

const StyledPageHeading = styled.h1`
  font-size: ${vars.styles.fontSizes.size9};
  font-weight: 500;
  font-family: ${vars.styles.fontFamilies.special};
  color: ${vars.styles.colors.accent4};
  margin-bottom: 3.5rem;
  text-align: center;
`
const StyledHeadingQuote = styled.h2`
  font-size: ${vars.styles.fontSizes.size7};
  font-family: ${vars.styles.fontFamilies.special};
  color: ${vars.styles.colors.neutral5};
  text-align: center;
  margin-bottom: 3rem;
`
const StyledAboutMeFirstText = styled.p`
  line-height: 1.5;
  padding: 0 1rem;
  margin-bottom: 3rem;
`

const StyledBackgroundWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  z-index: ${vars.styles.zIndices.base};
  display: flex;
`

StyledBackgroundWrapper.Image = styled(AboutMeBackgroundSvg)`
  position: absolute;
  top: -4rem;
  z-index: -1;
  width: 300px;
  left: 0;
`

StyledBackgroundWrapper.Left = styled.div`
  z-index: 1;
  width: 60%;
  padding-right: 2rem;
`
StyledBackgroundWrapper.Right = styled.div`
  z-index: 1;
  width: 40%;
`
