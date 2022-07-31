import useLightClass from '../helpers/useLightClass'

import todoInputStyles from '../styles/TodoInput.module.css'

const TodoInput = ({ onSubmitHandler }) => {
  return (
    <form className={todoInputStyles.form} onSubmit={onSubmitHandler}>
      <input
        className={useLightClass(todoInputStyles.input, todoInputStyles.light)}
        type="text"
        name="todo"
        placeholder="Create a new todo..."
      />
      <button className={useLightClass(todoInputStyles.button, todoInputStyles.light)} />
    </form>
  )
}

export default TodoInput
