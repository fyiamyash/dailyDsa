function twoSum(arr,key){
    let result =[];
    let i=0;
    let j = arr.length-1;
    while(i<j)
      {
        if(arr[i]+arr[j]>key)
        {
          j--;
        }
        else if(arr[i]+arr[j]<key)
        {
          i++;
        }
        else{
          result.push([arr[i],arr[j]]);
          i++;
          j--;
        }
      }
    console.log(result);
  }
  twoSum([0,2,7,9,11,15],9)