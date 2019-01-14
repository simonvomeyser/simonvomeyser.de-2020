import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import {vars} from '../util/vars'

export default createGlobalStyle`
    body {
        ${reset}
        margin: 0;
        background-color: ${vars.styles.colors.white3};
    }
`;