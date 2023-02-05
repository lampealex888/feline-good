// create map of categories and their values
let vals = new Map();
let valuesArr = [0,0,0,0,0,0,0];
let category;
//setting all the modifiers as 0
let pandaVal = 0;
let catVal = 0;
let dogVal = 0;
let foxVal = 0;
let birdVal = 0;
let memesVal = 0;
let redpandaVal = 0;
let koalaVal = 0;
let jokesVal = 0;
let raccoonVal = 0;
let kangarooVal = 0;
let modBase = 2;

initiate();

function initiate(){
  //setting values for all categories in map as 0
    vals.set("panda",0);
    vals.set("cat",0);
    vals.set("dog",0);
    vals.set("fox",0);
    vals.set("bird",0);
    vals.set("memes",0);
    vals.set("jokes",0);
    vals.set("redpanda",0);
    vals.set("koala",0);
    vals.set("raccoon",0);
    vals.set("kangaroo",0);
}
//this function chooses the category for the next image
function chooseCategory(){
    //First getting value of each category
  
    pandaVal = vals.get("panda");
    catVal = vals.get("cat");
    dogVal = vals.get("dog");
    foxVal = vals.get("fox");
    birdVal = vals.get("bird");
    memesVal = vals.get("memes");
    jokesVal = vals.get("jokes");
    redpandaVal = vals.get("redpanda");
    koalaVal = vals.get("koala");
    raccoonVal = vals.get("raccoon");
    kangarooVal = vals.get("kangaroo");
    
    //Rolling a value for each category between 1 and 20 and adding modifier
    pandaRand = Math.floor(Math.random()*21) + pandaVal;
    catRand = Math.floor(Math.random()*21) + catVal;
    dogRand = Math.floor(Math.random()*21) + dogVal;
    foxRand = Math.floor(Math.random()*21) + foxVal;
    birdRand = Math.floor(Math.random()*21) + birdVal;
    memesRand = Math.floor(Math.random()*21) + memesVal;
    jokesRand = Math.floor(Math.random()*21) + jokesVal;
    redpandaRand = Math.floor(Math.random()*21) + redpandaVal;
    koalaRand = Math.floor(Math.random()*21) + koalaVal;
    raccoonRand = Math.floor(Math.random()*21) + raccoonVal;
    kangarooRand = Math.floor(Math.random()*21) + kangarooVal;
    
    let choiceArr = [pandaRand, catRand, dogRand, foxRand, birdRand, memesRand, jokesRand, redpandaRand, koalaRand, raccoonRand, kangarooRand];
    let sortedArr = [pandaRand, catRand, dogRand, foxRand, birdRand, memesRand, jokesRand, redpandaRand, koalaRand, raccoonRand, kangarooRand];
    //sorting the array in reverse order, highest value(first term) will be the one chosen
    sortedArr.sort(function(a, b){return b - a});
    //creating array with just the values, and array with just the keys, same order as the map
    let keysArr = [...vals.keys()]
    //getting index of the chosen value from the array of just the values
    loc = choiceArr.indexOf(sortedArr[0]);
    //using index to get the key from the array of the keys
    category = keysArr[loc];
    
    return category;
}
//calls the appropriate function to generate the right image
function generateImage(img, info){  
   
    if(category=="panda"){
      getPandaImage(img, info);
    }
    else if(category=="cat"){
      getCatImage(img, info);
    }
    else if(category=="dog"){
      getDogImage(img, info);
    }
    else if(category=="fox"){
      getFoxImage(img, info);
    }
    else if(category=="bird"){
      getBirdImage(img, info);
    }
    else if(category=="memes"){
      getMemeImage(img, info);
    }
    else if(category=="jokes"){
      getJokeImage(img, info);
    }
    else if(category=="redpanda"){
      getRedPandaImage(img, info);
    }
    else if(category=="koala"){
      getKoalaImage(img, info);
    }
    else if(category=="raccoon"){
      getRaccoonImage(img, info);
    }
    else if(category=="kangaroo"){
      getKangarooImage(img, info);
    }
  }
/*
function to call when user selects like, increases the modifier value of the corresponding category
Also added condition to keep the max modifier under 20 so that the user never sees exclusively one
category
*/
function likeImage(categoryParam){
  if(categoryParam=="panda"){
    if(pandaVal<=20){
        pandaVal+=modBase;
    }
  }
  else if(categoryParam=="cat"){
    if(catVal<=20){
        catVal+=modBase;
    }
  }
  else if(categoryParam=="dog"){
    if(dogVal<=20){
        dogVal+=modBase;
    }
  }
  else if(categoryParam=="fox"){
    if(foxVal<=20){
        foxVal+=modBase;
    }
  }
  else if(categoryParam=="bird"){
    if(birdVal<=20){
        birdVal+=modBase;
    }
  }
  else if(categoryParam=="memes"){
    if(memesVal<=20){
        memesVal+=modBase;
    }
  }
  else if(categoryParam=="jokes"){
    if(jokesVal<=20){
        jokesVal+=modBase;
    }
  } 
  else if(categoryParam=="redpanda"){
    if(redpandaVal<=20){
        redpandaVal+=modBase;
    }
  }
  else if(categoryParam=="koala"){
    if(koalaVal<=20){
        koalaVal+=modBase;
    }
  }
  else if(categoryParam=="raccoon"){
    if(raccoonVal<=20){
        raccoonVal+=modBase;
    }
  }
  else if(categoryParam=="kangaroo"){
    if(kangarooVal<=20){
        kangarooVal+=modBase;
    }
  }
}

/*
function to call when user selects dislike, decreases the modifier value of the corresponding image
if the user dislikes more than 20 times, the modifier will have larger magnitude than the random
generated number so it becomes virtually impossible for the user to see images from that category
which was left on purpose since if a user dislikes a category that many times it is unlikely they 
want to see it anymore
*/
function dislikeImage(categoryParam){
    if(categoryParam=="panda"){
        pandaVal-=modBase;
    }
    else if(categoryParam=="cat"){
        catVal-=modBase;
    }
    else if(categoryParam=="dog"){
        dogVal-=modBase;
    }
    else if(categoryParam=="fox"){
        foxVal-=modBase;
    }
    else if(categoryParam=="bird"){
      birdVal-=modBase;
    }
    else if(categoryParam=="memes"){
      memesVal-=modBase;
    }
    else if(categoryParam=="jokes"){
      jokesVal-=modBase;
    } 
    else if(categoryParam=="redpanda"){
      redpandaVal-=modBase;
    }
    else if(categoryParam=="koala"){
      koalaVal-=modBase;
    }
    else if(categoryParam=="raccoon"){
      raccoonVal-=modBase;
    }
    else if(categoryParam=="kangaroo"){
      kangarooVal-=modBase;
    }
  }