import Image from 'next/image'

import headerStyles from '../styles/Header.module.css'

const Header = () => (
  <header className={headerStyles.header}>
    <h1 className={headerStyles.h1}>TODO</h1>
    <div className={headerStyles.icon}>
      <Image src="/images/icon-sun.svg" alt="icon-sun" height={26} width={26} />
    </div>
  </header>
)

export default Header
