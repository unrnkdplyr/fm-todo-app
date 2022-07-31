import Image from 'next/image'

import todoCardStyles from '../styles/TodoCard.module.css'

const TodoCard = ({ filter, onCompleteHandler, onRemoveHandler, todo }) => {
  const { id, task, completed } = todo

  let classes = todoCardStyles.li
  if ((filter === 'active' && completed) || (filter === 'completed' && !completed)) {
    classes += ` ${todoCardStyles.hide}`
  }

  return (
    <li className={classes}>
      <label className={todoCardStyles.label}>
        <input className={todoCardStyles.input} type="checkbox" id={id} onChange={onCompleteHandler} checked={completed} />
        <span>{task}</span>
      </label>
      <div className={todoCardStyles.remove} onClick={onRemoveHandler}>
        <Image src="/images/icon-cross.svg" alt="icon-cross" id={id} height={20} width={20} />
      </div>
    </li>
  )
}

export default TodoCard
