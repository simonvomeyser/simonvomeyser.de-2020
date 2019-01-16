import React, { Component } from 'react'
import styled  from 'styled-components';
import {vars} from '../util/vars'

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <nav>nav</nav>
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
