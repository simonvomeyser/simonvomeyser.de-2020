import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import {
  LogoNavigationSvg,
  UserSvg,
  ProjectsSvg,
  WriteSvg,
  PaperPlaneSvg,
  LegalSvg,
} from 'svg'
import NavigationLink from 'components/NavigatonLink'

class Navigation extends Component {
  static propTypes = {
    animate: PropTypes.bool,
  }
  static defaultProps = {
    animate: false,
  }

  shouldAnimate() {
    const shouldAnimate =
      localStorage.getItem('hasNavigationAnimationRun') === 'false'

    if (shouldAnimate) {
      localStorage.setItem('hasNavigationAnimationRun', 'true')
    }

    return shouldAnimate
  }

  render() {
    return (
      <PosedWrapper
        initialPose={this.shouldAnimate() ? 'hidden' : 'visible'}
        pose="visible"
        delayInitialAnimation={this.props.delayInitialAnimation}
      >
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
              <PosedLi>
                <NavigationLink
                  to="/blog"
                  icon={<WriteSvg />}
                  idOfText="navigationBlog"
                />
              </PosedLi>
            </ul>
          </nav>
        </StyledNavigationTop>
        <StyledNavigationBottom>
          <ul>
            <PosedLi>
              <NavigationLink to="/legal" icon={<LegalSvg />} />
            </PosedLi>
          </ul>
        </StyledNavigationBottom>
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
const StyledNavigationBottom = styled.div`
  display: flex;
  justify-content: center;
`

const PosedWrapper = posed(StyledWrapper)({
  visible: {
    opacity: 1,
    x: '0%',
    staggerChildren: 250,
    delay: ({ delayInitialAnimation }) => {
      return delayInitialAnimation ? 3000 : 0
    },
    delayChildren: ({ delayInitialAnimation }) => {
      return delayInitialAnimation ? 3300 : 300
    },
    transition: { type: 'spring', damping: 20 },
  },
  hidden: { opacity: 0, x: '-100%' },
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
