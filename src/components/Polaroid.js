import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from '../util/vars'

export default class Polaroid extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
        <StyledImageWrapper>
          <img src={this.props.image} alt={this.props.alt} />
        </StyledImageWrapper>
      </div>
    )
  }
}

const StyledImageWrapper = styled.div`
  border: 5px solid ${vars.styles.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
