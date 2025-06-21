function trappedRainWater(height){
  
  let p1 = 0;
  let p2 = height.length - 1;
  
  let totalWaterTrapped = 0;
  let maxLeft = 0;
  let maxRight = 0;
  
  while(p1 < p2){
    
    if(height[p1] < height[p2]){
      //starting with left pointer
      if(maxLeft > height[p1]){
        totalWaterTrapped += maxLeft - height[p1];
      }else{
        maxLeft = height[p1]
      }
      //moving left pointer
      p1++;
    }else{
      //starting with right pointer
      if(maxRight > height[p2]){
        totalWaterTrapped += maxRight - height[p2];
      }else{
        maxRight = height[p2]
      }
      //moving right pointer
      p2--;
    }
  }
  
  return totalWaterTrapped;
}

console.log(trappedRainWater([0,1,0,2,1,0,3,1,0,1,2]))
console.log(trappedRainWater([4,2,0,3,2,5]))