const palindromes = function (mjono) {
    var i = 0;
    var j = 0;

    while (i < mjono.length / 2) {
        if (!(/[a-zA-Z]+/.test(mjono.charAt(i)))) {
            i++;
            continue;
        }

        if (!(/[a-zA-Z]+/.test(mjono.charAt(mjono.length - 1 - j)))) {
            j++;
            continue;
        }

        if (mjono.charAt(i).toLowerCase() !== mjono.charAt(mjono.length - 1 - j)) {
            console.log(i + " " + j)
            console.log(mjono.charAt(i).toLowerCase() + " " + mjono.charAt(mjono.length - 1 - j))
            return false;
        }
        i++;
        j++;
    }
    return true;
    
    
};

console.log(palindromes('Racecar!'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// Do not edit below this line
module.exports = palindromes;
