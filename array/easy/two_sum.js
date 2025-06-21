/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

// Brute force solution
// Time complexity: O(n^2)
function twoSum(nums, target){

    if(nums.length <= 1) return null;

    for(let p1=0; p1< nums.length -1 ; p1++){
        const numberToFind = target - nums[p1];
        for(let p2= p1 + 1; p2 < nums.length; p2++){
            if(numberToFind === nums[p2]) return [p1,p2]
        }
    }

    return null;
}

function twoSumOptimized(arr, target){
  if(arr.length <= 1) return null;
  
  const hashMap = new Map();
  
  for(let p1=0; p1 < arr.length; p1++){
    const numberToFind = target - arr[p1];
    
    
    if(hashMap.has(arr[p1])){
      return [hashMap.get(arr[p1]), p1];
    }
    
    hashMap.set(numberToFind, p1);
    
  }
  
  return null;
}

console.log(twoSum([1,3,7,9,2], 11))