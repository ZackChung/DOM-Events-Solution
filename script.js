var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liList = document.getElementsByTagName("li");
var deleteBtns = document.getElementsByClassName("delete");

for(var i = 0; i < liList.length; i++) {
	liList[i].addEventListener("click", modifyItems);
	createDeleteButton(liList[i]);
}

for(var i = 0; i < deleteBtns.length; i++) {
	deleteBtns[i].addEventListener("click", deleteItem);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createDeleteButton(li);
	li.addEventListener("click", modifyItems);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function createDeleteButton(li) {
	var deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.appendChild(document.createTextNode("delete"));
	li.innerHTML = li.innerHTML + "	";
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteItem);
}

function modifyItems() {
	this.classList.toggle("done");
}

function deleteItem() {
	this.parentElement.remove();
}