import TodoBottom from './TodoBottom'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import FilterProvider from '../contexts/FilterProvider'
import useTodos from '../helpers/useTodos'

const Todo = () => {
  const [todos, setTodos] = useTodos()
  const noOfActive = todos.filter((todo) => !todo.completed).length || 0

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
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
    <FilterProvider>
      <TodoInput onSubmitHandler={handleSubmit} />
      <TodoList list={todos} />
      <TodoBottom isMobile noOfActive={noOfActive} onClearHandler={handleClear} />
      <TodoBottom noOfActive={noOfActive} onClearHandler={handleClear} />
    </FilterProvider>
  )
}

export default Todo
