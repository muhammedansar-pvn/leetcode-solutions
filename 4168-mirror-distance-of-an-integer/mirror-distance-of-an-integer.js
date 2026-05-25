/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev = parseInt(n.toString().split('').reverse().join(''));
    return Math.abs(n - rev);
};