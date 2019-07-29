import styled from 'styled-components'
import { vars } from '../util/vars'
import { on } from 'util/breakpoint'

export const StyledFormInput = styled.div`
  border: ${getBorder};
  background: ${vars.styles.colors.neutral10};
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`

function getBorder(props) {
  if (props.hasError) {
    return `1px solid red;`
  }
  return `1px solid ${vars.styles.colors.neutral9};`
}
