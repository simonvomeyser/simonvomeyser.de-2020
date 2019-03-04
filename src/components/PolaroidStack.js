import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Polaroid from './Polaroid'
import styled from 'styled-components'
import { vars } from '../util/vars'

export default class PolaroidStack extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
  }

  render() {
    return (
      <StyledWrapper imagesLength={this.props.images.length}>
        {this.props.images.reverse().map((image, index) => (
          <StyledPolaroidWrapper key={'Polaroid-' + index} index={index}>
            <Polaroid image={image} alt={'Polaroid-' + index} />
          </StyledPolaroidWrapper>
        ))}
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 75%;
  margin: 0 auto;
`

const StyledPolaroidWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s all ease-in-out;
  transform: ${({ index }) => {
    const px = -1 * index * 15
    const turn = index * -0.005
    const translate = `translate(${px}px, ${px}px)`
    return translate + ' rotate(' + turn + 'turn)'
  }};
  &:hover {
    z-index: 1;
    transform: scale(1.05);
  }
`
