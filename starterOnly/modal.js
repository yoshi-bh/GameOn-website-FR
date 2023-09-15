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
function testName(nameElement, display) {
	const value = nameElement.value.trim();
	if (!value) {
		return [
			nameElement,
			display
				? "Veuillez renseigner ce champ."
				: `Le champ ${nameElement.id} est vide`,
		];
	} else if (value.length < 2) {
		return [
			nameElement,
			display
				? "Veuillez entrer 2 caractères ou plus pour le champ du nom."
				: `Le champ ${nameElement.id} est trop court`,
		];
	}
	return [nameElement, ""];
}

function testEmail(emailElement, display) {
	const value = emailElement.value.trim();
	const regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+");
	if (!value) {
		return [
			emailElement,
			display
				? "Veuillez renseigner ce champ."
				: `Le champ ${emailElement.id} est vide`,
		];
	} else if (!regex.test(value)) {
		return [
			emailElement,
			display
				? "Veuillez entrer un email valid."
				: `Le champ ${emailElement.id} n'est pas valid`,
		];
	}
	return [emailElement, ""];
}

function testDate(dateElement, display) {
	const value = dateElement.value.trim();
	if (!value) {
		return [
			dateElement,
			display
				? "Veuillez renseigner ce champ."
				: `Le champ ${dateElement.id} est vide`,
		];
	} else if (new Date(value).getTime() >= new Date().getTime()) {
		return [
			dateElement,
			display
				? "Veuillez entrer une date de naissance valid."
				: `Le champ ${dateElement.id} n'est pas valid`,
		];
	}
	return [dateElement, ""];
}

function isNotEmpty(inptElement, display) {
	const value = inptElement.value.trim();
	if (!value) {
		return [
			inptElement,
			display
				? "Veuillez renseigner ce champ."
				: `Le champ ${inptElement.id} est vide`,
		];
	}
	return [inptElement, ""];
}

function isChecked(testedElements, display) {
	for (elem of testedElements) {
		if (elem.checked) {
			return [testedElements[0], ""];
		}
	}
	return [
		testedElements[0],
		display
			? "Cette case est obligatoire."
			: `Le champ ${testedElements[0].id} est obligatoire`,
	];
}

function catchError(errorElement, errorMessage) {
	if (errorMessage !== "") {
		throw new Error(errorMessage);
	}
}

function displayError(errorElement, errorMessage) {
	console.log(errorElement + " ||| " + errorMessage);
	const fData = errorElement.parentElement;
	if (errorMessage === "") {
		fData.setAttribute("data-error-visible", "false");
		return;
	}
	fData.setAttribute("data-error-visible", "true");
	fData.setAttribute("data-error", errorMessage);
}

// error verification on submit
form.addEventListener("submit", (event) => {
	try {
		event.preventDefault();

		catchError(...testName(fnameInput, false));
		catchError(...testName(lnameInput, false));
		catchError(...testEmail(emailInput), false);
		catchError(...testDate(bdInput), false);
		catchError(...isNotEmpty(qtyInput), false);
		catchError(...isChecked(radioInputs), false);
		catchError(...isChecked([conditionInput]), false);

		modalBody.style.display = "none";
		modalConf.style.display = "flex";
		form.submit();
		form.reset();
	} catch (error) {
		displayError(...testName(fnameInput, true));
		displayError(...testName(lnameInput, true));
		displayError(...testEmail(emailInput, true));
		displayError(...testDate(bdInput, true));
		displayError(...isNotEmpty(qtyInput, true));
		displayError(...isChecked(radioInputs, true));
		displayError(...isChecked([conditionInput], true));

		console.log(error);
	}
});

// Error verification on user input
fnameInput.addEventListener("change", () =>
	displayError(...testName(fnameInput, true))
);
lnameInput.addEventListener("change", () =>
	displayError(...testName(lnameInput, true))
);
emailInput.addEventListener("change", () =>
	displayError(...testEmail(emailInput, true))
);
bdInput.addEventListener("change", () =>
	displayError(...testDate(bdInput, true))
);
qtyInput.addEventListener("change", () =>
	displayError(...isNotEmpty(qtyInput, true))
);
for (radioInput of radioInputs) {
	radioInput.addEventListener("change", () =>
		displayError(...isChecked(radioInputs, true))
	);
}
conditionInput.addEventListener("change", () =>
	displayError(...isChecked([conditionInput], true))
);
