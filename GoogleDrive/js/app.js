//  Informations OAuth pour se connecter avec Google

let client  = new jso.JSO({
    provider_id: "google",
    
    // Vien t de la console Google
    client_id: "72806574938-lnc1388l6grdb2qlciq0j13qs78ijksu.apps.googleusercontent.com",

    // Redirection vers l'adresse de retour
    redirect_uri: "https://tolocalhost.com/AEC_WEB%205/Prog%20Interactive/GoogleDrive/",

    // Adresse de connexion a OAuth
    authorization: "https://accounts.google.com/o/oauth2/auth",

    // Liste des permissions demandées a l'utilisateur
    scopes: {
        request: [
            "https://www.googleapis.com/auth/drive.file",
            "https://www.googleapis.com/auth/userinfo.profile",

        ]
    }
});

// Nécéssaire a JSON
client.callback();

// Réscupération de l'access token (jeton d'accès)
client.getToken().then(token => {
    // Avec l'access_token, on appel la fonction drive() qui fera les actions nécéssaires
    drive(token.access_token);
})

function drive(access_token) {
    // Création d'un fichier test
    create_drive_file("FichierTest1.txt", "Ceci est un test", access_token)
        .then(rep => {
            console.log("le fichier a été crée!");
    });

}



function create_drive_file(name, content, access_token){
    const upload_url = "https://www.googleapis.com/upload/drive/v3/files?uploadType=media";
    const upload_options = {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'text/plain',  //Le contenu sera du texte
            'Authorization': 'Bearer' + access_token, // Authorization de l'utulisateur
        },
        body: content,
    };
    return fetch(upload_url, upload_options)
            .then(resp => {
                return resp.json().then(fichier => {
                    const metadata_url = "https://www.googleapis.com/drive/v3/files/" + fichier.id;
                    const metadata_options = {
                        method: "PATCH",
                        mode: "cors",
                        headers: {
                            'Content-Type': 'application/plain',  //Le contenu sera du texte
                            'Authorization': 'Bearer' + access_token, // Authorization de l'utulisateur
                        },
                        body: JSON.stringify({ name: name})
                    }

                    return fetch(metadata_url, metadata_options)
                            .then(resp => {
                                return resp.json();
                            })
                })
            })
}