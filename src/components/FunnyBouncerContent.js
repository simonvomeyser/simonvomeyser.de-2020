import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'
import { ArrowDown } from '../svg'
import Link from 'i18n/Link'

export default class FunnyBouncerContent extends Component {
  static propTypes = {
    index: PropTypes.number,
  }

  static state = {
    bla: 'blo',
  }

  render() {
    return (
      <Wrapper to="/about-me">
        <div>
          <p>Wop wop, come one, click {this.props.index}</p>
          <p>🙂</p>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align: center;
`
