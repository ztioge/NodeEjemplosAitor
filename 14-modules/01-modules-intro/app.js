// https://nodejs.org/api/modules.html
var circle = require('./circle.js');

console.log( 'The area of a circle of radius 4 is '+ circle.area(4));
console.log('The circumference of 4 is '+ circle.circumference(4));


var square = require('./square.js');
var mySquare = square(2);
console.log('The area of my square is ' + mySquare.area());
