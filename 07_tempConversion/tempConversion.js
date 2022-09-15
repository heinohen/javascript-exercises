
//[°C] = ([°F] − 32) × 5⁄9 
const ftoc = (temp) => parseFloat(((temp - 32) * (5/9)).toFixed(1));




//[°F] = [°C] × 9⁄5 + 32 
const ctof = (temp) => parseFloat((temp *(9/5) + 32).toFixed(1));



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
