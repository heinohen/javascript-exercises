const removeFromArray = function(arr, ...value) {

    const argArray = Array.from(value);

    for (var i = arr.length; i >= 0 ; i--) {
        for (var j = 0; j < argArray.length; j++) {
            if (arr[i] === argArray[j]) {
                arr.splice(i,1);
            }
        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
