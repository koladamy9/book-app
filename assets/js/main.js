const author =document.querySelector("#author").ariaValue
const title =document.querySelector("#title").value
const isbn =document.querySelector("#isbn").value
const amount =document.querySelector("#amount").value

const table = document.querySelector("#bookTable");
const newRow =table.insertRow(-1);

const authorCell = newRow.insertCell(0);
const titleCell = newRow.insertCell(1);
const isbnCell = newRow.insertCell(2);
const amountCell = newRow.insertCell(3);
const deleteCell = newRow.insertCell(4);

authorCell.innerHTML =author;
titleCell.innerHTML =title;
isbnCell.innerHTML =isbn;
amountCell.innerHTML =amount;

const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
deleteButton.className = "delete-btn btn btn-outline-danger";

deleteButton.addEventListener("click", function(){
    const row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
});

deleteCell.appendChild(deleteButton);
clearform();






