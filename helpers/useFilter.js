import { useContext } from 'react'
import { filterContext } from '../contexts/FilterProvider'

const useFilter = () => useContext(filterContext)

export default useFilter
