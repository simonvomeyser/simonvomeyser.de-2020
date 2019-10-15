import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from '../util/vars'
import { ArrowDown } from '../svg'
import Link from 'i18n/Link'
import FunnyBouncerContent from './FunnyBouncerContent'

const bounceDurationSeconds = 3

export default class FunnyBouncer extends Component {
  constructor() {
    super()
    this.state = {
      bounce: 1,
    }
  }
  render() {
    return (
      <Wrapper to="/about-me">
        <BounceAnimation>
          {this.state.bounce === 1 ? (
            <ArrowDown />
          ) : (
            <FunnyBouncerContent index={this.state.bounce - 1} />
          )}
        </BounceAnimation>
      </Wrapper>
    )
  }
  componentDidMount() {
    setTimeout(() => {
      this.timerID = setInterval(() => {
        this.setState({
          bounce: this.state.bounce + 1,
        })
      }, bounceDurationSeconds * 1000)
    }, 3000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  opacity: 1;
  min-width: 200px;

  p {
    font-size: ${vars.styles.fontSizes.size2};
    margin-bottom: 4px;
    margin-top: 0;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    opacity: 0.7;
  }
`

const BounceAnimation = styled.div`
  animation: bounce ${bounceDurationSeconds}s infinite 3s;
  animation-timing-function: ease-in-out;

  &:hover {
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-150%);
    }
    55% {
      transform: translateY(100%);
    }
  }
`
