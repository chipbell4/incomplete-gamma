var gamma = require('gamma');
var simpsons = require('simpsons-rule');

/**
 * A function for calculating the lower incomplete gamma function
 *
 * @param s The s parameter, which is the parameter such that Gamma(s) = lower_gamma(s, INF)
 * @param x The x parameter
 *
 * @return double
 */
var lowerIncompleteGamma = function(s, x) {
    var F = function(t) {
        return Math.pow(t, s - 1) * Math.exp( -t);
    };

    return simpsons(F, 0, x);
};

/**
 * A function for calculating the upper incomplete gamma function
 *
 * @param s The s parameter, which is the parameter such that Gamma(s) = lower_gamma(s, INF)
 * @param x The x parameter
 *
 * @return double
 */
var upperIncompleteGamma = function(s, x) {
    return gamma(s) - lowerIncompleteGamma(s, x);
};

module.exports = {
    lower: lowerIncompleteGamma,
    upper: upperIncompleteGamma
};
