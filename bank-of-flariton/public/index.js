const searchBar = document.getElementById('searchBar');
const transactionForm = document.getElementById('transactionForm');
const tableBody = document.getElementById('tableBody');

const transactions = []; // In-memory storage for transactions

transactionForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const date = document.getElementById('transactionDate').value;
  const description = document.getElementById('transactionDescription').value;
  const amount = document.getElementById('transactionAmount').value;
  
  const newTransaction = { date, description, amount };
  transactions.push(newTransaction);

  updateTable(transactions);
  transactionForm.reset();
});

searchBar.addEventListener('input', function () {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(searchTerm));
  updateTable(filteredTransactions);
});

function updateTable(transactionsList) {
  tableBody.innerHTML = '';
  transactionsList.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${transaction.date}</td>
      <td>${transaction.description}</td>
      <td>${transaction.amount}</td>
    `;
    tableBody.appendChild(row);
  });
}
