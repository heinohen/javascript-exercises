const caesar = function(sana , amount) {


    var large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var small = "abcdefghijklmnopqrstuvwxyz";
    var kirjaimet = ""

    for (var i = 0; i < sana.length; i++) {
            var thisChar = sana.charAt(i);
            if( thisChar.toUpperCase() != thisChar.toLowerCase()) {
                if (thisChar.toUpperCase() === thisChar) {
                    var original = large.indexOf(thisChar);
                    var converted = (original + amount) % 26;
                    if (converted < 0) {
                        converted = converted + large.length;
                        kirjaimet = kirjaimet + large.charAt(converted);

                    } else {
                        kirjaimet = kirjaimet + large.charAt(converted);
                    }
                }
                else {
                    var original = small.indexOf(thisChar);
                    var converted = (original + amount) % 26;
                    if (converted <0) {
                        converted = converted + small.length;
                        kirjaimet = kirjaimet + small.charAt(converted);
                    } 
                    else {
                        converted + converted + small.length;
                        kirjaimet = kirjaimet + small.charAt(converted);
                    }
                }
                
            } 
            else {
                kirjaimet = kirjaimet + thisChar;
            }
            
            
    }
    return kirjaimet;
}

console.log(caesar("Hello World !!!!", -29));


// Do not edit below this line
module.exports = caesar;
