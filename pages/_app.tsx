import '@/styles/globals.scss'
import '@/styles/tailwind-utils.css'
import '@/styles/tailwind.css'

import { AppProps } from 'next/app'
import Layout from '@/components/organisms/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
