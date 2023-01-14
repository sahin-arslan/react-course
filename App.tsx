import * as React from 'react';
import './style.css';
import ExpenseItem from './components/ExpenseItem';

export default function App() {
  const expenseItems = [
    {
      title: 'Car Insrumca',
      amout: 34.34,
      date: new Date(2022, 10, 12),
    },
    {
      title: 'Phome Bill',
      amout: 56.45,
      date: new Date(2022, 10, 31),
    },
    {
      title: 'Market',
      amout: 234.43,
      date: new Date(2022, 10, 16),
    },
  ];

  return (
    <div>
      <h1>Hello StackBlitz! </h1>
      <p>Start editing to see some magic happen :)</p>
      <ExpenseItem data={expenseItems[0]}></ExpenseItem>
      <ExpenseItem data={expenseItems[1]}></ExpenseItem>
      <ExpenseItem data={expenseItems[2]}></ExpenseItem>
    </div>
  );
}
















