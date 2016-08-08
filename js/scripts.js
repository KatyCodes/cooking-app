var gallon = parseInt(prompt("Enter weight in gallons"));

var liter = function(x) {
return x / .26417;
};

alert("In liters: " + liter(gallon));
