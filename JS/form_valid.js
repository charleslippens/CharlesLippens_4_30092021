// DOM des éléments du formulaire

const firstNameInput = document.getElementById("firstname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox");

// DOM pour les messages des erreurs du formulaire

const firstNameErr = document.getElementById("nameError");
const lastNameErr = document.getElementById("lastNameError");
const emailErr = document.getElementById("emailError");
const birthDateErr = document.getElementById("birthDateError");
const quantityErr = document.getElementById("quantityError");
const locationErr = document.getElementById("locationError");
const conditionsErr = document.getElementById("conditionsError");

// Regex

const regexN = /^[^0-9]{2,}$/;
const regexE = /^\S+@\S+\.\S+$/;

// Vérification de firstname et lastname sont valides

function VerifFirstLast(string, name) {
	if (!regexN.test(string.trim())) {
		name.textContent = "Veuillez écrire un minimum de 2 caractères";
	} else {
		name.textContent = "";
		input.focus();
	}
}

// Gestion des events listeners firstname et lastname

firstNameInput.addEventListener("blur", ($event) => {
	VerifFirstLast($event.target.value, firstNameErr);
});

lastNameInput.addEventListener("blur", ($event) => {
	VerifFirstLast($event.target.value, lastNameErr);
});

// Vérification si l'email est valide et gestion event listener

emailInput.addEventListener("blur", ($event) => {
	if (!regexE.test($event.target.value.trim())) {
		emailErr.textContent = "Veuillez écrire une adresse e-mail valide.";
	} else {
		emailErr.textContent = "";
	}
});

// Vérification que la date de naissance soit valide et gestion event listener

birthdateInput.addEventListener("blur", ($event) => {
	if ($event.target.value.length == 0) {
		birthDateErr.textContent = "Vous devez écrire votre date de naissance.";
	} else if (!birthDateValidation($event.target.value)) {
		birthDateErr.textContent = "Veuillez vérifier votre date de naissance.";
	} else {
		birthDateErr.textContent = "";
	}
});

// Calcul de l'age de l'utilisateur: il faut entre 13 et 119 ans

function birthDateValidation(value) {
	const msYear = 31536000000;
	const inputDate = new Date(value);
	const inputT = inputDate.getTime();
	const currentDate = new Date();
	const currentT = currentDate.getTime();
	const age = (currentT - inputT) / msYear;
	if (age > 12 && age < 120) {
		return true;
	} else {
		return false;
	}
}

// Verification que le nombre de tournois Gameon est valide et gestion event listener

quantityInput.addEventListener("blur", ($event) => {
	let quantity = $event.target.value;
	if (quantity == "") {
		quantityErr.textContent = "Choisissez un nombre";
	} else if (quantity < 0 || quantity > 99) {
		quantityErr.textContent = "Choisissez un nombre entre 0 et 99.";
	} else {
		quantityErr.textContent = "";
	}
});

// Verification boutons radio et gestion event listener
locationInput.forEach((btn) =>
	btn.addEventListener("change", ($event) => {
		CitySelected = $event.target.value;
		if (CitySelected !== null) {
			locationErr.textContent = "";
		} else {
			locationErr.textContent = "Choisissez une option";
		}
	})
);

// Vérification checbox gestion de l'event checkbox

checkboxInput.addEventListener("change", ($event) => {
	if (!$event.target.checked) {
		conditionsErr.textContent = "Vérifiez que vous acceptez les conditions.";
	} else {
		conditionsErr.textContent = "";
	}
});

// Validation formulaire général (en cours)
function validate(event) {
	event.preventDefault();
	if (!firstNameInput.value.lenght == 0 || !regexN.test(firstNameInput.value.trim())) {
		firstNameErr.textContent = "Veuillez remplir tous les champs du formulaire";
		firstNameInput.focus();
		return false;
	}
	if (!lastNameInput.value.lenght == 0 || !regexN.test(lastNameInput.value.trim())) {
		lastNameErr.textContent = "Veuillez entrer votre nom";
		lastNameInput.focus();
		return false;
	}
	if (!emailInput.value || !regexE.test(emailInput.value.trim())) {
		emailErr.textContent = "Veuillez entrer votre adresse e-mail";
		emailInput.focus();
		return false;
	}
	if (birthdateInput.value.length == 0) {
		birthDateErr.textContent = "Veuillez vérifier votre date de naissance";
		birthdateInput.focus();
		return false;
	}
	if (!quantityInput.value || quantityInput.value < 0 || quantityInput.value > 99) {
		quantityErr.textContent = "Choisissez un nombre entre 0 et 99.";
		quantityInput.focus();
		return false;
	}
	if (!locationInput) {
		locationErr.textContent = "Vous devez choisir une option.";
		return false;
	} else {
		locationErr.textContent = "";
	}
	if (checkboxInput == false) {
		conditionsErr.textContent = "Vous devez vérifier que vous acceptez les conditions.";
		checkboxInput.focus();
		return false;
	}
	document.getElementById("form").style.display = "none";
	msg.style.display = "flex";
	document.getElementById("form").reset();
}
