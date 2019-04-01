import styled from 'styled-components'
import { vars } from '../util/vars'
import Link from 'i18n/Link'

const buttonStyles = `
  font-size: ${vars.styles.fontSizes.size6};
  font-family: ${vars.styles.fontFamilies.special};
  border: 3px solid ${vars.styles.colors.accent4};
  font-weight: 500;
  padding: 8px 5px;
  min-width: 200px;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 0.8;
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
