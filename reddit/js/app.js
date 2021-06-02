
// Récupération des données
let data = getRedditData('wallpaper');

// Affichage des données dans la console
data.then(res => {
    displayData(res);
})





function displayData(data) {
    let app = document.getElementById('app');
    let output = '<div class="card-columns">';

    console.log(data);

    data.forEach(post => {
        output += `            
            <div class="col-sm">
                <div class="card">
                    <div className="thumbnail">
                        <img class="card-img-top" src="${post.thumbnail}" alt="Card image cap">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${post.title.slice(0, 50) + '...'}</h5>                            
                        <a href="${post.url}" class="btn btn-primary">Voir</a>
                    </div>
                </div>
            </div>
        `;
    });

    output += '</div>';
    app.innerHTML = output;
}

/**
 * Appel fetch au subreddit /r/${sub}
 * 
 * @example
 *  const data = getWallpapers();
 *  data.then(json => {...})
 * 
 * @param {string} sub 
 * @returns Promise 
 */
function getRedditData(sub) {
    // Le subreddit passé en paramètre est appelé
    const url = `https://www.reddit.com/r/${sub}/new.json`;

    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json.data.children.map(data => {
                return data.data;
            });
        });
}