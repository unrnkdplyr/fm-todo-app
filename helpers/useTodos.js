import { useContext } from 'react'
import { todosContext } from '../contexts/TodosProvider'

const useTodos = () => useContext(todosContext)

export default useTodos
