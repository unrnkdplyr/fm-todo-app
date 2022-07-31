import Meta from './Meta'

import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => (
  <>
    <Meta />
    <div className={layoutStyles['bg-image']} />
    <div className={layoutStyles.container}>{children}</div>
  </>
)

export default Layout
