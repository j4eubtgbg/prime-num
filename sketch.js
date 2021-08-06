var j;
var e = 0;
var a = [94,14,5,15,8,75,73,7,13,11];
function setup() 
{
  createCanvas(400,400);
  for(var i = 0; i<a.length; i++){
    for(j = 2; j<a[i];j++){
     if(a[i]%j===0){
       e = 1;
       console.log('faf');
     }
      if(e === 0){
        console.log(a[i]);
      }
    }
    e=0;
  }
}

function draw() 
{
background(51);

}

