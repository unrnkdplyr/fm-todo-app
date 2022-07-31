import { useContext } from 'react'
import { displayContext } from '../contexts/DisplayProvider'

const useLightClass = (class1, class2) => {
  const [display] = useContext(displayContext)
  return `${class1}${display === 'sun' ? ` ${class2}` : ''}`
}

export default useLightClass
