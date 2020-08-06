import Head from 'next/head'

import Styles from './styles.module.sass'


function MyApp({ Component, pageProps }) {
  return (
    <div className={ Styles.root }>
      <Head>
        <title>Homework Assignment</title>
      </Head>

      <main className={ Styles.main }>
        <Component {...pageProps} />
      </main>
      
      <footer className={ Styles.footer }>
        
      </footer>
    </div>
  )
}

export default MyApp
