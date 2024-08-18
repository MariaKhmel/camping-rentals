import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './Form.module.css';
import { useState } from 'react';
const Form = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className={css.formContainer}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>

      <form className={css.form}>
        <input
          type="text"
          placeholder="Name"
          required
          className={css.formInput}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className={css.formInput}
        />
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholderText="Booking date"
          dateFormat="MM/dd/yyyy"
          className={css.formInput}
        />
        <textarea
          placeholder="Comment"
          rows="4"
          className={css.comment}
        ></textarea>

        <button type="submit" className={css.formButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
