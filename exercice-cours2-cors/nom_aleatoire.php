<?php

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