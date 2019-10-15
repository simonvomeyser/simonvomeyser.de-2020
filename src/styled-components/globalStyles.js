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
    input, textarea {
      border: none;
      background: transparent;
      display: block;
      width: 100%;
      font-size: 1rem;
      color: ${vars.styles.colors.black};
      outline: none;
    }
    @keyframes heartBeat {
    0% {
      transform: scale(1);
    }

    14% {
      transform: scale(1.1);
    }

    28% {
      transform: scale(1);
    }

    42% {
      transform: scale(1.1);
    }

    70% {
      transform: scale(1);
    }
  }
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

`
