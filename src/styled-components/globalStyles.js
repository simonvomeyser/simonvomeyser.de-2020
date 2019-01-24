import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { vars } from '../util/vars'

export default createGlobalStyle`
    ${reset}
    html {
        font-size: ${vars.styles.fontSizes.base};
        font-family: futura, sans-serif;
    }
    body {
        margin: 0;
        background-color: ${vars.styles.colors.neutral1};
    }
    a, a:hover, a:focus, a:visited, a:active {
        text-decoration: none;
        color: inherit;
    }
`
