import React, { useState } from 'react';
import styled from 'styled-components';

function TransactionForm({ addTransaction }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create a new transaction object
    const newTransaction = {
      date: date,
      description: description,
      amount: amount
    };
    
    // Pass the new transaction to the parent component
    addTransaction(newTransaction);

    // Clear form inputs after submission
    setDate('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
