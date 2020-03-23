import React from 'react'
import { on } from 'src/util/breakpoint'
import styled from 'styled-components'
import { vars } from '../util/vars'

export default function LanguageButton({ active, onClick, Icon }) {

  return (
    <StyledLanguageButton active={active} onClick={onClick}>
      <Icon />
    </StyledLanguageButton>
  )
}

const StyledLanguageButton = styled.button`
  position:relative;
  border: 0;
  background: none;
  cursor: pointer;
  width: 35px;
  height: 35px;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
  }
  opacity: ${({ active }) => active ? '1' : '0.4'};
  transition: opacity 0.3s ease-in-out;

  ${on('onlyMobile')} {
    display: ${({ active }) => active ? 'inline-block' : 'none'};
  }
  
`