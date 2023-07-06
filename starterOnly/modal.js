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

const fnameInput = document.getElementById("first");

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

function testName(nameElement) {
	if (!nameElement.value) {
		
		console.log("Please add a name");
	} else if (nameElement.value.length < 2) {
		console.log("The name should be at least 2 char");
	}
}

function validate() {
	var isValid = true;
	console.log("Hello!!!");
	if (!testName(fnameInput)) {
		isValid = false;
	}
	// if (!testName(nameInput)) {
	// 	isValid = false;
	// }
	
	
	// console.log(fnameInput.value);
	// if (formData.querySelector(".name").value) {
	// console.log(formData.querySelector("#first"));
	// }

	return false;
}
