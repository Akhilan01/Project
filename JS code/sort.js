//   function sortExpensesByMonth() {
// 	// Get the expenses from localStorage
// 	const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
// 	// Sort the expenses by month
// 	expenses.sort((a, b) => {
// 	  const monthA = new Date(a.month + ' 1, 2000');
// 	  const monthB = new Date(b.month + ' 1, 2000');
// 	  return monthA - monthB;
// 	});
  
// 	// Save the sorted expenses back to localStorage
// 	localStorage.setItem('expenses', JSON.stringify(expenses));
  
// 	// Update the table with the sorted expenses
// 	updateExpensesTable(expenses);
//   }
  
//   function updateExpensesTable(expenses) {
// 	const table = document.getElementById('expensesTable');
// 	const tbody = document.createElement('tbody');
  
// 	expenses.forEach((expense) => {
// 	  const tr = document.createElement('tr');
// 	  tr.innerHTML = `
// 		<td>${expense.month}</td>
// 		<td>${expense.name}</td>
// 		<td>${expense.amount}</td>
// 	  `;
// 	  tbody.appendChild(tr);
// 	});
  
// 	table.replaceChild(tbody, table.tBodies[0]);
//   }
    
function sortExpensesByMonth(callback) {
	// Get the expenses from localStorage
	const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
	// Sort the expenses by month
	expenses.sort((a, b) => {
	  const monthA = new Date(a.month + ' 1, 2000');
	  const monthB = new Date(b.month + ' 1, 2000');
	  return monthA - monthB;
	});
  
	// Save the sorted expenses back to localStorage
	localStorage.setItem('expenses', JSON.stringify(expenses));
  
	// Update the table with the sorted expenses
	updateExpensesTable(expenses, () => {
	  if (callback) {
		callback();
	  }
	});
  }
  
  function updateExpensesTable(expenses, callback) {
	const table = document.getElementById('expensesTable');
	const tbody = document.createElement('tbody');
  
	expenses.forEach((expense) => {
	  const tr = document.createElement('tr');
	  tr.innerHTML = `
		<td>${expense.month}</td>
		<td>${expense.name}</td>
		<td>${expense.amount}</td>
	  `;
	  tbody.appendChild(tr);
	});
  
	table.replaceChild(tbody, table.tBodies[0]);
  
	if (callback) {
	  callback();
	}
  }
  
  window.onload = () => {
	setTimeout(() => {
	  sortExpensesByMonth();
	}, 100);
  };
  

  
