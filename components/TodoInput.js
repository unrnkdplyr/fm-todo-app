import todoInputStyles from '../styles/TodoInput.module.css'

const TodoInput = ({ onSubmitHandler }) => (
  <form className={todoInputStyles.form} onSubmit={onSubmitHandler}>
    <input className={todoInputStyles.input} type="text" name="todo" placeholder="Create a new todo..." />
    <button className={todoInputStyles.button} />
  </form>
)

export default TodoInput
