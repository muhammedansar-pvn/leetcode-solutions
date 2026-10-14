/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);
    let low = 0, high = nums.length - 1, pairs = 0;

    while (low < high) {
        if (nums[low] + nums[high] < target) {
            pairs += high - low;
            low++;
        } else {
            high--;
        }
    }

    return pairs;
};