let sum =0;
function rev(n)
{
    if(n==0)
    {
        return;
    }
    let remainder = n%10;
    sum = sum*10 +remainder;
    rev(Math.floor(n/10))
}
function rev2(n)
{
    if (n==0)
    {
        return 0;
    }
    let remainder = n%10;
    let str = n.toString().length
    let len =Math.pow(10, str-1);
    return (len*remainder)+(rev2(Math.floor(n/10)));

}
rev(1234)
console.log(rev2(12345))
console.log(sum);