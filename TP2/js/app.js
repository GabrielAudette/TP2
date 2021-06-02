let data = getRedditData('landscapes')
getRedditData('landscapes')

function getRedditData(sub) {
    // Sub passé en paramètre est appelé ici
    const url = `https://www.reddit.com/r/${sub}/new.json`;

    return fetch(url)
        .then(res => res.json())
        .then(json => {
            return json.data.children.map(data => {
                return data.data;
            });
        });
        console.log("123");
    }