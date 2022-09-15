const sumAll = function(a, b) {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    var sum = 0;
    if (a <= b) {
        while (a <= b) {
            sum += a++;
            
        }
    }
    else {
        while (b <= a) {
            sum += b++;
        } 

    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
