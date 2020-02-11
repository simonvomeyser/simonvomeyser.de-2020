import React from 'react'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'

export default function NavigationMobileBurger(props) {
  return (
    <StyledWrapper onClick={props.toggleMenu}>
      <PosedBurgerBarTop pose={props.open ? 'open' : 'closed'} />
      <PosedBurgerBarCenter pose={props.open ? 'open' : 'closed'} />
      <PosedBurgerBarBottom pose={props.open ? 'open' : 'closed'} />
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

const PosedBurgerBarTop = posed('span')({
  closed: {
    y: 0,
    rotate: 0,
  },
  open: {
    y: 8,
    rotate: 45,
    transition: {
      y: {
        delay: 100,
      },
      rotate: {
        delay: 350,
        type: 'spring',
        stiffness: 400,
        damping: 18,
      },
    },
  },
})

const PosedBurgerBarCenter = posed('span')({
  closed: {
    width: 30,
  },
  open: {
    width: 0,
  },
})

const PosedBurgerBarBottom = posed('span')({
  closed: {
    y: 0,
    rotate: 0,
  },
  open: {
    y: -8,
    rotate: -45,
    transition: {
      y: {
        delay: 100,
      },
      rotate: {
        delay: 350,
        type: 'spring',
        stiffness: 400,
        damping: 18,
      },
    },
  },
})
