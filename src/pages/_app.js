import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyle from '../styles/GlobalStyle';
import { Dark, Light } from '../styles/Themes';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={Dark}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}
