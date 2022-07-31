import Image from 'next/image'
import { useContext } from 'react'

import { displayContext } from '../contexts/DisplayProvider'

import headerStyles from '../styles/Header.module.css'

const Header = () => {
  const [display, setDisplay] = useContext(displayContext)

  const handleClick = () => {
    if (display === 'moon') {
      document.body.classList.add('light')
      setDisplay('sun')
    } else {
      document.body.classList.remove('light')
      setDisplay('moon')
    }
  }

  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.h1}>TODO</h1>
      <div className={headerStyles.icon} onClick={handleClick}>
        <Image src={`/images/icon-${display}.svg`} alt={`icon-${display}`} height={26} width={26} />
      </div>
    </header>
  )
}

export default Header
