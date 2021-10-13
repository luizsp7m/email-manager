import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  input, button {
    outline: 0;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
  }

  @media(max-width: 425px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyle;