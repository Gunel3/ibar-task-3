var mass = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
  ]
  
  var x=0, y=1, z=2, t=3, p=4, s=0;
  
  var output = "";
  
  for(let i = 0; i < 5; i++){
     r += `${mass[i][x]} ${mass[i][y]} ${mass[i][z]} ${mass[i][t]} ${mass[i][p]} `;
       
  s = t;
  t = y;
  y = s;
  
  s = x;
  x = p;
  p = s;
  }
  console.log(output);