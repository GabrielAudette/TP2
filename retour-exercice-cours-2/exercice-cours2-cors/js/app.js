// L'URL à utiliser pour la requête
const url = "http://127.0.0.1:8000/api/heroes";

// On spécifie les options pour le fetch
let options = {
    mode: 'cors'
}

// Requête
fetch(url, options).then(data => {
    console.log(data);
    return data.json();
}).then(json => {
    let contenu = JSON.stringify(json, null, ' ');

    document.body.innerHTML += `<pre>${contenu}</pre>`;
})