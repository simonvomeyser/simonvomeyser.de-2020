import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { on } from 'src/util/breakpoint'
import LanguageChooser from 'src/components/LanguageChooser'
import { navigate } from 'src/i18n/navigate'
import NavigationMobileList from './NavigationMobileList'
import NavigationMobileBurger from './NavigationMobileBurger'

import { LogoNavigationSvg } from 'src/svg'

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
      <StyledWrapper>
        <StyledNavigationMobileBar>
          <StyledBurgerWrapper>
            <NavigationMobileBurger
              open={this.state.menuOpen}
              toggleMenu={this.toggleMenu}
            />
          </StyledBurgerWrapper>
          <StyledLogoWrapper>
            <LogoNavigationSvg
              onClick={event => this.setMenu(event, { open: false })}
            />
          </StyledLogoWrapper>
          <LanguageChooser />
        </StyledNavigationMobileBar>
        <NavigationMobileList
          open={this.state.menuOpen}
          toggleMenu={this.toggleMenu}
        />
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  display: none;
  ${on('onlyMobile')} {
    display: block;
  }
`

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

const StyledNavigationMobileBar = styled.div`
  display: flex;
  z-index: ${vars.styles.zIndices.mobileNavigationBar};
  background-color: ${vars.styles.colors.neutral6};
  width: 100%;
  height: ${vars.styles.sizes.navigationMobileHeight};
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`
