function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// Elements DOM pour l'ouverture et la fermeture de la modale

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");

// DOM Elements pour les messages

const msg = document.getElementById("messageBg");
const closingMessageBtn = document.querySelectorAll(".messageButton");

// Gestion des events de l'ouverture et fermeture de la modale

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.forEach((btn) => btn.addEventListener("click", closingModal));
closingMessageBtn.forEach((btn) => btn.addEventListener("click", closingMessage));

// Fermeture message de remerciement

function closingMessage() {
	msg.style.display = "none";
}

// Ouverture de la modale : initialisation

function launchModal() {
	CitySelected = null;
	modalbg.style.display = "block";
	document.getElementById("form").style.display = "block";
}

// Ajout de la fonctionnalité au bouton (x): Femeture de la modale

function closingModal() {
	modalbg.style.display = "none";
}
