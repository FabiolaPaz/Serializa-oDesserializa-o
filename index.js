const escola = {
    nameDaEscola: 'EliteWay',
    rua: 'FreiCaneca',
    numero: '1234',

};
  
  const escolaStr = JSON.stringify(escola);
  
  console.log(escolaStr);
 
  
  console.log(JSON.parse(escolaStr));
