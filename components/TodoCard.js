import Image from 'next/image'

import useFilter from '../helpers/useFilter'
import useLightClass from '../helpers/useLightClass'
import useTodos from '../helpers/useTodos'

import todoCardStyles from '../styles/TodoCard.module.css'

const TodoCard = ({ todo }) => {
  const [filter] = useFilter()
  const [todos, setTodos] = useTodos()

  const { id, task, completed } = todo

  const handleComplete = ({ target }) => {
    const { checked, id } = target
    const newTodos = Array.from(todos)
    const index = todos.findIndex((todo) => id == todo.id)
    newTodos[index].completed = checked
    setTodos(newTodos)
  }

  const handleRemove = ({ target }) => {
    const newTodos = todos.filter((todo) => todo.id != target.id)
    setTodos(newTodos)
  }

  let classes = todoCardStyles.li
  if ((filter === 'active' && completed) || (filter === 'completed' && !completed)) {
    classes += ` ${todoCardStyles.hide}`
  }

  return (
    <li className={useLightClass(classes, todoCardStyles.light)}>
      <label className={todoCardStyles.label}>
        <input
          className={useLightClass(todoCardStyles.input, todoCardStyles.light)}
          type="checkbox"
          id={id}
          onChange={handleComplete}
          checked={completed}
        />
        <span>{task}</span>
      </label>
      <div className={todoCardStyles.remove} onClick={handleRemove}>
        <Image src="/images/icon-cross.svg" alt="icon-cross" id={id} height={20} width={20} />
      </div>
    </li>
  )
}

export default TodoCard
