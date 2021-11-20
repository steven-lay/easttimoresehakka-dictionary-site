import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'

const GlobalStyles = createGlobalStyle`
  html {
    overflow-x: hidden;
    margin-right: calc(-1 * (100vw - 100%));
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>East Timorese Hakka</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  )
}
