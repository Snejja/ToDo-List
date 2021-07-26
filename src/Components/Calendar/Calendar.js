import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = ({ startDate, setStartDate }) => (
  <div>
    <ReactCalendar
      onChange={setStartDate}
      value={startDate}
      locale='en-EN'
      className='calendar'
    />
  </div>
);

export default Calendar;
