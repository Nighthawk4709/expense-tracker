import React, { useState } from 'react';
import './App.css';
import './body/table/custom-table.css';
import Form from './body/table/Form';
import Table from './body/table/Table';


const App = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    // Add the new expense to the expenses array
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <Form onAddExpense={handleAddExpense} />
      <Table expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
};

export default App;