let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById("category-select");
const amountInput = document.getElementById("amount-input");
const dateInput = document.getElementById("date-input");
const addBtn = document.getElementById("add-btn");
const expensesTableBody = document.getElementById("expenses-table-body");
const totalAmountCell = document.getElementById("total-amount");

addBtn.addEventListener("click", function () {
  const category = categorySelect.value;
  const amount = Number(amountInput.value);
  const date = dateInput.value;

  if (category === "") {
    alert("Please select a category");
    return;
  } else if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  } else if (date === "") {
    alert("Please select a date");
    return;
  } else {
    expenses.push({ category, amount, date });
  }

  totalAmount += amount;
  totalAmountCell.textContent = totalAmount;

  updateTable();
});

function updateTable() {
  expensesTableBody.innerHTML = ""; // Clear the table

  expenses.forEach((expense, index) => {
    const newRow = expensesTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    categoryCell.textContent = expense.category;

    const amountCell = newRow.insertCell();
    amountCell.textContent = expense.amount;

    const dateCell = newRow.insertCell();
    dateCell.textContent = expense.date;

    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.addEventListener("click", function () {
      totalAmount -= expenses[index].amount;
      totalAmountCell.textContent = totalAmount;
      expenses.splice(index, 1);
      updateTable(); // Update the table after deleting
    });
    deleteCell.appendChild(deleteBtn);
  });
}
