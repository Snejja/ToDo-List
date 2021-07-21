import { connect } from 'react-redux';
import React, { useState } from 'react';
import cn from 'classnames';

import { deleteTask, isChecked } from '../../../Redux/Features/Tasks';

import styles from './Task.module.css';

const Task = ({ task, onDelete, isChecked }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.wrapper}>
      <input
        type='checkbox'
        id='activeCheck'
        className={styles.checkbox}
        checked={checked}
        onChange={() => isChecked(setChecked(!checked))}
      />
      <label
        htmlFor='checkbox'
        className={cn(styles.text, {
          [styles.textСrossOut]: checked,
        })}
      >
        {task.text}
      </label>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, { task }) => ({
  onDelete: () => dispatch(deleteTask(task.id)),
  isChecked: () => dispatch(isChecked(task.id)),
});

export default connect(null, mapDispatchToProps)(Task);
