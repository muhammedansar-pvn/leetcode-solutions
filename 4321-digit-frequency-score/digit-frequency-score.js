/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let freq = new Array(10).fill(0);

    while (n > 0) {
        let digit = n % 10;
        freq[digit]++;
        n = Math.floor(n / 10);
    }

    let score = 0;

    for (let digit = 0; digit <= 9; digit++) {
        score += digit * freq[digit];
    }

    return score;
};