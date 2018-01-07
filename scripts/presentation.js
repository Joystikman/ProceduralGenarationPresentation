//Presentation functions

function navigation(prev,next){
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        document.location.href=prev;
      }
      else if(event.keyCode == 39) {
        document.location.href=next;
      }
  });
} 