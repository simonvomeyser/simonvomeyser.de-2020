import React from 'react'
import posed, { PoseGroup } from 'react-pose'

class Transition extends React.PureComponent {
  render() {
    const PosedRoutesContainer = posed.div({})

    return (
      <PoseGroup
        enterPose="onRouteEnter"
        preEnterPose="preRouteEnter"
        exitPose="onRouteExit"
      >
        <PosedRoutesContainer key={this.props.location.key}>
          {this.props.children}
        </PosedRoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
