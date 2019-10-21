var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var substract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = substract(number1, number2);
alert(result);

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);

function convert1(input1) {
	alert(parseFloat((input1 - 32) * 5/9));
};

var f = prompt("fahrenheit");
var result = convert1(f);


function convert(input) {
	alert(parseFloat(input * 9/5 + 32));
};

var c = prompt("celsius:");
var result = convert(c);
