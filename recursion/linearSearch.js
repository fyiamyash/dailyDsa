function LinearSearch(arr,target,index){

    if(arr[index] == target)
    {
        return index;
    }
    else if(index>arr.length)
    {
        return false;
    }
   return LinearSearch(arr,target,index+1);
}



let ans = LinearSearch([23,45,6,7,8,90],90,0)
console.log("present at index: " + ans)