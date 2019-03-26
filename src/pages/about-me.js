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
        </StyledBackgroundWrapper.Left>
        <StyledBackgroundWrapper.Right>
          <Img fluid={data.file.childImageSharp.fluid} />
        </StyledBackgroundWrapper.Right>
      </StyledBackgroundWrapper>
    </PageLayout>
  </Layout>
)
export default withIntl(AboutMePage)

const StyledPageHeading = styled.h1`
  font-size: ${vars.styles.fontSizes.size7};
  font-family: ${vars.styles.fontFamilies.special};
  color: ${vars.styles.colors.accent4};
  margin-bottom: 3rem;
  text-align: center;
`

const StyledBackgroundWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  z-index: ${vars.styles.zIndices.base};
  display: flex;
`

StyledBackgroundWrapper.Image = styled(AboutMeBackgroundSvg)`
  position: absolute;
  top: -3rem;
  z-index: -1;
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
