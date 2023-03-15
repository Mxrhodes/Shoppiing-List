// declarations //
let enterButton = document.getElementById('enter');
let input = document.getElementById('user-input');
let ul = document.querySelector('ul');
let itemDelButton;
let idValue = 0;

// Functions //
function createListElement(i=input.value) {
	let itemName = capitalizeFirstLetter(i)
	let li = document.createElement('li')
	li.setAttribute('data-id', idValue)
	li.appendChild(document.createTextNode(itemName))
	li.appendChild(createDeleteElement())
	ul.appendChild(li)

	li.addEventListener('click', function() {
		li.classList.toggle('done')
	})

	input.value = ''
}

function createDeleteElement() {
	let idb = document.createElement('button')
	idb.classList.add('del')
	idb.setAttribute('data-id', idValue)
	idValue++
	idb.appendChild(document.createTextNode('delete'))

	itemDelButton = idb
	itemDelButton.addEventListener('click', identifyAndDelete)

	return idb
}

function identifyAndDelete(element) {
	let matchingDataId = element.target.getAttribute('data-id')
	let foundit = document.querySelector(`[data-id="${matchingDataId}"]`)
	foundit.remove()
}

function inputLength() {
	return input.value.length
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function onPageLoad() {
	createListElement("Notebook")
	createListElement("Jello")
	createListElement("Spinach")
	createListElement("Rice")
	createListElement("Birthday Cake")
	createListElement("Candles")
}

function capitalizeFirstLetter(input) {
	let lowerCaseInput = input.toLowerCase()
	let i = lowerCaseInput.charAt(0)
	let returnInput = i.toUpperCase() + lowerCaseInput.slice(1);

	return returnInput;
}

onPageLoad();

// Add eventListeners //
enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
