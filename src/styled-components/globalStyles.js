import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { vars } from 'util/vars'

export default createGlobalStyle`
    ${reset}
    html {
      box-sizing: border-box;
        font-size: ${vars.styles.fontSizes.base};
        font-family: futura, sans-serif;
        color: ${vars.styles.colors.black}
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
        color: inherit;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    p + p {
      margin-top: 1rem;
    }
`
