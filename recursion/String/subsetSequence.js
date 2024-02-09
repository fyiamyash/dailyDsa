/*
try to imagine a recurssion tree where 
each element is first considered and then
 it is not considered. if it is considered it is added into the
 processed word and and one it is not added. we have to remove each char from the unprocessed
 word every time 
 ******
 ***
 *
 * 
 * most important thing to rember here is SUBSTRING() is used to remove the
 * first char and gives you the new string
 * 
*/
function subSet(pro,unpro,arr){
    if(!unpro)
    {
       arr.push(pro);
        return;
    }
    else{
        let char = unpro[0];
        subSet(pro+char,unpro.substring(1),arr);
        subSet(pro,unpro.substring(1),arr);
    }
    return arr;
}

let ans = subSet('','abc',[])
console.log(ans)