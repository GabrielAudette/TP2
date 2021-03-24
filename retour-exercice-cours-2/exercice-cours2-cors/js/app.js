// L'URL à utiliser pour la requête
const url = "http://127.0.0.1:8000/api/heroes";

// On spécifie les options pour le fetch
// let options = {
//     mode: 'cors'
// }

// Requête
// fetch(url, options).then(data => {
//     console.log(data);
//     return data.json();
// }).then(json => {
//     let contenu = JSON.stringify(json, null, ' ');

//     document.body.innerHTML += `<pre>${contenu}</pre>`;
// })


// Interception de la soumission du formulaire
document.forms.formHeros.addEventListener('submit', event => {
    event.preventDefault();

    //console.log('soumission interceptée!');
    //console.log(document.forms.formHeros.soumettre.value);

    let data = document.forms.formHeros;
    let options = {
        method: 'POST',
        mode: 'cors',
        body: data
    }

    // On fait la requête
    fetch(url, options).then(reponse => {
        return reponse.json();
    }).then(json => {
        console.log(json);
    });
});