import TodoCard from './TodoCard'

import todoListStyles from '../styles/TodoList.module.css'

const TodoList = ({ filter, list, onCompleteHandler, onRemoveHandler }) => (
  <>
    <ul className={todoListStyles.ul}>
      {list.map((todo) => (
        <TodoCard key={todo.id} filter={filter} onCompleteHandler={onCompleteHandler} onRemoveHandler={onRemoveHandler} todo={todo} />
      ))}
    </ul>
  </>
)

export default TodoList
