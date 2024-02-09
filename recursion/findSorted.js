/*
so here we just have to check element and the next if its true
call again the function for next sequence if it reaches to the last element 
then it returns true and the array is sorted 
and if any of the element is not sorted then it will never reach to the last element 
it will return false

*/

function findSorted(arr,index){
  if(index == arr.length -1)
  {
    return true;
  }
  return arr[index]<arr[index+1] && findSorted(arr,index+1);
}

let ans = findSorted([1,2,3,6,5,6],0);
console.log(ans)