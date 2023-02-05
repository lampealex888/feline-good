// swipe tinder: https://codepen.io/RobVermeer/pen/japZpY

//_________________________________________________________________________________________
//swiping left and right feature for mobile devices
'use strict';

var tinderContainer = document.getElementById('images');
var allCards = document.querySelectorAll('.images--card');
var nope = document.getElementById("nope");
var love = document.getElementById('love');
var star = document.getElementById('star');
var counter = 0;
var currCategories = [0, 0, 0, 0, 0];

//initializing current image
function initCards(card, index) {
  if (counter == 5) {
    allCards.forEach(function (el) {
        el.classList.remove('removed');
      })
    counter = 0;
    let imageTemp = ["img1", "img2", "img3", "img4", "img5"];
    let factTemp = ["fact1", "fact2", "fact3", "fact4", "fact5"];
    for (let i = 0; i < 5; i++) {
      category = chooseCategory();
      currCategories[i] = category;
      generateImage(imageTemp[i], factTemp[i]);
    }
  }
  var newCards = document.querySelectorAll('.images--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

function newCards() {
  let imageTemp = ["img1", "img2", "img3", "img4", "img5"];
  let factTemp = ["fact1", "fact2", "fact3", "fact4", "fact5"];
  for (let i = 0; i < 5; i++) {
    category = chooseCategory();
    currCategories[i] = category;
    generateImage(imageTemp[i], factTemp[i]);
  }
}
newCards();

//swiping each image loop
allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    if (event.deltaX > 0) {
      tinderContainer.classList.toggle('images_love');
    } 
    if (event.deltaX < 0) {
      tinderContainer.classList.toggle('images_nope');
    }

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  
  hammertime.on('panend', function (event) {
      el.classList.remove('moving');

      //replace car

      tinderContainer.classList.remove('images_love');
      tinderContainer.classList.remove('images_nope');

      var moveOutWidth = document.body.clientWidth;
      var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

      event.target.classList.toggle('removed', !keep);

      if (keep) {
        event.target.style.transform = '';
        
      } else {
        var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
        var toX = event.deltaX > 0 ? endX : -endX;
        var endY = Math.abs(event.velocityY) * moveOutWidth;
        var toY = event.deltaY > 0 ? endY : -endY;
        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
        if (event.deltaX > 0) {
        likeImage(currCategories[counter]);
        console.log("Like");
        } else {
        dislikeImage(currCategories[counter]);
        console.log("Dislike");
        }
        counter++;
        initCards();

        //assign swipe left
        
        //assign swipe right
      }
      // newCards();
    });
});

//dislike/like button
function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.images--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
      console.log(currCategories[counter]);
      likeImage(currCategories[counter]);
      counter++;
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
      console.log(currCategories[counter]);
      dislikeImage(currCategories[counter]);
      counter++;
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);
nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);
