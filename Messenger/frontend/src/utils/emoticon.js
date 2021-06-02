export default class Emoticons {
    /**
     * 
     * @example
     * Emoticons.convert("Bonjour :)")
     *  // -> "Bonjour 😃"
     * 
     * @param {string} str 
     */
    static convert(str) {
        let emoticons = {
            ":)": "😃",
            ":D": "😄",
            ":-D": "😁",
            ">_<": "😆",
            "^_^\"": "😅",
            ":')": "😂",
            ":-)": "🙂",
            "(:": "🙃",
            ";)": "😉",
        }

        for (let key in emoticons) {
            str = str.split(key).join(emoticons[key])
        }

        return str
    }
}