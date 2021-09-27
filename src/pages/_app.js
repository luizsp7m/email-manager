import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyle from '../styles/GlobalStyle';
import { Dark, Light } from '../styles/Themes';

import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

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
