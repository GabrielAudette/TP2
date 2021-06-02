import { http_get } from './utils/request';

export default class SWAPI {
    /**
     * Retourne toutes les pages de résultats de la requête
     * 
     * La méthode utilise la récursivité
     * 
     * @param {string} url 
     * @param {Array} list 
     * @returns Array 
     */
    static getAllPagesRecursive(url, list = []) {
        return http_get(url).then(data => {
            list = list.concat(data.results);

            //console.log(data);

            if (data.next) {
                return this.getAllPagesRecursive(data.next, list);

            } else {
                return list;
            }
        });
    }
}
