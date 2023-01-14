import * as React from 'react';
import '../style.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <div className="expenceCard">
      <ExpenseDate date={props.data.date} />
      <div className="expenseCard-description">
        <h2>{props.data.title}</h2>
        <div className="amount">${props.data.amaout}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
