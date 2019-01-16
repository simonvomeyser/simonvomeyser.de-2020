import React, { Component } from 'react'
import styled  from 'styled-components';
import {vars} from '../util/vars'
import Link  from '../i18n/Link'
import Logo from '../images/logo-navigation.svg'

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <NavigationTop>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <img src={Logo} alt=""/>
                </Link>
              </li>
              <li>
                <Link to="/">
                  About me
                </Link>
              </li>
              <li>
                <Link to="/">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/">
                  Blog
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
`

const NavigationTop = styled.div`
  padding-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 60%;
    height: auto;
  }
  li {
    text-align: center;
  }
`
