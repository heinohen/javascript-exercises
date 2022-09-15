const reverseString = function(mjono) {
    var palautettava = "";

    for (var i = mjono.length; i >= 0; i--) {
        palautettava += mjono.charAt(i);
    }

    return palautettava;

};
// Do not edit below this line
module.exports = reverseString;
