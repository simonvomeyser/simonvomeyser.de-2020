import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import { rgba, anim } from 'util/mixins'
import LanguageChooser from 'components/LanguageChooser'
import { navigate } from 'i18n/navigate'

import {
  LogoNavigationSvg,
  UserSvg,
  ProjectsSvg,
  BurgerSvg,
  WriteSvg,
  PaperPlaneSvg,
} from 'svg'
import NavigationLink from 'components/NavigatonLink'

export default class NavigationMobile extends Component {
  constructor(params) {
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
    // event.stopPropagation()
    this.setState(
      state => {
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
        <StyledNavigationMobileBar>
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
            <ul>
              <li>
                <NavigationLink
                  to="/about-me"
                  logo
                  icon={<UserSvg />}
                  idOfText="navigationBlog"
                />
              </li>
              <li>
                <NavigationLink
                  to="/projects"
                  icon={<ProjectsSvg />}
                  idOfText="navigationBlog"
                />
              </li>
              <li>
                <NavigationLink
                  to="/contact"
                  icon={<PaperPlaneSvg />}
                  idOfText="navigationBlog"
                />
              </li>
              <li>
                <NavigationLink
                  to="/blog"
                  icon={<WriteSvg />}
                  idOfText="navigationBlog"
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    height: 2rem;
    width: auto;
  }
`

const StyledNavigationMobileList = styled.div`
  display: none;
  position: fixed;
  left: 0;
  z-index: ${vars.styles.zIndices.mobileNavigationList};
  top: ${props =>
    props.menuOpen ? vars.styles.sizes.navigationMobileHeight : '-100vh'};
  width: 100%;
  height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
  background: ${rgba(vars.styles.colors.neutral6, 0.9)};
  ${anim()};

  nav {
    height: 100%;
  }
  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
  li {
    flex: 1;
  }
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  ${on('onlyMobile')} {
    display: block;
  }
`

const StyledNavigationMobileBar = styled.div`
  display: none;
  z-index: ${vars.styles.zIndices.mobileNavigationBar};
  position: fixed;
  background-color: ${vars.styles.colors.neutral6};
  left: 0;
  top: 0;
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
