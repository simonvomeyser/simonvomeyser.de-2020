import styled from 'styled-components'
import {vars} from '../util/vars'
import {on} from 'src/util/breakpoint'

export const StyledTextSection = styled.div`
  p, ul, ol {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
    ul {
        list-style-type: disc;
        list-style-position: inside;
        p {
            display: inline-block;
        }
    }

    ol {
        list-style-type: decimal;
        list-style-position: outside;
        margin-left: 1rem;
    }
    ol > li + li{
        margin-top: 8px;
    }

    ul ul, ol ul {
        list-style-type: circle;
        list-style-position: inside;
        margin-left: 15px;
    }

    ol ol, ul ol {
        list-style-type: lower-latin;
        list-style-position: inside;
        margin-left: 15px;
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
