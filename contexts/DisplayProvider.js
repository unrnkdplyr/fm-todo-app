import { createContext, useState } from 'react'

export const displayContext = createContext()

const DisplayProvider = ({ children }) => <displayContext.Provider value={useState('moon')}>{children}</displayContext.Provider>

export default DisplayProvider
