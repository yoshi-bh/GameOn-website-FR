function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseTopBtn = document.querySelector(".close");
const modalCloseBtn = document.querySelector(".close-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const modalBody = document.querySelector(".modal-body");
const modalConf = document.querySelector(".modal-confirmation");

// FORM Elements
const form = document.querySelector("form");
const fnameInput = document.getElementById("first");
const lnameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const bdInput = document.getElementById("birthdate");
const qtyInput = document.getElementById("quantity");
const conditionInput = document.getElementById("checkbox1");
const radioInputs = document.querySelectorAll("input[type=radio]");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseTopBtn.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
	modalbg.style.display = "none";
}

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
	modalBody.style.display = "block";
	modalConf.style.display = "none";
}

// validate form
function testName(nameElement) {
	const fData = nameElement.parentElement;
	const value = nameElement.value.trim();
	fData.setAttribute("data-error-visible", "true");
	if (!value) {
		fData.setAttribute("data-error", "Veuillez renseigner ce champ.");
		throw new Error(`Le champ ${nameElement.id} est vide`);
	} else if (value.length < 2) {
		fData.setAttribute(
			"data-error",
			"Veuillez entrer 2 caractères ou plus pour le champ du nom."
		);
		throw new Error(`Le champ ${nameElement.id} est trop court`);
	}
	fData.setAttribute("data-error-visible", "false");
	return true;
}

function testEmail(emailElement) {
	const fData = emailElement.parentElement;
	const value = emailElement.value.trim();
	const regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+");
	fData.setAttribute("data-error-visible", "true");
	if (!value) {
		fData.setAttribute("data-error", "Veuillez renseigner ce champ.");
		throw new Error(`Le champ ${emailElement.id} est vide`);
	} else if (!regex.test(value)) {
		fData.setAttribute("data-error", "Veuillez entrer un email valid.");
		throw new Error(`Le champ ${emailElement.id} n'est pas valid`);
	}
	fData.setAttribute("data-error-visible", "false");
	return true;
}

function isNotEmpty(inptElement) {
	const fData = inptElement.parentElement;
	const value = inptElement.value.trim();
	if (!value) {
		fData.setAttribute("data-error", "Veuillez renseigner ce champ.");
		fData.setAttribute("data-error-visible", "true");
		throw new Error(`Le champ ${inptElement.id} est vide`);
	}
	fData.setAttribute("data-error-visible", "false");
	return true;
}

function isChecked(testedElements) {
	const fData = testedElements[0].parentElement;
	for (elem of testedElements) {
		console.log(elem);
		if (elem.checked) {
			fData.setAttribute("data-error-visible", "false");
			return true;
		}
	}
	fData.setAttribute("data-error-visible", "true");
	fData.setAttribute("data-error", "Cette case est obligatoire.");
	throw new Error(`Le champ ${testedElements[0].id} est obligatoire`);
}

form.addEventListener("submit", (event) => {
	try {
		event.preventDefault();

		testName(fnameInput);
		testName(lnameInput);
		testEmail(emailInput);
		isNotEmpty(bdInput);
		isNotEmpty(qtyInput);
		isChecked(radioInputs);
		isChecked([conditionInput]);

		modalBody.style.display = "none";
		modalConf.style.display = "flex";
	} catch (error) {
		console.log(error);
	}
});

fnameInput.addEventListener("change", () => testName(fnameInput));
lnameInput.addEventListener("change", () => testName(lnameInput));
emailInput.addEventListener("change", () => testEmail(emailInput));
bdInput.addEventListener("change", () => isNotEmpty(bdInput));
qtyInput.addEventListener("change", () => isNotEmpty(qtyInput));
conditionInput.addEventListener("change", () => isChecked([conditionInput]));
