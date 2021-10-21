// DOM des éléments du formulaire

const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const allLocations = document.getElementById("allLocations");
const locationInput = document.querySelectorAll("#allLocations .checkbox-input");
const checkboxInput = document.getElementById("checkbox1");

// Regex

const regexN = /^([A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ ,.'-]*){2}$/;
const regexE = /(?=^.{5,20}$)^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3})$/;

// Vérification de firstname

function FirstName(string, firstNameInput) {
	if (!regexN.test(string.trim())) {
		firstNameInput.parentElement.setAttribute("data-error-visible", true);
	} else {
		firstNameInput.parentElement.setAttribute("data-error-visible", false);
	}
}

// Gestion des events listeners firstname et lastname

firstNameInput.addEventListener("blur", ($event) => {
	FirstName($event.target.value, firstNameInput);
});

// Vérification de firstname

function LastName(string, lastNameInput) {
	if (!regexN.test(string.trim())) {
		lastNameInput.parentElement.setAttribute("data-error-visible", true);
	} else {
		lastNameInput.parentElement.setAttribute("data-error-visible", false);
	}
}

// Gestion des events listeners firstname et lastname

lastNameInput.addEventListener("blur", ($event) => {
	LastName($event.target.value, lastNameInput);
});

// Vérification si l'email est valide et gestion event listener

emailInput.addEventListener("blur", ($event) => {
	if (!regexE.test($event.target.value.trim())) {
		emailInput.parentElement.setAttribute("data-error-visible", true);
	} else {
		emailInput.parentElement.setAttribute("data-error-visible", false);
	}
});

// Vérification que la date de naissance soit valide et gestion event listener

birthdateInput.addEventListener("blur", ($event) => {
	if ($event.target.value.length == 0 || !birthDateValidation($event.target.value)) {
		birthdateInput.parentElement.setAttribute("data-error-visible", true);
	} else {
		birthdateInput.parentElement.setAttribute("data-error-visible", false);
	}
});

// Calcul de l'age de l'utilisateur: il faut entre 13 et 110 ans

function birthDateValidation(value) {
	const msYear = 31536000000;
	const inputDate = new Date(value);
	const inputT = inputDate.getTime();
	const currentDate = new Date();
	const currentT = currentDate.getTime();
	const age = (currentT - inputT) / msYear;
	if (age > 12 && age < 111) {
		return true;
	} else {
		return false;
	}
}

// Verification que le nombre de tournois Gameon est valide et gestion event listener

quantityInput.addEventListener("blur", ($event) => {
	let quantity = $event.target.value;
	if (quantity == "" || quantity < 0 || quantity > 99) {
		quantityInput.parentElement.setAttribute("data-error-visible", true);
	} else {
		quantityInput.parentElement.setAttribute("data-error-visible", false);
	}
});

// Verification boutons radio et gestion event listener
locationInput.forEach((btn) =>
	btn.addEventListener("change", ($event) => {
		CitySelected = $event.target.value;
		if (CitySelected !== null) {
			locationInput[0].parentElement.setAttribute("data-error-visible", false);
		} else {
			locationInput[0].parentElement.setAttribute("data-error-visible", true);
		}
	})
);

// Vérification checkbox gestion de l'event checkbox

checkboxInput.addEventListener("change", ($event) => {
	if (!$event.target.checked) {
		checkboxInput.parentElement.setAttribute("data-error-visible", true);
	} else {
		checkboxInput.parentElement.setAttribute("data-error-visible", false);
	}
});

// Validation formulaire général (en cours)
function validate(event) {
	event.preventDefault();
	if (
		firstNameInput.value.length == 0 ||
		lastNameInput.value.length == 0 ||
		emailInput.value.length == 0 ||
		birthdateInput.value.length == 0 ||
		quantityInput.value.length == 0 ||
		CitySelected == null ||
		checkboxInput.checked == false
	) {
		if (firstNameInput.value.length == 0) {
			firstNameInput.parentNode.setAttribute("data-error-visible", true);
		}
		if (lastNameInput.value.length == 0) {
			lastNameInput.parentNode.setAttribute("data-error-visible", true);
		}
		if (emailInput.value.length == 0) {
			emailInput.parentNode.setAttribute("data-error-visible", true);
		}
		if (birthdateInput.value.length == 0) {
			birthdateInput.parentNode.setAttribute("data-error-visible", true);
		}
		if (quantityInput.value.length == 0) {
			quantityInput.parentNode.setAttribute("data-error-visible", true);
		}
		if (!CitySelected) {
			locationInput[0].parentElement.setAttribute("data-error-visible", true);
		}
		if (!checkboxInput.checked) {
			checkboxInput.parentElement.setAttribute("data-error-visible", true);
		}
		return false;
	}

	document.getElementById("form").style.display = "none";
	msg.style.display = "flex";
	document.getElementById("form").reset();
}
