const h = document.createElement.bind(document);
const $ = document.querySelector.bind(document);

// Api Key
const key = "AIzaSyAwznyBlMezn8ZTBihL4RqbLfEccEB-kFk";

const sContainer = $('#searches');
const iframe = $('iframe');

// Recherche de vidéo
getList('cat');
getList('dog');
getList('red panda');

function getList(q){

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${key}`;

    fetch(url).then( result => {
        return result.json();
    }).then(data => {
        displayVideos(data.items);
    })
};


function displayVideos(videos){

    let categoryContainer = h('div');
    for(let video of videos){
        let vContainer = h('div');
        vContainer.classList.add('video');

        // Ajout du titre de la vidéo
        let p = h('p');
        p.innerHTML = video.snippet.title;
        vContainer.appendChild(p);

        // Ajout de l'image Thumbnail
        let img = h('img');
        img.setAttribute('src', video.snippet.thumbnails.high.url);
        vContainer.appendChild(img);
        categoryContainer.appendChild(vContainer);

        vContainer.addEventListener('click', e=> {
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video.id.videoId + "?autoplay=1");
        })
    }
    sContainer.appendChild(categoryContainer);
}