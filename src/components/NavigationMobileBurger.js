import React from 'react'
import styled from 'styled-components'
import { vars } from '../util/vars'

export default function NavigationMobileBurger(props) {
  return (
    <StyledWrapper onClick={props.toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  border: none;
  span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: ${vars.styles.colors.neutral2};
    + span {
      margin-top: 5px;
    }
  }
`
