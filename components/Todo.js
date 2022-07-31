import { useEffect, useState } from 'react'

import TodoBottom from './TodoBottom'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = ({ data }) => {
  const [todos, setTodos] = useState(data)
  const [filter, setFilter] = useState('all')
  const noOfActive = todos.filter((todo) => !todo.completed).length || 0

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleComplete = ({ target }) => {
    const { checked, id } = target
    const newTodos = Array.from(todos)
    const index = todos.findIndex((todo) => id == todo.id)
    newTodos[index].completed = checked
    setTodos(newTodos)
  }

  const handleFilter = ({ target }) => {
    const { id } = target
    setFilter(id)
  }
  const handleRemove = ({ target }) => {
    const newTodos = todos.filter((todo) => todo.id != target.id)
    setTodos(newTodos)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // prevent form submit

    const task = event.target.todo.value
    if (task) {
      setTodos((prevState) => {
        prevState.sort((a, b) => (a.id > b.id ? 1 : -1))
        const id = prevState[prevState.length - 1].id + 1
        return [...prevState, { id, task, completed: false }]
      })
      event.target.todo.value = ''
    }
  }

  return (
    <>
      <TodoInput onSubmitHandler={handleSubmit} />
      <TodoList filter={filter} list={todos} onCompleteHandler={handleComplete} onRemoveHandler={handleRemove} />
      <TodoBottom filter={filter} isMobile noOfActive={noOfActive} onClearHandler={handleClear} />
      <TodoBottom filter={filter} noOfActive={noOfActive} onClearHandler={handleClear} onFilterHandler={handleFilter} />
    </>
  )
}

export default Todo
