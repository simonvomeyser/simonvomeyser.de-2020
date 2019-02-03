import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import {
  LogoNavigationSvg,
  UserSvg,
  ProjectsSvg,
  WriteSvg,
  PaperPlaneSvg,
  LegalSvg,
} from 'svg'
import NavigationLink from 'components/navigatonLink'

export default class NavigationMobile extends Component {
  render() {
    return (
      <StyledWrapper>
        <span>burg</span>
        <LogoWrapper>
          <LogoNavigationSvg />
        </LogoWrapper>
        <span>lang</span>
      </StyledWrapper>
    )
  }
}

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    height: 40px;
    width: auto;
  }
`

const StyledWrapper = styled.div`
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
