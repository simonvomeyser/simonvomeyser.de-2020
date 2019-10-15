import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

export default class FunnyBouncerContent extends Component {
  static propTypes = {
    index: PropTypes.number,
  }
  render() {
    return (
      <Wrapper to="/about-me">
        <div>
          <FormattedMessage
            id={'funnyBouncerContent_1_' + (this.props.index % 11) || 1}
          />
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
  min-height: 2rem;
  color: black;
`
