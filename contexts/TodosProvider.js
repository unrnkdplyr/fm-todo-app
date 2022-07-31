import { createContext, useState } from 'react'

import data from '../todo'

export const todosContext = createContext()

const TodosProvider = ({ children }) => <todosContext.Provider value={useState(data)}>{children}</todosContext.Provider>

export default TodosProvider
