import { createContext, useState } from 'react'

export const filterContext = createContext()

const FilterProvider = ({ children }) => <filterContext.Provider value={useState('all')}>{children}</filterContext.Provider>

export default FilterProvider
