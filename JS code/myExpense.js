function addExpense() {
	// Get input values
	let month = document.getElementById("month").value;
	let expens = document.getElementById("expens").value;
	let expenseAmount = document.getElementById("expenseAmount").value;

	// Create table row
	let row = document.createElement("tr");
	let monthData = document.createElement("td");
	let expensData = document.createElement("td");
	let expenseAmountData = document.createElement("td");

	// Add input values to row
	monthData.innerHTML = month;
	expensData.innerHTML = expens;
	expenseAmountData.innerHTML = expenseAmount;

	// Add table data to row
	row.appendChild(monthData);
	row.appendChild(expensData);
	row.appendChild(expenseAmountData);

	// Add row to table
	document.getElementById("expensesTable").appendChild(row);

	// Clear input fields
	document.getElementById("month").value = "";
	document.getElementById("expens").value = "";
	document.getElementById("expenseAmount").value = "";
}







function addExpense() {
	// Get the values of the input fields
	const month = document.getElementById("month").value;
	const expens = document.getElementById("expens").value;
	const expenseAmount = document.getElementById("expenseAmount").value;
  
	// Create an object to store the expense details
	const expense = {
	  month: month,
	  expens: expens,
	  expenseAmount: expenseAmount
	};
  
	// Check if there are any existing expenses in the local storage
	let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  
	// Add the new expense to the array of expenses
	expenses.push(expense);
  
	// Save the updated array of expenses to the local storage
	localStorage.setItem("expenses", JSON.stringify(expenses));
  
	// Display the updated expenses table
	displayExpenses();
  }
  
  function displayExpenses() {
	// Get the expenses from the local storage
	const expenses = JSON.parse(localStorage.getItem("expenses"));
  
	// Get the expenses table element
	const expensesTable = document.getElementById("expensesTable");
  
	// Clear the existing rows from the table
	expensesTable.innerHTML = "<thead><tr><th>Month</th><th>Expense Name</th><th>Expense Amount</th></tr></thead>";
  
	// Loop through the expenses and add a row to the table for each one
	expenses.forEach(expense => {
	  const row = expensesTable.insertRow(-1);
	  const monthCell = row.insertCell(0);
	  const expensCell = row.insertCell(1);
	  const expenseAmountCell = row.insertCell(2);
	  monthCell.innerHTML = expense.month;
	  expensCell.innerHTML = expense.expens;
	  expenseAmountCell.innerHTML = expense.expenseAmount;
	});
  }
  
  // Call the displayExpenses function when the page loads to show any existing expenses
  displayExpenses();
