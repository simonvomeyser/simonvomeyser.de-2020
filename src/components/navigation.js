import React, { Component } from 'react'
import styled  from 'styled-components';
import {vars} from '../util/vars'
import Link  from '../i18n/Link'
import LogoNavigation from '../svg/logo-navigation.svg';
import Logo from '../svg/logo-navigation.svg';
import User from '../svg/user.svg';
import Projects from '../svg/projects.svg';
import Write from '../svg/write.svg';
import PaperPlane from '../svg/paper-plane.svg';

export default class Navigation extends Component {
  render() {
    console.log(Logo);
    return (
      <Wrapper>
        <NavigationTop>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <NavigationIcon>
                    <LogoNavigation></LogoNavigation>
                  </NavigationIcon>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIcon>
                    <User></User>
                  </NavigationIcon>
                  <NavigationText>
                    About me
                  </NavigationText>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIcon>
                    <Projects></Projects>
                  </NavigationIcon>
                  <NavigationText>
                    Projects
                  </NavigationText>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIcon>
                    <PaperPlane></PaperPlane>
                  </NavigationIcon>
                  <NavigationText>
                    Contact
                  </NavigationText>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <NavigationIcon>
                    <Write></Write>
                  </NavigationIcon>
                  <NavigationText>
                    Blog
                  </NavigationText>
                </Link>
              </li>
            </ul>
          </nav>
        </NavigationTop>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: fixed;
  background-color: ${vars.styles.colors.grey1};
  left: 0;
  top: 0;
  width: ${vars.styles.sizes.navigationWidth};
  height: 100%;
`;

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
`;

const NavigationText = styled.div`
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: .75rem;
  color: ${vars.styles.colors.lightGrey1};
`;

const NavigationIcon = styled.div`
  svg {
    display: block;
    max-width: 60%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 15px;
  }
`
