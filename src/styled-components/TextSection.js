import styled from 'styled-components'
import { vars } from '../util/vars'
import { on } from 'src/util/breakpoint'

export const StyledTextSection = styled.div`
  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  h2,
  h2,
  h3 {
    margin-bottom: 0.5rem;
  }

  strong {
    background: ${vars.styles.colors.accent1};
    color: ${vars.styles.colors.accent4};
    padding: 2px 4px;
  }

  a {
    color: inherit;
    display: inline-block;
    position: relative;
    transition: 0.3s color ease-in-out;

    &:after {
      transition: 0.3s width ease-in-out;
      background: ${vars.styles.colors.accent3};
      display: block;
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 50%;
      height: 3px;
      width: calc(100% + 5px);
      transform: translateX(-50%);
    }

    &:hover {
      color: ${vars.styles.colors.accent3};

      &:after {
        width: calc(100%);
      }
    }
  }
`
