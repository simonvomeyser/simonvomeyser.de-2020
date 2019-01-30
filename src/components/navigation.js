import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import LogoSvg from 'svg/logo-navigation.svg'
import UserSvg from 'svg/user.svg'
import ProjectsSvg from 'svg/projects.svg'
import WriteSvg from 'svg/write.svg'
import PaperPlaneSvg from 'svg/paper-plane.svg'
import LegalSvg from 'svg/legal.svg'
import NavigationLink from 'components/navigatonLink'

export default class Navigation extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledNavigationTop>
          <nav>
            <ul>
              <li>
                <NavigationLink to="/" isPageLogo icon={<LogoSvg />} />
              </li>
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
        </StyledNavigationTop>
        <StyledNavigationBottom>
          <NavigationLink to="/legal" icon={<LegalSvg />} />
        </StyledNavigationBottom>
      </StyledWrapper>
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
