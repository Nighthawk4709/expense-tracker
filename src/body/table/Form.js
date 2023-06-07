import React, { useState } from 'react';

const Form = ({ onAddExpense }) => {
  const [expense, setExpense] = useState('');
  const [received, setReceived] = useState('');
  const [source, setSource] = useState('');

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleReceivedChange = (e) => {
    setReceived(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new expense object with the entered data
    const newExpense = {
      expense: Number(expense),
      received: Number(received),
      source: source,
    };

    // Call the onAddExpense callback with the new expense data
    onAddExpense(newExpense);

    // Reset the form fields
    setExpense('');
    setReceived('');
    setSource('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Expense:
          <input
            type="number"
            value={expense}
            onChange={handleExpenseChange}
          />
        </label>
      </div>
      <div>
        <label>
          Received:
          <input
            type="number"
            value={received}
            onChange={handleReceivedChange}
          />
        </label>
      </div>
      <div>
        <label>
          Source:
          <input type="text" value={source} onChange={handleSourceChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;