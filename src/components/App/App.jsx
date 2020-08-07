import Head from 'next/head'

import Styles from './styles.module.sass'


export default function App({ Component, pageProps }) {
  return (
    <div className={ Styles.root }>
      <Head>
        <title>TST Homework Assignment</title>
      </Head>

      <main className={ Styles.main }>
        <Component { ...pageProps } />
      </main>
    </div>
  )
}
