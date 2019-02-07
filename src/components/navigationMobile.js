import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import { rgba } from 'util/mixins'
import LanguageChooser from 'components/languageChooser'

import {
  LogoNavigationSvg,
  UserSvg,
  ProjectsSvg,
  BurgerSvg,
  GermanySvg,
  UnitedStatesSvg,
  WriteSvg,
  PaperPlaneSvg,
  LegalSvg,
} from 'svg'
import NavigationLink from 'components/navigatonLink'

export default class NavigationMobile extends Component {
  render() {
    return (
      <Fragment>
        <NavigationMobileBar>
          <BurgerWrapper>
            <BurgerSvg />
          </BurgerWrapper>
          <LogoWrapper>
            <LogoNavigationSvg />
          </LogoWrapper>
          <LanguageChooser />
        </NavigationMobileBar>
        <NavigationMobileList>
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
        </NavigationMobileList>
      </Fragment>
    )
  }
}

const BurgerWrapper = styled.div`
  svg {
    width: 1.5rem;
  }
`
const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    height: 2rem;
    width: auto;
  }
`

const NavigationMobileList = styled.div`
  display: none;
  position: fixed;
  top: ${vars.styles.sizes.navigationMobileHeight};
  left: 0;
  width: 100%;
  height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
  background: ${rgba(vars.styles.colors.neutral6, 0.9)};

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

const NavigationMobileBar = styled.div`
  display: none;
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
