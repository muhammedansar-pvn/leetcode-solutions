/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let n = nums.length;
    let ans = [...nums];

    for (let i = n - 1; i >= 0; i--) {
        ans.push(nums[i]);
    }

    return ans;
};