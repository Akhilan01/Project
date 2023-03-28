function addExpense() {
	const month = document.getElementById('month').value;
	const name = document.getElementById('expens').value;
	const amount = document.getElementById('expenseAmount').value;
  
	// Create a new expense object
	const expense = { month, name, amount };
  
	// Get the existing expenses from localStorage
	const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
	// Add the new expense to the array of expenses
	expenses.push(expense);
  
	// Save the updated expenses to localStorage
	localStorage.setItem('expenses', JSON.stringify(expenses));
  
	// Update the table with the new expense
	updateExpensesTable(expenses);
  }
  
  // Sort the expenses by month when the "Sort by Month" button is clicked
  document.querySelector('.sort-by-btn').addEventListener('click', sortExpensesByMonth);  