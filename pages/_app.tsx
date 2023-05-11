import Layout from '@/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
          <title key="title">NextJS News App</title>
          <meta name="description" key="description" content="NextJS crash course by Coding in Flow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
