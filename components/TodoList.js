import TodoCard from './TodoCard'

import todoListStyles from '../styles/TodoList.module.css'

const TodoList = ({ list }) => (
  <>
    <ul className={todoListStyles.ul}>
      {list.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </ul>
  </>
)

export default TodoList
