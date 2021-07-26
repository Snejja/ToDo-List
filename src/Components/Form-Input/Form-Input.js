import { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../Redux/Features/Tasks';

import styles from './Form-Input.module.css';

const FormInput = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState(new Date());

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (event.target.text.value === '') return;

    onSubmit(event.target.text.value, startDate);
    event.target.text.value = '';
  };

  const onChangeDate = (event) => {
    setStartDate(event.target.valueAsDate);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className={styles.wrapper}>
          <input type='text' name='text' className={styles.text} />
          <input
            type='date'
            value={startDate.toISOString().substring(0, 10)}
            onChange={onChangeDate}
            className={styles.data}
          />
          <button className={styles.submit}>ADD</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (task, date) => dispatch(addTask(task, date)),
});

export default connect(null, mapDispatchToProps)(FormInput);
