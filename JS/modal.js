function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// Elements DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closingModal = document.querySelectorAll(".close");

// Gestion des events de l'ouverture et fermeture de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closingModal.forEach((btn) => btn.addEventListener("click", closeModale));

// Ouverture de la modale
function launchModal() {
	modalbg.style.display = "block";
}

// Ajout de la fonctionnalité au bouton (x): Femeture de la modale
function closeModale() {
	modalbg.style.display = "none";
	document.location.reload();
}
