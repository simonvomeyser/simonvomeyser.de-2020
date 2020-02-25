import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { vars } from 'src/util/vars'

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
        animation-name: fadeIn;
        animation-duration: 1.5s;
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
    input, textarea {
      border: none;
      background: transparent;
      display: block;
      font-size: 1rem;
      width: 100%;
      color: ${vars.styles.colors.neutral5};
      outline: none;
      resize: none;
      line-height: 1.4;
      padding: .75rem;
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        25% {opacity: 0;}
        100% {opacity: 1;}
    }

`
