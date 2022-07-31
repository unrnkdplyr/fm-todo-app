import RadioButton from './RadioButton'
import useFilter from '../helpers/useFilter'
import useLightClass from '../helpers/useLightClass'

import todoBottomStyles from '../styles/TodoBottom.module.css'

const TodoBottom = ({ isMobile, noOfActive, onClearHandler }) => {
  const [filter, setFilter] = useFilter()

  const classes = isMobile ? todoBottomStyles.mobile : todoBottomStyles.bottom
  const count = noOfActive || 0
  const filters = ['all', 'active', 'completed']

  const handleChange = ({ target }) => {
    const { id } = target
    setFilter(id)
  }

  return (
    <div className={useLightClass(classes, todoBottomStyles.light)}>
      <div className={todoBottomStyles['no-of-active']}>
        <span>{count || 'No'}</span>
        {` item${!count || count > 1 ? 's' : ''} left`}
      </div>
      {!isMobile && (
        <div className={todoBottomStyles.filters}>
          {filters.map((filterName, i) => (
            <RadioButton key={i} name="filter" onChangeHandler={handleChange} title={filterName} selected={filter} />
          ))}
        </div>
      )}
      <div className={todoBottomStyles.clear} onClick={onClearHandler}>
        clear completed
      </div>
    </div>
  )
}

export default TodoBottom
