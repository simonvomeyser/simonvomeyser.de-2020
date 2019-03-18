import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'

export default class Polaroid extends Component {
  static propTypes = {
    shouldAnimate: PropTypes.bool,
  }
  render() {
    return (
      <svg
        width="296"
        height="345"
        viewBox="0 0 296 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <PosedTriangle1 initialPose="hidden" pose="shown" />
        <path d="M139.71 314L280 32H16L139.71 314Z" fill="#60676C" />
        <PosedTriangle3 initialPose="hidden" pose="shown" />
      </svg>
    )
  }
}

const Triangle1 = React.forwardRef((props, ref) => {
  return (
    <path
      ref={ref}
      d="M124.31 345L264.6 63.0001H0.599976L124.31 345Z"
      fill="#DDDDDD"
    />
  )
})

const PosedTriangle1 = posed(Triangle1)({
  hidden: {
    scale: 0,
  },
  shown: {
    scale: 1,
  },
})
const Triangle3 = React.forwardRef((props, ref) => {
  return (
    <path
      ref={ref}
      d="M155.62 282L295.91 -3.05176e-05H31.91L155.62 282Z"
      fill="#6EB9B3"
    />
  )
})

const PosedTriangle3 = posed(Triangle3)({
  hidden: {
    scale: 0,
  },
  shown: {
    scale: 1,
  },
})
