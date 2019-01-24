import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from '../util/vars'
import Link from '../i18n/Link'
import LogoNavigation from '../svg/logo-navigation.svg'
import User from '../svg/user.svg'
import Projects from '../svg/projects.svg'
import Write from '../svg/write.svg'
import PaperPlane from '../svg/paper-plane.svg'
import LegalIcon from '../svg/legal.svg'

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationTop>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <NavigationIconLogo>
                    <LogoNavigation />
                  </NavigationIconLogo>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIconLink>
                    <User />
                  </NavigationIconLink>
                  <NavigationText>About me</NavigationText>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIconLink>
                    <Projects />
                  </NavigationIconLink>
                  <NavigationText>Projects</NavigationText>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIconLink>
                    <PaperPlane />
                  </NavigationIconLink>
                  <NavigationText>Contact</NavigationText>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIconLink>
                    <Write />
                  </NavigationIconLink>
                  <NavigationText>Blog</NavigationText>
                </Link>
              </li>
            </ul>
          </nav>
        </NavigationTop>
        <NavigationBottom>
          <Link to="/">
            <NavigationIconLink>
              <LegalIcon />
            </NavigationIconLink>
          </Link>
        </NavigationBottom>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: fixed;
  background-color: ${vars.styles.colors.neutral6};
  left: 0;
  top: 0;
  width: ${vars.styles.sizes.navigationWidth};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const NavigationTop = styled.div`
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

const NavigationBottom = styled.div`
  display: flex;
  justify-content: center;
`

// todo: animation
const NavigationText = styled.div`
  text-align: center;
  /* transform: translateX(-5rem);  */
  font-weight: bold;
  margin-bottom: 1.5rem;
  font-size: ${vars.styles.fontSizes.size1};
  color: ${vars.styles.colors.neutral4};
`

const NavigationIcon = styled.div`
  svg {
    display: block;
    width: 1.8rem;
    height: auto;
    margin: 0 auto;
  }
  margin-bottom: 0.5rem;
`

const NavigationIconLink = styled(NavigationIcon)`
  svg {
    path {
      fill: ${vars.styles.colors.neutral4};
    }
  }
`

const NavigationIconLogo = styled(NavigationIcon)`
  margin-bottom: 1.5rem;
  svg {
    width: 2.2rem;
  }
`
