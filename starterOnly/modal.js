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
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");

const fnameInput = document.getElementById("first");
const lnameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const bdInput = document.getElementById("birthdate");
const qtyInput = document.getElementById("quantity");

const modalBody = document.querySelector(".modal-body");
const modalConf = document.querySelector(".modal-confirmation");

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

// fdata.setAttribute("data-error", "Veuillez renseigner ce champ.");
// 	} else if (inpt.target.validity.tooShort) {
// 		fdata.setAttribute(
// 			"data-error",
// 			"Veuillez entrer 2 caractères ou plus pour le champ du nom."
// 		);
// 	}
// 	fdata.setAttribute("data-error-visible", "true");

function testName(nameElement) {
	const fData = nameElement.parentElement;
	fData.setAttribute("data-error-visible", "true");
	if (!nameElement.value) {
		fData.setAttribute("data-error", "Veuillez renseigner ce champ.");
		return false;
	} else if (nameElement.value.length < 2) {
		fData.setAttribute(
			"data-error",
			"Veuillez entrer 2 caractères ou plus pour le champ du nom."
		);
		return false;
	}
	fData.setAttribute("data-error-visible", "false");
	return true;
}

function isNotEmpty(inptElement) {
	const fData = inptElement.parentElement;
	if (!inptElement.value) {
		fData.setAttribute("data-error", "Veuillez renseigner ce champ.");
		fData.setAttribute("data-error-visible", "true");
		return false;
	}
	fData.setAttribute("data-error-visible", "false");
	return true;
}

function validate() {
	var isValid = true;

	if (!testName(fnameInput)) {
		isValid = false;
	}
	if (!testName(lnameInput)) {
		isValid = false;
	}
	if (!isNotEmpty(emailInput)) {
		isValid = false;
	}
	if (!isNotEmpty(bdInput)) {
		isValid = false;
	}
	if (!isNotEmpty(qtyInput)) {
		isValid = false;
	}

	if (isValid) {
		modalBody.style.display = "none";
		modalConf.style.display = "flex";
	}
	return false;
}
