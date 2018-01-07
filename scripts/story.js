/*---Story creation script---*/
/*---Method used : grammar---*/

storyNode = document.getElementById('story');

//list of grammar rules
Introduction = [{'Once upon a time,': "kingdom"},{'A long time ago,' : "planet"}];
Kingdom = [{' in a verdant kingdom,': "villains"},{' in a mysterious forest,' : "villains"}];
Planet = [{' in a galaxy far far away,': "villains"},{' on an abandoned planet,' : "villains"}];
Villains = [{' a war began after the death of the King': "none"},{' a band of rogue decided to make a coup against the despot who is ruling since a decade' : "none"}];
GrammarRules = {"introduction" : Introduction, "kingdom" : Kingdom, "planet" : Planet, "villains" : Villains};

function getStory(){
  storyNode.innerHTML = next("introduction");  
}

function next(paragraph){
  if(paragraph == "none"){
    return " ...";
  }
  paragraphs = GrammarRules[paragraph];
  console.log("paragraphs");
  console.log(paragraph);
  console.log(paragraphs);
  var p = Object.entries(paragraphs[getRandomArbitrary(0,2)]);
  console.log(p[0][0]);
  return p[0][0]+next(p[0][1]);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}