import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() 
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f2f2f2',
  };

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    // Fetch transactions data from your API
    fetch('http://localhost:8001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addTransaction = (newTransaction) => {
    // Update the state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <SearchBar filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default App;
