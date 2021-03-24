<?php

use Illuminate\Http\Request;

use App\Hero;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/heroes', function(){    
    return Hero::all();
});

Route::post('/heroes', function(Request $request){
    $nom = nom_aleatoire();
    $prenom = nom_aleatoire();
    $age = mt_rand(10, 100);

    error_log("AJOUT D'UN HÉROS: " . $nom);

    $hero = new Hero;
    $hero->nom = $nom;
    $hero->prenom = $prenom;
    $hero->age = $age;
    $hero->timestamps = false;
    $hero->save();

    return response()->json(['success' => 'success'], 200);
});

/**
 * Génère un nom de personnage au hasard
 * 
 * @param int $syllabes_maximum Nombre de syllabes
 * @return string Nom généré aléatoirement
 */
function nom_aleatoire($syllabes_maximum = 4) {
    $voyelles = str_split('aeiouy');
    $consonnes = str_split('bcdfghjklmnpqrstvwxz');

    $nom = "";

    $nParties = rand(2, $syllabes_maximum);

    // Une chance sur deux de débuter par une voyelle
    if (rand(0, 1) == 1) {
        $nom .= $voyelles[array_rand($voyelles)];
        $nParties--;
    }

    // Pour chaque syllabe restante, on ajoute une consonne suivi d'une voyelle
    for ($i = 0; $i < $nParties; $i++) {
        $nom .= $consonnes[array_rand($consonnes)];
        $nom .= $voyelles[array_rand($voyelles)];
    }

    return ucfirst($nom);
}