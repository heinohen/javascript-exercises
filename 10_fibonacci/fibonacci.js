

const fibonacci = function(upToThis) {

    
    

    if (typeof(parseInt(upToThis)) != "number");

    if (upToThis < 0) {
        return "OOPS";
    }

    if (upToThis == 0) {
        return 0;
    }

    if ( upToThis == 1 || upToThis == 2) {
        return 1;
    }

    return fibonacci(upToThis-2) + fibonacci(upToThis-1);


};

// Do not edit below this line
module.exports = fibonacci;
