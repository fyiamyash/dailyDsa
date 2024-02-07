/* 
here we are assigning the object and then
first we sort the element adn thencheck if that sorted word is present in the object or not if we then if present then we push the correct word into the sortedwor array of object if not then initalize the new sorted word array in your object!
*/
function solve(words) {
    const anagramGroup={}
  for(let word of words)
    {
     let sortedWord = Array.from(word).sort().join('');
      // console.log(sortedWord);
      if(!(sortedWord in anagramGroup))
      {
        anagramGroup[sortedWord] =[]
      }
      anagramGroup[sortedWord].push(word);
    }

  return Object.values(anagramGroup);
}
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(solve(strs))
