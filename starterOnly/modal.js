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
// const modalCloseBtn = document.querySelector(".close-btn");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");

const nameInput = document.querySelector("#first");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseTopBtn.addEventListener("click", closeModal);
// modalCloseBtn.addEventListener("click", closeModal);
// submitBtn.addEventListener("click", checkFormValidity);

// close modal form
function closeModal() {
	modalbg.style.display = "none";
}

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

// // error validation
// function checkFormValidity() {
// 	if (formData.input.checkValidity() == false) {
// 		 console.log("INVALID FORM!")
// 		//  $("#errors").empty();
// 		//  $("#errors").text("error message");
// 	}
//  };

// const input = document.querySelector("input");
// const log = document.getElementById("log");

// formData.forEach((fdata) =>
// 	fdata.querySelector("input").addEventListener("invalid", (e) => {
// 		console.log(e);
// 		e.target.parentNode.setAttribute("data-error-visible", "true");
// 		if (e.target.validity.valueMissing) {
// 			e.target.parentNode.setAttribute(
// 				"data-error",
// 				"Veuillez renseigner ce champ."
// 			);
// 		} else if (e.target.validity.tooShort) {
// 			e.target.parentNode.setAttribute(
// 				"data-error",
// 				"Veuillez entrer 2 caractères ou plus pour le champ du nom."
// 			);
// 		}
// 	})
// );

function validate() {
	console.log("Hello!!!");
	// if (formData.querySelector(".name").value) {
	console.log(nameInput).value;
	// console.log(formData.querySelector("#first"));
	// }

	return false;
	// form.reportValidity();
	// formData.forEach((fdata) => {
	// 	var inpt = fdata.childNodes[4];
	// 	// querySelector("input");
	// 	console.log(inpt);
	// 	if (inpt.target.validity.valueMissing) {
	// 		fdata.setAttribute("data-error", "Veuillez renseigner ce champ.");
	// 	} else if (inpt.target.validity.tooShort) {
	// 		fdata.setAttribute(
	// 			"data-error",
	// 			"Veuillez entrer 2 caractères ou plus pour le champ du nom."
	// 		);
	// 	}
	// 	fdata.setAttribute("data-error-visible", "true");
	// });
}
