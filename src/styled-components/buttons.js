import styled from 'styled-components'
import { vars } from '../util/vars'
import Link from 'i18n/Link'
import { on } from 'util/breakpoint'

const buttonStyles = `
  font-size: ${vars.styles.fontSizes.size5};
  font-family: ${vars.styles.fontFamilies.special};
  border: 3px solid ${vars.styles.colors.accent4};
  font-weight: 500;
  padding: 7px 20px;
  height: 48px;
  min-width: 180px;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), 
    0 1px 5px 0 rgba(0, 0, 0, 0.06), 
    0 3px 1px -2px rgba(0, 0, 0, 0.1);

  &:active {
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12),
        0 5px 5px -3px rgba(0, 0, 0, 0.4);
  }
  outline: none;
  :hover, :focus {
    opacity: 0.9;
    transform: scale(1.01);
  }
  ${on('onlyMobile')} {
      width: 100%;
  }
`
export const StyledPrimaryButton = styled.button`
  ${buttonStyles}
  background-color: ${vars.styles.colors.accent4};
  color: ${vars.styles.colors.white};
`
export const StyledSecondaryButton = styled.button`
  ${buttonStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${vars.styles.colors.accent4};
  color: ${vars.styles.colors.accent4};
`

export const StyledPrimaryButtonLink = styled(Link)`
  ${buttonStyles}
  background-color: ${vars.styles.colors.accent4};
  color: ${vars.styles.colors.white};
`

export const StyledSecondaryButtonLink = styled(Link)`
  ${buttonStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${vars.styles.colors.accent4};
  color: ${vars.styles.colors.accent4};
`
