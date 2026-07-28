/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let n = boxes.length;
    let answer = [];

    for (let i = 0; i < n; i++) {
        let operations = 0;

        for (let j = 0; j < n; j++) {
            if (boxes[j] === '1') {
                operations += Math.abs(i - j);
            }
        }

        answer.push(operations);
    }

    return answer;
};