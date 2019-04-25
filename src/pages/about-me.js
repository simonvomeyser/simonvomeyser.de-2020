import React from 'react'
import { withIntl } from 'i18n'
import Layout from 'components/Layout'
import PageLayout from 'components/PageLayout'
import styled from 'styled-components'
import { vars } from '../util/vars'
import AboutMeBackgroundSvg from 'svg/about-me-background.svg'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import ChangeTitle from '../components/ChangeTitle'
import {
  StyledPageHeading,
  StyledPrimaryButtonLink,
  StyledSecondaryButtonLink,
  StyledPrimaryButton,
} from '../styled-components'
import { on } from 'util/breakpoint'
import Img from 'gatsby-image'
import posed from 'react-pose'
import { graphql } from 'gatsby'

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
    this.setState({ tellMeMoreVisible: true })
  }
  render() {
    const { data } = this.props
    return (
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
                <PosedTellMeMoreButton
                  pose={
                    this.state.tellMeMoreVisible
                      ? 'tellMeMoreVisible'
                      : 'initial'
                  }
                  onClick={this.showSecondText}
                >
                  erzähl ruhig etwas mehr!
                </PosedTellMeMoreButton>
                <PosedTellMeMoreOkayMessage
                  pose={
                    this.state.tellMeMoreVisible
                      ? 'tellMeMoreVisible'
                      : 'initial'
                  }
                >
                  Klar, kein Problem 🤓
                </PosedTellMeMoreOkayMessage>
              </StyledButtonWrapper>
            </StyledBackgroundWrapper.Left>
            <StyledBackgroundWrapper.Right>
              <Img fluid={data.file.childImageSharp.fluid} />
            </StyledBackgroundWrapper.Right>
          </StyledBackgroundWrapper>
          <PosedTellMeMoreArea
            pose={
              this.state.tellMeMoreVisible ? 'tellMeMoreVisible' : 'initial'
            }
          >
            <PosedTellMeMoreAreaChild>
              <StyledLine />
            </PosedTellMeMoreAreaChild>
            <PosedTellMeMoreAreaChild>
              <h2>Was gibt es denn so zu erzählen über dich?</h2>
            </PosedTellMeMoreAreaChild>
            <PosedTellMeMoreAreaChild>
              <p>
                Ich arbeite seit mittlerweile <b>8 Jahren </b>in diesem
                Internetz von dem allen reden und haben Anfang 2018 meinen{' '}
                <b>Master in Medieninformatik</b> abgeschlossen.
              </p>
            </PosedTellMeMoreAreaChild>
            <PosedTellMeMoreAreaChild>
              <p>
                Momentan arbeite ich 2-3 Tage freiberuflich oder zusammen mit
                großartigen Agenturen, drei Tage die Woche in Teilzeit mit einem
                tollen Entwicklerteam bei der DEKRA Media GmbH als Senior
                Projektmanager, Teamleiter und Webentwickler.
              </p>
            </PosedTellMeMoreAreaChild>
            <PosedTellMeMoreAreaChild>
              <p>
                Neben der Technologie sollten meiner Meinung nach viel öfter die
                Menschen und das Lösen ihrer Probleme im Fokus stehen. Ich biete
                daher nicht nur <b>Full Stack Webentwicklung</b>, sondern auch{' '}
                <b>Anforderungsanalyse, Consulting und Projektmanagement an</b>{' '}
                . Falls gewünscht alles garniert mit vielen schlechten Witzen.
              </p>
            </PosedTellMeMoreAreaChild>
            <PosedTellMeMoreAreaChild>
              <p>
                Meld dich einfach bei mir falls du Untestützung bei einem
                spannenden Projekt brauchst! 🙂
              </p>
            </PosedTellMeMoreAreaChild>
            <PosedTellMeMoreAreaChild>
              <StyledTellMeMoreButtons>
                <StyledSecondaryButtonLink to="/projects">
                  schau dir Projekte an{' '}
                </StyledSecondaryButtonLink>
                <StyledPrimaryButtonLink to="/contact">
                  schreib mir einfach
                </StyledPrimaryButtonLink>
              </StyledTellMeMoreButtons>
            </PosedTellMeMoreAreaChild>
          </PosedTellMeMoreArea>
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

const StyledTellMeMoreOkayMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
`
const StyledLine = styled.div`
  max-width: 300px;
  height: 3px;
  background-color: ${vars.styles.colors.accent4};
  padding: 0 1rem;
  margin: 0 auto 2rem auto;
`

const StyledTellMeMoreButtons = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  a + a {
    margin-left: 1rem;
  }
  ${on('onlyMobile')} {
    a + a {
      margin-left: 0;
      margin-top: 1rem;
    }
  }
`

const StyledTellMeMoreArea = styled.div`
  margin-top: 3rem;
  h2 {
    font-size: ${vars.styles.fontSizes.size7};
    font-family: ${vars.styles.fontFamilies.special};
    color: ${vars.styles.colors.neutral5};
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    line-height: 150%;
    margin-bottom: 1.5rem;
  }
`

const PosedTellMeMoreAreaChild = posed.div({
  initial: {
    opacity: 0,
    y: 150,
  },
  tellMeMoreVisible: {
    opacity: 1,
    duration: 2000,
    y: 0,
  },
})

const PosedTellMeMoreArea = posed(StyledTellMeMoreArea)({
  initial: {
    opacity: 0,
    display: 'none',
  },
  tellMeMoreVisible: {
    delay: 700,
    delayChildren: 300,
    staggerChildren: 500,
    applyAtStart: { display: 'block' },
    opacity: 1,
  },
})

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

const PosedTellMeMoreOkayMessage = posed(StyledTellMeMoreOkayMessage)({
  initial: {
    opacity: 0,
    transform: 'translate(-50%, -30%)',
  },
  tellMeMoreVisible: {
    opacity: 1,
    transform: 'translate(-50%, -50%)',
    delay: 500,
  },
})
