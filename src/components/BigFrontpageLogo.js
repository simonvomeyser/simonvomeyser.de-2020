import React, { Component } from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'

export default class BigFrontpageLogo extends Component {
  static propTypes = {
    shouldAnimate: PropTypes.bool,
  }
  render() {
    return (
      <PosedSvg initialPose="hidden" pose="shown">
        <PosedTriangle1 />
        <PosedTriangle2 />
        <PosedTriangle3 />
      </PosedSvg>
    )
  }
}

const Svg = React.forwardRef((props, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 296 345"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  )
})

const Triangle1 = React.forwardRef((props, ref) => {
  return (
    <path
      ref={ref}
      d="M124.31 345L264.6 63.0001H0.599976L124.31 345Z"
      fill="#DDDDDD"
    />
  )
})

const Triangle2 = React.forwardRef((props, ref) => {
  return <path ref={ref} d="M139.71 314L280 32H16L139.71 314Z" fill="#60676C" />
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

const basicPoseAnimation = {
  hidden: {
    scale: 0,
    transition: { duration: 1000 },
  },
  shown: {
    scale: 1,
    transition: { duration: 1000 },
  },
}

const PosedSvg = posed(Svg)({
  hidden: {
    rotate: 45,
  },
  shown: {
    rotate: 0,
    transition: { duration: 1000 },
    staggerChildren: 500,
    delayChildren: 250,
  },
})

const PosedTriangle1 = posed(Triangle1)(basicPoseAnimation)
const PosedTriangle2 = posed(Triangle2)(basicPoseAnimation)
const PosedTriangle3 = posed(Triangle3)(basicPoseAnimation)
