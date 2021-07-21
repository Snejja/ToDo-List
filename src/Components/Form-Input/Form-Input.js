import { connect } from 'react-redux';
import { addTask } from '../../Redux/Features/Tasks';

import styles from './Form-Input.module.css';

const FormInput = ({ onSubmit }) => {
  let today = new Date().toISOString().substring(0, 10);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.text.value, today);
  };

  const onChangeDate = (event) => {
    today = event.target.value;
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className={styles.wrapper}>
          <input type='text' name='text' className={styles.text} />
          <input
            type='date'
            value={today}
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
