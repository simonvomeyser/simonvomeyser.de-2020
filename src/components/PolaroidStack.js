import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Polaroid from './Polaroid'

export default class PolaroidStack extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
  }

  render() {
    return (
      <div>
        {this.props.images.map((image, index) => (
          <Polaroid
            image={image}
            alt={'Polaroid-' + index}
            key={'Polaroid-' + index}
          />
        ))}
      </div>
    )
  }
}
