# Incomplete Gamma
A set of functions for calculating the lower and upper incomplete gamma functions. An example:
`
var incomplete = require('incomplete-gamma');
console.log(incomplete.lower(1.0, 2.0));
console.log(incomplete.upper(1.0, 2.0));
`
These should sum to 1
