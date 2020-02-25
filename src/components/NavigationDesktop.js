import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { on } from 'src/util/breakpoint'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import NavigationMobile from 'src/components/NavigationMobile'
import {
  LogoNavigationSvg,
  UserSvg,
  ProjectsSvg,
  WriteSvg,
  PaperPlaneSvg,
  LegalSvg,
} from 'src/svg'
import NavigationLink from 'src/components/NavigatonLink'

class Navigation extends Component {
  static propTypes = {
    animate: PropTypes.bool,
  }
  static defaultProps = {
    animate: false,
  }

  render() {
    return (
      <PosedWrapper
        initialPose={this.props.shouldAnimate ? 'hidden' : 'visible'}
        pose="visible"
        delayInitialAnimation={this.props.delayInitialAnimation}
      >
        <div>
          <StyledNavigationTop>
            <nav>
              <ul>
                <PosedLogoLi>
                  <NavigationLink
                    to="/"
                    isPageLogo
                    icon={<LogoNavigationSvg />}
                  />
                </PosedLogoLi>
                <PosedLi>
                  <NavigationLink
                    to="/about-me"
                    logo
                    icon={<UserSvg />}
                    idOfText="navigationAboutMe"
                  />
                </PosedLi>
                <PosedLi>
                  <NavigationLink
                    to="/projects"
                    icon={<ProjectsSvg />}
                    idOfText="navigationProjects"
                  />
                </PosedLi>
                <PosedLi>
                  <NavigationLink
                    to="/contact"
                    icon={<PaperPlaneSvg />}
                    idOfText="navigationContact"
                  />
                </PosedLi>
              </ul>
            </nav>
          </StyledNavigationTop>
        </div>
      </PosedWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  position: fixed;
  background-color: ${vars.styles.colors.neutral6};
  left: 0;
  top: 0;
  width: ${vars.styles.sizes.navigationWidth};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${on('onlyMobile')} {
    display: none;
  }
`

const StyledNavigationTop = styled.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  li {
    text-align: center;
  }
`
const PosedWrapper = posed(StyledWrapper)({
  visible: {
    x: '0%',
    staggerChildren: 100,
    delay: ({ delayInitialAnimation }) => {
      return delayInitialAnimation ? 3500 : 500
    },
    delayChildren: ({ delayInitialAnimation }) => {
      return delayInitialAnimation ? 3800 : 800
    },
    transition: { type: 'spring', damping: 20 },
  },
  hidden: { x: '-100%' },
})

const PosedLogoLi = posed.li({
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { type: 'spring', stiffness: 300, duration: 800 },
      default: { ease: 'linear', duration: 400 },
    },
  },
  hidden: { scale: 0.2, opacity: 0 },
})

const PosedLi = posed.li({
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      default: { type: 'spring', stiffness: 150, duration: 400, damping: 13 },
    },
  },
  hidden: { x: '-100%', opacity: 0 },
})

Navigation.propTypes = {
  delayInitialAnimation: PropTypes.bool,
}

Navigation.defaultProps = {
  delayInitialAnimation: false,
}

export default Navigation
