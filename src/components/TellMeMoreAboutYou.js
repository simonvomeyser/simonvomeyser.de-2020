import React, { Component } from 'react'
import {
  StyledPrimaryButtonLink,
  StyledSecondaryButtonLink,
} from '../styled-components'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'
import { on } from 'util/breakpoint'
import { withIntl } from 'i18n'

class TellMeMoreAboutYou extends Component {
  render() {
    return (
      <>
        <PosedTellMeMoreArea
          pose={this.props.visible ? 'tellMeMoreVisible' : 'initial'}
        >
          <PosedTellMeMoreAreaChild>
            <StyledLine />
          </PosedTellMeMoreAreaChild>
          <PosedTellMeMoreAreaChild>
            <h2>Was gibt es denn so zu erzählen über dich?</h2>
          </PosedTellMeMoreAreaChild>
          <PosedTellMeMoreAreaChild>
            <p>
              Ich arbeite seit mittlerweile <b>8 Jahren </b>in diesem Internetz
              von dem allen reden und haben Anfang 2018 meinen{' '}
              <b>Master in Medieninformatik</b> abgeschlossen.
            </p>
            <p>
              Momentan arbeite ich als freiberuflicher Webentwickler und das
              entweder für private Kunden oder im Team mit großartigen Agenturen
              wie <a href="">Bitmade</a>, <a href="">g31</a> und{' '}
              <a href="">Pink Werbung</a>
            </p>
            <p>
              Zusätzlich bin ich in Teilzeit bei der DEKRA Media GmbH als Senior
              Projektmanager und Teamleiter eingestellt. Dort tüftle ich mit
              einem tollen Team aus Webentwicklern zusammen an Lösungen im
              Bereich E-Learning.
            </p>
            <p>
              Neben der Technologie sollten meiner Meinung nach viel öfter die
              Menschen und das Lösen ihrer Probleme im Fokus stehen. Ich biete
              daher nicht nur <b>Full Stack Webentwicklung</b>, sondern auch{' '}
              <b>Anforderungsanalyse, Consulting und Projektmanagement an</b> .
              Falls gewünscht alles garniert mit vielen schlechten Witzen.
            </p>
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
      </>
    )
  }
}

export default TellMeMoreAboutYou

const StyledTellMeMoreArea = styled.div`
  margin: 0 auto;
  margin-top: 3rem;
  max-width: 800px;
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

const StyledLine = styled.div`
  max-width: 300px;
  height: 3px;
  background-color: ${vars.styles.colors.accent4};
  padding: 0 1rem;
  margin: 0 auto 2rem auto;
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
