import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'
import { ArrowDown } from '../svg'
import Link from 'i18n/Link'

export default class FunnyBouncer extends Component {
  constructor(params) {
    super()
    this.state = {
      bounce: 1,
    }
  }
  render() {
    return (
      <Wrapper to="/about-me">
        <BounceAnimation>
          {this.state.bounce <= 2 ? (
            <ArrowDown />
          ) : (
            <div>
              <p>Wop wop, come one, click</p>
              <p>🙂</p>
            </div>
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
      }, 3000)
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
  animation: bounce 3s infinite 3s;
  @keyframes bounce {
    from,
    20%,
    53%,
    80%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -150%, 0);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -75%, 0);
    }

    90% {
      transform: translate3d(0, 0, 0);
    }
  }
`
