import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'util/vars'
import { on } from 'util/breakpoint'
import { LogoSvg, UserSvg, ProjectsSvg, WriteSvg, PaperPlaneSvg, LegalSvg} from 'svg';
import NavigationLink from 'components/navigatonLink'

export default class Navigation extends Component {
  render() {
    return (
      <StyledWrapper>
        Mobile
      </StyledWrapper>
    )
  }
}

const StyledWrapper = styled.div`
  display:none;
  position: fixed;
  background-color: ${vars.styles.colors.neutral6};
  left: 0;
  top: 0;
  width: 100%;
  height: ${ vars.styles.sizes.navigationMobileHeight };
  justify-content: space-between;
  align-items: center;

  ${on('onlyMobile')} {
    display: flex;
  }
`