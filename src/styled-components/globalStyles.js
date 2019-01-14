import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
    body {
        ${reset}
        background-color: green;
    }
`;