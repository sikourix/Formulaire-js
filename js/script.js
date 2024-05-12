function validerForm() {
    // Déclarer les variable
    let nom = document.getElementById("nom");
    let erreurNom = document.getElementById("erreurNom");
    let regexNom = /^[a-zA-Z]{2,}$/;

    let prenom = document.getElementById("prenom");
    let erreurPrenom = document.getElementById("erreurPrenom");
    let regexPrenom = /^[a-zA-Z]{2,}$/;

    let dateBirth = document.getElementById("dateBirth");
    let erreurDateBirth = document.getElementById("erreurDateBirth");
    let regexDate = /^\d{2}-\d{2}-\d{4}$/;

    let placeBirth = document.getElementById("placeBirth");
    let erreurPlaceBirth = document.getElementById("erreurPlaceBirth");
    let regexPlaceBirth = /^[a-zA-Z]{3,}$/;

    let signe = document.getElementById("signe");
    let erreurSigne = document.getElementById("erreurSigne")

    let email = document.getElementById("email");
    let erreurEmail = document.getElementById("erreurEmail");
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let motDePasse = document.getElementById("passWord");
    let erreurMdp = document.getElementById("erreurPassWord");
    let regexMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{5,15}$/;

    let motDePasse2 = document.getElementById("passWord2");
    let erreurMdp2 = document.getElementById("erreurPassWord2");

    let description = document.getElementById("description");
    let erreurDescription = document.getElementById("erreurDescription");

    let erreur = false;

    // Mettre en place les contrôle de saisie
    //revoir si on peut les regrouper dans une fonction
    /*Nom*/
    if (!regexNom.test(nom.value)) {
        erreurNom.innerText = "Votre nom doit contenir au moins 2 caractères";
        erreur = true;
        nom.focus();
    } else {
        erreurNom.innerText = "";
    }

    /*Prénom*/
    if (!regexPrenom.test(prenom.value)) {
        erreurPrenom.innerText = "Votre prénom doit contenir plus au moins 2 caractères !";
        erreur = true;
        prenom.focus();
    } else {
        erreurPrenom.innerText = "";
    }

    /*Date de naissance*/
    if (!regexDate.test(dateBirth.value)) {
        erreurDateBirth.innerText = "La date n'est pas au format correct !";
        erreur = true;
        dateBirth.focus();
    } else {
        erreurDateBirth.innerText = "";
    }

    /*Lieu de naissance*/
    if (!regexPlaceBirth.test(placeBirth.value)) {
        erreurPlaceBirth.innerText = "Le Lieu de naissance doit contenir au moins 3 caractères !";
        erreur = true;
        placeBirth.focus();
    } else {
        erreurPlaceBirth.innerText = "";
    }

    // Signe astro

    if (signe.value == "") {
        erreurSigne.innerText = "Le choix du signe astrologique est obligatoire !"
        erreur = true;
    } else {
        erreurSigne.innerText = "";
    }

    // Mot de passe

    if (!regexMdp.test(motDePasse.value)) {
        erreurMdp.innerText = "Le mot de passe saisie ne correspond pas au bon format !";
        erreur = true;
        motDePasse.focus();
    } else {
        erreurMdp.innerText = "";
    }

    // Confirmer mot de passe

    if (motDePasse2.value !== motDePasse.value) {
        erreurMdp2.innerText = "Attention ! Le mot de passe saisie ne correspond pas !";
        erreur = true;
        motDePasse2.focus();
    } else {
        erreurMdp2.innerText = "";
    }

    /*Email*/

    if (!regexEmail.test(email.value)) {
        erreurEmail.innerText = "Le champ email ne correspond pas au bon format !";
        erreur = true;
        email.focus();
    } else {
        erreurEmail.innerText = "";
    }

    // Description
    if (description.value.length < 10 || description.value.length > 20) {
        erreurDescription.innerText = "Votre description doit contenir entre 10 et 20 caractères";
        erreur = true;
        description.focus();
    } else {
        erreurDescription.innerText = "";
    }

    /* Vérifier si tous les champs sont OK, sinon on renvoie FALSE */
    return !erreur;
}

function compteur() {
    let compteur = document.getElementById("compteur");
    let description = document.getElementById("description");
    compteur.innerText = description.value.length + " Caractère";
    description.value.length > 1 ? compteur.innerText += "s" : null;
}

//Stockage dans le dossier local
function sauvegarderDonnees() {
    localStorage.setItem('nom', nom.value);
    localStorage.setItem('prenom', prenom.value);
    localStorage.setItem('dateBirth', dateBirth.value);
    localStorage.setItem('placeBirth', placeBirth.value);
    localStorage.setItem('signe', signe.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('description', description.value);
}

//Afficher le contenu du formulaire
let myForm = document.querySelector('.formulaire');
myForm.addEventListener('submit', (event) => {
    if (!validerForm()) {
        event.preventDefault();

    } else {
        sauvegarderDonnees();
    }

});



