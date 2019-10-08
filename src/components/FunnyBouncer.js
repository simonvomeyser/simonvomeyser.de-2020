import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'

export default class FunnyBouncer extends Component {
  render() {
    return <Wrapper />
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
