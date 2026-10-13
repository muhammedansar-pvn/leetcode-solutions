/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let smallest= Math.min(...nums)
    let largest = Math.max(...nums)
    let missing = []

    for (let i = smallest ; i<=largest; i++){
        if(!nums.includes(i)){
        missing.push(i)
        }
    }

     return missing;
};