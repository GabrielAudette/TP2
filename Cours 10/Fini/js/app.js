const h = document.createElement.bind(document);
const $ = document.querySelector.bind(document);

// API KEY
const key = "AIzaSyAdIRAYIcIez0ZwbMUlacRcXEPHORGbdCs";

// Récupération des éléments HTML de la page
const sContainer = $('#searches');
const iframe = $('iframe');

// Recherches de vidéos
getList('cat');
getList('dog');
getList('red panda');

/**
 * Effectue la requête à l'API Youtube
 * 
 * @param {string} q    Le mot-clé à rechercher
 */
function getList(q) {
    // L'URL contient le mot-clé de la recherche et la clé API
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${key}`;

    fetch(url).then(result => {
        return result.json();
    }).then(data => {
        displayVideos(data.items);
    })
}

/**
 * Traite la liste des vidéos reçues et les affiche
 * 
 * @param {Array} videos 
 */
function displayVideos(videos) {
    let categoryContainer = h('div');

    // Ajout de toutes les vidéos reçus
    for (let video of videos) {
        let vContainer = h('div');
        vContainer.classList.add('video');

        // Ajout du titre de la vidéo
        let p = h('p');
        p.innerHTML = video.snippet.title;
        vContainer.appendChild(p);

        // Ajout de l'image thumbnail
        let img = h('img');
        img.setAttribute('src', video.snippet.thumbnails.high.url);
        vContainer.appendChild(img);

        categoryContainer.appendChild(vContainer);

        // Ajout d'un event pour entamer la lecture
        // de la vidéo suite à un clic
        vContainer.addEventListener('click', e => {
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video.id.videoId + "?autoplay=1");
        })
    }

    sContainer.appendChild(categoryContainer);


}