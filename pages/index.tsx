import Head from 'next/head'
import { APP_NAME, APP_DOMAIN, APP_DESCRIPTION } from '@/lib/constants'

export default function Index () {
  return (
    <>
      <Head>
        <title>{ APP_NAME }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={ APP_DESCRIPTION } />
        <meta property="og:title" content={ APP_NAME } />
        <meta property="og:description" content={ APP_DESCRIPTION } />
        <meta property="og:image" content={ `${APP_DOMAIN}/ogp.png` } />
        <meta name="twitter:image" content={ `${APP_DOMAIN}/ogp.png` }/>
        <meta name="twitter:card" content="summary"/>
      </Head>
      <div className="lg:mx-auto mx-5 my-2 max-w-screen-xl">
      </div>
    </>
  )
}
