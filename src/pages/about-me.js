import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import styled from 'styled-components'
import { vars } from '../util/vars'
import AboutMeBackgroundSvg from 'svg/about-me-background.svg'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import ChangeTitle from '../components/ChangeTitle'
import TellMeMoreAboutYou from '../components/TellMeMoreAboutYou'
import { StyledPageHeading, StyledPrimaryButton } from '../styled-components'
import { on } from 'util/breakpoint'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { graphql } from 'gatsby'
import SmoothScroll from 'smooth-scroll'

export const query = graphql`
  query {
    file(relativePath: { eq: "about-me-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

class AboutMePage extends React.Component {
  state = {
    tellMeMoreVisible: false,
  }
  showSecondText = () => {
    this.setState({ tellMeMoreVisible: true }, () => {
      setTimeout(() => {
        const scroll = new SmoothScroll()
        scroll.animateScroll(
          document.getElementById('tell-me-more-area'),
          null,
          {
            speed: 500,
            speedAsDuration: true,
          }
        )
      }, 300)
    })
  }
  render() {
    const { data } = this.props
    return (
      <Layout>
        <ChangeTitle translate additionalText="navigationAboutMe" />
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
                <PosedTellMeMoreButton
                  pose={
                    this.state.tellMeMoreVisible
                      ? 'tellMeMoreVisible'
                      : 'initial'
                  }
                  onClick={this.showSecondText}
                >
                  <FormattedMessage id="aboutMeCta" />
                </PosedTellMeMoreButton>
              </StyledButtonWrapper>
            </StyledBackgroundWrapper.Left>
            <StyledBackgroundWrapper.Right>
              <Img fluid={data.file.childImageSharp.fluid} />
            </StyledBackgroundWrapper.Right>
          </StyledBackgroundWrapper>
          <div id="tell-me-more-area">
            <TellMeMoreAboutYou visible={this.state.tellMeMoreVisible} />
          </div>
        </PageLayout>
      </Layout>
    )
  }
}

export default withIntl(AboutMePage)

const StyledBackgroundWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
  z-index: ${vars.styles.zIndices.base};
  display: flex;
  ${on('onlyMobile')} {
    margin-top: 0;
  }
`

StyledBackgroundWrapper.Image = styled(AboutMeBackgroundSvg)`
  position: absolute;
  top: -4rem;
  z-index: -1;
  width: 300px;
  left: 0;
  ${on('onlyMobile')} {
    width: 90%;
  }
`

StyledBackgroundWrapper.Left = styled.div`
  z-index: 1;
  width: 60%;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${on('onlyMobile')} {
    width: 100%;
    padding-right: 0;
  }
`

StyledBackgroundWrapper.Right = styled.div`
  z-index: 1;
  width: 40%;
  ${on('onlyMobile')} {
    display: none;
  }
`

const StyledHeadingQuote = styled.h2`
  font-size: ${vars.styles.fontSizes.size7};
  font-family: ${vars.styles.fontFamilies.special};
  color: ${vars.styles.colors.neutral5};
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1.3;

  ${on('onlyMobile')} {
    margin-bottom: 2rem;
  }
`

const StyledAboutMeFirstText = styled.p`
  line-height: 1.5;
  padding: 0 1rem;
  margin-bottom: 3rem;

  ${on('onlyMobile')} {
    padding: 0;
    margin-bottom: 2rem;
  }
`

const StyledButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const PosedTellMeMoreButton = posed(StyledPrimaryButton)({
  initial: {
    y: 0,
    opacity: 1,
  },
  tellMeMoreVisible: {
    y: -15,
    opacity: 0,
    applyAtEnd: { visibility: 'hidden' },
  },
})
