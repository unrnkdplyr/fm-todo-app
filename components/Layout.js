import Meta from './Meta'
import useLightClass from '../helpers/useLightClass'

import layoutStyles from '../styles/Layout.module.css'

const Layout = ({ children }) => (
  <>
    <Meta />
    <div className={useLightClass(layoutStyles['bg-image'], layoutStyles.light)} />
    <div className={layoutStyles.container}>{children}</div>
  </>
)

export default Layout
