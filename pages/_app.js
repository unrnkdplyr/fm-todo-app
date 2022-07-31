import Layout from '../components/Layout'
import DisplayProvider from '../contexts/DisplayProvider'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DisplayProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DisplayProvider>
  )
}

export default MyApp
