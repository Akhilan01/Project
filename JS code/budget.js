function addExpense() {
    // Get the values of the expense and amount inputs
    var expense = document.getElementById("expens").value;
    var amount = document.getElementById("expenseAmount").value;
    
    // Get the expenses table
    var table = document.getElementById("expensesTable");
    
    // Create a new row
    var newRow = table.insertRow();
    
    // Add the expense and amount to the row
    var expenseCell = newRow.insertCell(0);
    var amountCell = newRow.insertCell(1);
    expenseCell.innerHTML = expense;
    amountCell.innerHTML = amount;
  }