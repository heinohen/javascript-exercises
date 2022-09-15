const removeFromArray = function(arr, ...value) {

    const argArray = Array.from(value);
    console.log(argArray);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < argArray.length; j++) {
            if (arr[i] === argArray[j]) {
                arr.splice(i,1);
            }
        }
    }

    return arr;

};

console.log(removeFromArray([1, 2, 3, 4],3, 2));
// Do not edit below this line
module.exports = removeFromArray;
