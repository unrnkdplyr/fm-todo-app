import RadioButton from './RadioButton'

import todoBottomStyles from '../styles/TodoBottom.module.css'

const TodoBottom = ({ filter, isMobile, noOfActive, onClearHandler, onFilterHandler }) => {
  const count = noOfActive || 0
  const classes = isMobile ? todoBottomStyles.mobile : todoBottomStyles.bottom
  const filters = ['all', 'active', 'completed']

  return (
    <div className={classes}>
      <div className={todoBottomStyles['no-of-active']}>
        <span>{count}</span>
        {` item${count > 1 ? 's' : ''} left`}
      </div>
      {!isMobile && (
        <div className={todoBottomStyles.filters}>
          {filters.map((filterName, i) => (
            <RadioButton key={i} name="filter" onFilterHandler={onFilterHandler} title={filterName} selected={filter} />
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
