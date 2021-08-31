import { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { tasksSelector } from '../../Redux/Features/Tasks';
import Task from './Task';
import Calendar from '../Calendar';

import styles from './Tasks.module.css';

const Tasks = ({ tasks }) => {
  const [startDate, setStartDate] = useState(new Date());
  const filterTasks = tasks.filter((task) =>
    moment(task.date).isSame(startDate, 'day')
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.task_inner}>
        <h1 className={styles.heading}>
          Your plan for the {moment(startDate).format('dddd, MMMM Do YYYY')}
        </h1>
        {filterTasks.length > 0 ? (
          filterTasks.map((task) => <Task task={task} key={task.id} />)
        ) : (
          <p className={styles.emptyList}>Add the task to your list</p>
        )}
      </div>
      <div className={styles.calendar_inner}>
        <Calendar setStartDate={setStartDate} startDate={startDate} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: tasksSelector(state),
});

export default connect(mapStateToProps)(Tasks);
