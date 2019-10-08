import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'
import { ArrowDown } from '../svg'
import Link from 'i18n/Link'

export default class FunnyBouncer extends Component {
  render() {
    return (
      <Wrapper to="/about-me">
        <ArrowDown />
      </Wrapper>
    )
  }
}

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: ${vars.styles.fontSizes.size2};
    margin-bottom: 4px;
    margin-top: 0;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`
