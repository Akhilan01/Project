const tableBody = document.querySelector('#records');
const form = document.querySelector('#recordForm');


// Add an event listener to the form submit button
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input values
  const monthInput = document.querySelector('#month');
  const salaryInput = document.querySelector('#salary');
  const month = monthInput.value;
  const salary = salaryInput.value;

  // Create a new table row and cells
  const newRow = document.createElement('tr');
  const monthCell = document.createElement('td');
  const salaryCell = document.createElement('td');

  // Add the input values to the cells
  monthCell.textContent = month;
  salaryCell.textContent = salary;

  // Add the cells to the row
  newRow.appendChild(monthCell);
  newRow.appendChild(salaryCell);

  // Add the row to the table body
  tableBody.appendChild(newRow);

  // Clear the input fields
  monthInput.value = '';
  salaryInput.value = '';
});