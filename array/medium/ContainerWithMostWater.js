/* 
Given an array of heights representing the elevation map where the width of each bar is 1, return the maximum area of water that can be contained.
*/


function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        maxArea = Math.max(maxArea, currentHeight * currentWidth);

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([9,9])); // Output: 9
console.log(maxArea([])); // Output: 0