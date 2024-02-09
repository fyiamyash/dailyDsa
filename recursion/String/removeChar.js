function removeA(pro,unpro)
{
  if(!unpro)
  {
    console.log(pro)
    return;
  }
  let char = unpro[0];
  if(char ==='a')
  {
    removeA(pro,unpro.substring(1));
  }
  else{
    removeA(pro+char,unpro.substring(1));
  }
}

removeA("","bccaaca")