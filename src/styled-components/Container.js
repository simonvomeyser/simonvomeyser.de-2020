import styled from 'styled-components'
import { vars } from '../util/vars'
import { on } from 'src/util/breakpoint'

export const StyledContainer = styled.div`
  max-width: ${({ small }) => (small ? '600px' : '1200')};
  margin-left: auto;
  margin-right: auto;
`
