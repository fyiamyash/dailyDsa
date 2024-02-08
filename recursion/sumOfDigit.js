function digit(n){
    if(n<=0){
        return 0;
    }
    let v = n%10;
    return v+ digit(Math.floor(n/10));
}

let n = digit(1342);
console.log(n)

// let x=0%10
// console.log(x)