/**
 * Maximum Subarray
 * Link: https://leetcode.com/problems/maximum-subarray/description/
 */
function maxSubArray(nums) {
  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

module.exports = maxSubArray;
