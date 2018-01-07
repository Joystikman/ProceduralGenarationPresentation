/*--- Game script ---*/
//This page is basically a hack. I don't generate the character nor the map but used images
//because it would be erased at each move.
//There's probably a better solution but I don't know canvas enough and I made this the night before my talk, I didn't had time to search 🙈

var canvas = document.getElementById('map');
var ctx = canvas.getContext('2d');
var x = 5;
var y = 5;

function addPlayer(){  
  var sprite = document.getElementById("sprite");
  sprite.onload = function() {
    ctx.drawImage(sprite, x,y);
  }
}
addPlayer();
controls();

//Move function
function controls(){
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37 && x>15) {
        x=x-15;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sprite, x,y);
      }
      else if(event.keyCode == 38 && y>15) {
        y=y-15;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sprite, x,y);
      }
      else if(event.keyCode == 39 && x<1485) {
        x=x+15;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sprite, x,y);
      }
      else if(event.keyCode == 40 && y<1485) {
        y=y+15;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sprite, x,y);
    }
});
}