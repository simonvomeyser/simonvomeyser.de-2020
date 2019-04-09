import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { vars } from 'util/vars'

export default createGlobalStyle`
    ${reset}
    html {
      box-sizing: border-box;
      font-size: ${vars.styles.fontSizes.base};
      font-family: ${vars.styles.fontFamilies.default};
      color: ${vars.styles.colors.black};
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
        margin: 0;
        background-color: ${vars.styles.colors.neutral1};
    }
    a, a:hover, a:focus, a:visited, a:active {
        text-decoration: none;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    p {
      font-weight: 400;
      line-height: 1.3;
      font-size: ${vars.styles.fontSizes.size4};
      color: ${vars.styles.colors.neutral4};
    }
    p + p {
      margin-top: 1rem;
    }
    i {
      font-style: italic;
    }
    a, button {
      cursor: pointer;
    }
    b, strong {
      font-weight: bold;
    }
`
