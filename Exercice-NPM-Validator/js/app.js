import validator from '../node_modules/validator/es/index';

document.forms.utilisateur.addEventListener('submit', event => {
    event.preventDefault();

    const prenom = document.forms.utilisateur.prenom.value;
    const nom = document.forms.utilisateur.nom.value;
    const age = document.forms.utilisateur.age.value;
    console.log(prenom,nom,age);

    //  Enlever le message d'erreur
    afficherErreur(null);

    if( ! validator.isAlpha(prenom)){
        afficherErreur('Le prénom est invalide');
        return;
    }

    if( ! validator.isAlpha(nom)){
    }

    if( ! validator.isAlpha(age)){
    }

    function afficherErreur(message) {
        document.querySelector('#erreur').innerHTML = message;
    }
})