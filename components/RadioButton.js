import radioButtonStyles from '../styles/RadioButton.module.css'

const RadioButton = ({ name, onFilterHandler, selected, title }) => (
  <label className={radioButtonStyles.label}>
    <input type="radio" id={title} name={name} onChange={onFilterHandler} checked={title === selected} />
    <span className={radioButtonStyles.span}>{title}</span>
  </label>
)

export default RadioButton
