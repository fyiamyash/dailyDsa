 /* 
  here we have to find the maximum water that can be hold asumming that elements in the array is the height
  so we are using the two pointers method here
  let i is at 0 and j is at end of the array 
  first we calculate the area of these by product of any one of these 2 which have the 
  min height will become the container right !(obvious reason)! and distance between them that is j-i;
  and then if the i pointer is smaller then we increment it or if the j pointer is minimum then we decrement it

  */
var maxArea = function(height) {
    let max = -Infinity;
  let i =0;
  let j=height.length-1;
    while(i<j)
      { let area =0;
        if(height[i]>height[j])
        {
          area= height[j]*(j-i);
          j--;
        }else{
          area= height[i]*(j-i);
          i++;
        }
       if(area>max)
       {
         max =area;
       }
      }
   return max;
  };
  maxArea([1,1]);
 


