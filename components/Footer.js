import useLightClass from '../helpers/useLightClass'

import footerStyles from '../styles/Footer.module.css'

const Footer = () => (
  <footer className={useLightClass(footerStyles.footer, footerStyles.light)}>
    <span>Drag and drop to reorder list</span>
  </footer>
)

export default Footer
