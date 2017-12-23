let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]
var findWords = function(words) {
    return words.filter(word => {
        word = word.toLowerCase()
        let w = word[0]
        let row = rows.find(r => r.indexOf(w) != -1)
        for(let i = 1; i < word.length; i++) {
            if(row.indexOf(word[i]) == -1) {
                return false
            }
        }
        return true
    })
};
