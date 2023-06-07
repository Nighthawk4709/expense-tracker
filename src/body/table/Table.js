import React from 'react';

const Table = ({ expenses, onDeleteExpense }) => {
  let totalIncome = 0;
  let totalExpense = 0;

  expenses.forEach((expense) => {
    totalIncome += expense.received;
    totalExpense += expense.expense;
  });

  const currentTotal = totalIncome - totalExpense;

  const handleDeleteExpense = (index) => {
    onDeleteExpense(index);
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Source</th>
          <th>Received</th>
          <th>Expense</th>
          <th>Income</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.source}</td>
            <td>{expense.received}</td>
            <td>{expense.expense}</td>
            <td>{expense.received - expense.expense}</td>
            <td>
              <button onClick={() => handleDeleteExpense(index)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">Total:</td>
          <td>{currentTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;