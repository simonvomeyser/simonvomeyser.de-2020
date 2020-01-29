import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { on } from 'src/util/breakpoint'
import { rgba, anim } from 'src/util/mixins'
import LanguageChooser from 'src/components/LanguageChooser'
import { navigate } from 'src/i18n/navigate'

import {
  LogoNavigationSvg,
  UserSvg,
  ProjectsSvg,
  BurgerSvg,
  WriteSvg,
  PaperPlaneSvg,
} from 'src/svg'
import NavigationLink from 'src/components/NavigatonLink'

export default class NavigationMobile extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false,
    }
  }
  toggleMenu = () => {
    this.setState(state => {
      return { menuOpen: !state.menuOpen }
    })
  }
  setMenu = (event, { open = false }) => {
    this.setState(
      () => {
        return { menuOpen: open }
      },
      () => {
        navigate('/')
      }
    )
  }
  render() {
    return (
      <Fragment>
        <StyledNavigationMobileBar data-mobile-navigation-scroll-adjust>
          <StyledBurgerWrapper>
            <BurgerSvg onClick={this.toggleMenu} />
          </StyledBurgerWrapper>{' '}
          <StyledLogoWrapper>
            <LogoNavigationSvg
              onClick={event => this.setMenu(event, { open: false })}
            />
          </StyledLogoWrapper>
          <LanguageChooser />
        </StyledNavigationMobileBar>
        <StyledNavigationMobileList menuOpen={this.state.menuOpen}>
          <nav>
            <ul onClick={this.toggleMenu}>
              <li>
                <NavigationLink
                  to="/about-me"
                  logo
                  icon={<UserSvg />}
                  idOfText="navigationAboutMe"
                />
              </li>
              <li>
                <NavigationLink
                  to="/projects"
                  icon={<ProjectsSvg />}
                  idOfText="navigationProjects"
                />
              </li>
              <li>
                <NavigationLink
                  to="/contact"
                  icon={<PaperPlaneSvg />}
                  idOfText="navigationContact"
                />
              </li>
            </ul>
          </nav>
        </StyledNavigationMobileList>
      </Fragment>
    )
  }
}

const StyledBurgerWrapper = styled.div`
  svg {
    width: 1.5rem;
    cursor: pointer;
  }
`
const StyledLogoWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    height: 2rem;
    width: auto;
  }
`

const StyledNavigationMobileList = styled.div`
  display: ${props => (props.menuOpen ? 'block' : 'none')};
  width: 100%;
  background: ${rgba(vars.styles.colors.neutral6, 0.9)};
  ${anim()};

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    flex: 1;
  }
  a {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

const StyledNavigationMobileBar = styled.div`
  display: none;
  z-index: ${vars.styles.zIndices.mobileNavigationBar};
  background-color: ${vars.styles.colors.neutral6};
  width: 100%;
  height: ${vars.styles.sizes.navigationMobileHeight};
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  ${on('onlyMobile')} {
    display: flex;
  }
`
