import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/Layout'

import '../styles/pagination.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>East Timorese Hakka</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  )
}
