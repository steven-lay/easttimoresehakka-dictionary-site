import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { createGlobalStyle } from 'styled-components'
import Header from '~/components/Header'
import ScrollToTop from '~/components/ScrollToTop'

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        titleTemplate="%s | East Timorese Hakka"
        defaultTitle="East Timorese Hakka"
        description="A website dedicated to the East Timorese Hakka language"
      />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  )
}

export default MyApp
