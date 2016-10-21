// https://nodejs.org/api/modules.html

// Variables local to the module will be private
// Variable PI is private

var PI = Math.PI;

exports.area = function (r) {
    return PI * r * r;
}

exports.circumference = function (r) {
    return 2 * PI * r;
}

