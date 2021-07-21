import { connect } from 'react-redux';

import { tasksSelector } from '../../Redux/Features/Tasks';

import Task from './Task';

import styles from './Tasks.module.css';

const Tasks = ({ tasks }) => (
  <div className={styles.wrapper}>
    <h1 className={styles.heading}>You list :)</h1>
    {tasks?.length > 0 ? (
      tasks.map((task) => <Task task={task} key={task.id} />)
    ) : (
      <p className={styles.emptyList}>Add the task to your list</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  tasks: tasksSelector(state),
});

export default connect(mapStateToProps)(Tasks);
