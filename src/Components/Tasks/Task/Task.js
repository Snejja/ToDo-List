import { connect } from 'react-redux';
import React from 'react';
import cn from 'classnames';

import { deleteTask, isChecked } from '../../../Redux/Features/Tasks';
import { ReactComponent as Delete } from '../../../Icons/delete.svg';

import styles from './Task.module.css';

const Task = ({ task, onDelete, isChecked }) => {
  return (
    <div className={styles.wrapper}>
      <input
        type='checkbox'
        id='activeCheck'
        className={styles.checkbox}
        checked={task.isChecked}
        onChange={isChecked}
      />
      <label
        htmlFor='checkbox'
        className={cn(styles.text, {
          [styles.textСrossOut]: task.isChecked,
        })}
      >
        {task.text}
      </label>
      <button onClick={onDelete} className={styles.button}>
        <Delete />
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch, { task }) => ({
  onDelete: () => dispatch(deleteTask(task.id)),
  isChecked: () => dispatch(isChecked(task.id)),
});

export default connect(null, mapDispatchToProps)(Task);
