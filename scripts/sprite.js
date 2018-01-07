/*---Sprite creation script---*/
/*---Methods used : seed, parametric---*/

//The Seed :
seed = "Maxime"; //here I use the name of the character

createSprite(seed);

function createSprite(seed){
  var canvas = document.getElementById('sprite');

  //display name
  var title = document.getElementById('name');
  title.innerHTML = seed;

  //SEED Values
  rStd = (seed.length*100)%255;
  gStd = (seed.charCodeAt(0))%255;
  bStd = (seed.charCodeAt(0)+seed.length)%255;

  //draw
  if (canvas.getContext) {
    ctx    = canvas.getContext('2d');
  
  //The parameters :
  //body
    skinIndex = seed.length%3;
    if(skinIndex == 0){
      r = 242; g=220; b=236; a=255;
      ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
      ctx.fillRect( 20, 0, 40, 40 );
      ctx.fillRect( 70, 60, 10, 10 );
    }
    if(skinIndex == 1){
      r = 79; g=42; b=2; a=255;
      ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
      ctx.fillRect( 20, 0, 40, 40 );
      ctx.fillRect( 70, 60, 10, 10 );
    }
    if(skinIndex == 2){
      r = 240; g=218; b=149; a=255;
      ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
      ctx.fillRect( 20, 0, 40, 40 );
      ctx.fillRect( 70, 60, 10, 10 );
    }
  //hair creation
    r = rStd%100; g=gStd%100; b=bStd%100; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( 20, 0, 40, 10 );
  //clothes creation
    r = rStd; g=gStd; b=bStd; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( 0, 40, 70, 50 );
    ctx.fillRect( 10, 90, 20, 50 );
    ctx.fillRect( 40, 90, 20, 50 );
  //eyes creation
    r = 0.5*rStd%255; g=gStd%255; b=2*bStd%255; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( 30, 20, 10, 10 );
    ctx.fillRect( 50, 20, 10, 10 );
  //shield & sword creation
    r = rStd%50; g=gStd%50; b=bStd%50; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( 0, 50, 30, 30 );
    ctx.fillRect( 70, 20, 10, 40 );
    ctx.fillRect( 80, 50, 10, 10 );
  } 
}