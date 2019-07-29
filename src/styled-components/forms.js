import styled from 'styled-components'
import { vars } from '../util/vars'
import { on } from 'util/breakpoint'

export const StyledFormInput = styled.div`
  border: ${getBorder};
  background: ${vars.styles.colors.neutral10};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
`

function getBorder(props) {
  if (props.hasError) {
    return `1px solid red;`
  }
  return `1px solid ${vars.styles.colors.neutral9};`
}
