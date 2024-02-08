function sumN(n)
{
    if(n===0)
    {
        return 0;
    }
    return n+sumN(n-1);
}

console.log(sumN(10));