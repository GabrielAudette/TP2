const h = document.createElement.bind(document);
const $ = document.querySelector.bind(document);
let btn = $('.btn')



// Clé de l'API
const key = "823ed5b47e7d9b602b46b625e7f03305";

// recherche de ville    

btn.addEventListener("click", e=>{
    // Crée une nouvelle variable avec le nom de la ville recherchée
    let nomdeville = document.querySelector(".forminput").value;
    $(".ville").innerHTML = nomdeville;
    let q = nomdeville
    const url = `https://api.openweathermap.org/data/2.5/weather?lang=fr&q=${q}&appid=${key}&units=metric`;

        fetch(url).then( result => {
            return result.json();
        }).then(data => {
            // Fonction pour Récuperer tout les éléments
            let temp = data.main.temp;
            let temp_res = data.main.feels_like;
            $(".icone").setAttribute("src" , "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            $(".fh").innerHTML = (data.timezone / 3600);
            let vent_vit = data.wind.speed;
            let vent = data.wind.deg;
            let heure = data.timezone;
            let pluie;
                if(pluie == null || pluie == undefined){
                document.querySelector(".pluie").innerHTML = "Il n'ya pas de pluie présentement"
                } else{
                document.querySelector(".pluie").innerHTML = data.rain["1h"]
                };
    
                let neige;
                if(neige == null || pluie == undefined){
                document.querySelector(".neige").innerHTML = "Il n'ya pas de neige présentement"
                } else{
                document.querySelector(".neige").innerHTML = data.snow["1h"]
                };
            let lds = data.sys.sunrise;
            let cds = data.sys.sunset;
            
            // Ajoute le nom de la ville recherchée a la case ville
            $(".ville").innerHTML = "Ville: " + nomdeville;
            $(".temp").innerHTML = "Température: " + temp;
            $(".temp_res").innerHTML = "Température ressentie: " + temp_res;

            // va chercher les infos du weather
            let weather_info = data.weather
            for(let weather of weather_info) {
                $(".desc").innerHTML = "Description: " + weather.description;
            }
            // $(".img").innerHTML = icon;
            $(".fdv").innerHTML = "Force du vent: " + vent_vit + "Km/h";
            $(".ddv").innerHTML = "Direction du vent: " + vent + "deg";
            $(".fh").innerHTML = "Fuseau Horaire: " + heure;
            $(".pluie").innerHTML = "Pluie: " + pluie;
            $(".neige").innerHTML = "Neige: " + neige;
            $(".lds").innerHTML = "Lever du soleil: " + lds;
            $(".cds").innerHTML = "Coucher du soleil: " + cds;
            
        })
    })
    $(".rtn").addEventListener("click", e=>{
        $(".forminput").innerHTML = ""
    })
    function retour() {

    }