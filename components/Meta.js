import Head from 'next/head'

const Meta = ({ title }) => (
  <Head>
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
    <title>{title}</title>
  </Head>
)

Meta.defaultProps = {
  title: 'Challenge | Todo App'
}

export default Meta
