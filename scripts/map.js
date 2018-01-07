/*---Map generation script---*/
/*---Method used : tiles ---*/

//type of tiles
var tiles= ["dirt","grass","water"];

//tile driwing function
function createTile(ctx,tile,x,y){
  if(tile == "dirt"){
    r = 200; g=154; b=44; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( x, y, 75, 75 );
  }
  if(tile == "grass"){
    r = 60; g=201; b=44; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( x, y, 75, 75 );
  }
  if(tile == "water"){
    r = 44; g=84; b=201; a=255;
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    ctx.fillRect( x, y, 75, 75 );
  }
}

//Print tiles in the presentation
function template(){
  canvas = document.getElementById('tiles');
  ctx = canvas.getContext('2d');
  createTile(ctx,'dirt',0,0);
  createTile(ctx,'grass',85,0);
  createTile(ctx,'water',170,0);
}

template();

//Map generation function
//use weigh to influence random generation and create a more "realistic" map
function generateMap(){
  var canvas = document.getElementById('map');
  var ctx = canvas.getContext('2d');
  var weight = {"dirt" : 1,"grass" : 1, "water" : 1};
  var x, y;
  for (x = 0; x < 1500; x+=75) {
      for (y = 0; y < 1500; y+=75) {
          tile = getRandomTile(weight);
          createTile(ctx,tile,x,y);
          if(tile == "water"){
            weight = {"dirt" : 0.2,"grass" : 2, "water" : 0.9};
          }
          else if(tile == "grass"){
            weight = {"dirt" : 0.9,"grass" : 1, "water" : 1.2};
          }
          else{
            weight = {"dirt" : 1 ,"grass" : 1, "water" : 1};
          }
      }
  }
}

function getRandomTile(weight){
  d = getRandomArbitrary(0,3)*weight["dirt"];
  max = "dirt";
  g = getRandomArbitrary(0,3)*weight["grass"];
  if(g>d){
    max = "grass";
  }
  w = getRandomArbitrary(0,3)*weight["water"];
  if(w>d && w>g){
    max = "water";
  }
  return max;
}

generateMap();


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}