import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'

export default class Spinner extends Component {
  render() {
    return (
      <StyledSpinner>
        <div>
          <div />
          <div />
          <div />
          <div />
        </div>
      </StyledSpinner>
    )
  }
}

const StyledSpinner = styled.div`
  > div {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
  }
  > div div {
    position: absolute;
    top: 10px;
    width: 7px;
    height: 8px;
    border-radius: 4px;
    background: ${vars.styles.colors.accent1};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  > div div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  > div div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  > div div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  > div div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`
