function addExpense() {
	// Get input values
	let month = document.getElementById("month").value;
	let expenseName = document.getElementById("expenseName").value;
	let expenseAmount = document.getElementById("expenseAmount").value;

	// Create table row
	let row = document.createElement("tr");
	let monthData = document.createElement("td");
	let expenseNameData = document.createElement("td");
	let expenseAmountData = document.createElement("td");

	// Add input values to row
	monthData.innerHTML = month;
	expenseNameData.innerHTML = expenseName;
	expenseAmountData.innerHTML = expenseAmount;

	// Add table data to row
	row.appendChild(monthData);
	row.appendChild(expenseNameData);
	row.appendChild(expenseAmountData);

	// Add row to table
	document.getElementById("expensesTable").appendChild(row);

	// Clear input fields
	document.getElementById("month").value = "";
	document.getElementById("expenseName").value = "";
	document.getElementById("expenseAmount").value = "";
}