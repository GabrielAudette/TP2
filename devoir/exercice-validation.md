## À partir d'un dossier vide, créer un projet Laravel dans lequel un formulaire propose à l'utilisateur d'entrer une chanson avec toutes ses informations dans la base de données.

### Informations sur chaque chanson:
- Titre
- Album
- Année de parution (chiffre)
- Catégorie (liste déroulante)
- Url d'une image (url pour le moment, upload en bonus!)

## Une fois le formulaire fait en HTML, Javascript devra intervenir pour faire la validation de chacun des champs lorsque l'utilisateur appuie sur le bouton "submit". Il vous faudra donc ajouter le JS au dossier public de votre Laravel et le lier dans votre view.

### Dans le cas où tout se valide bien, il faudra intercepter le formulaire et l'envoyer en AJAX. Si l'envoi se passe bien, on affiche un message de confirmation et on cache le formulaire.

**Technologies**:
- **Laravel**
    - Migrations pour créer la table de la BDD
    - Model pour faire lien?
    - Route qui affiche le formulaire
    - Route qui fait une insertion dans la BDD (api)

- **Javascript**
    - DOM: Vanilla ou VueJS?
    - Validation: Vanilla ou Validator.js
    - Fetch pour l'insertion dans la BDD en passant par l'API de Laravel

