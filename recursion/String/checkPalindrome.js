
function checkPalindrone(userInput) {
    let str = userInput.replace(/[^a-zA-Z0-9 ]/g, '');
    let finalStr = str.replace(/[\s!]/g, ''); 
    let copyStr = finalStr.split('').reverse().join('');

    if (finalStr.toLowerCase() === copyStr.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

let ans=checkPalindrone("race a car");
console.log(ans)