import styled from 'styled-components'
import { vars } from '../util/vars'
import Link from 'i18n/Link'
import { on } from 'util/breakpoint'

export const StyledPageHeading = styled.h1`
  font-size: ${vars.styles.fontSizes.size9};
  font-weight: 500;
  font-family: ${vars.styles.fontFamilies.special};
  color: ${vars.styles.colors.accent4};
  margin-bottom: 2rem;
  text-align: center;

  ${on('onlyMobile')} {
    margin-bottom: 1.5rem;
  }
`
