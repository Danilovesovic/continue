var fruits = ['cherry','cherry','cherry','cherry','cherry','cherry','cherry','cherry','plum','plum','plum','plum','plum','plum','plum','lemon','lemon','lemon','lemon','lemon','lemon','orange','orange','orange','orange','orange','banana','banana','banana','banana','watermellon','watermellon','watermellon','bar','bar','jackpot'];
var counterSpins = 0;
var slides = $('.slide');
var rand;
var text;
var animateTime = 1000;
var animateAdd = 100;

fillAllCols(); // first filil all innerSlides

$('#startBtn').on('click', function() {
    counterSpins++;
    animateAdd = 100;
    removeLastInnerSlides();
    startSpin();
});


function fillAllCols() {
    $('.innerSlide').each(function(index, el) {
        text = "";
        for (var i = 0; i < 21; i++) {
            rand = Math.floor(Math.random() * fruits.length);
            text += `
		<div class="box">
		<img src="images/${fruits[rand]}.png" />
		</div>
		`;
        }
        $(el).append(text);
    });
}


function startSpin() {


    $('.innerSlide').each(function(index, el) {
        if(index %2 == 0){
                    animateAdd += 100;

        }
        $(el).animate({
            top: "+=2100"
        }, animateTime + animateAdd, function() {
            if (index === 4) {
                fillSlidesWithInnerSlides();
            };
        });
    });
}

function fillSlidesWithInnerSlides() {
    var text;
    slides.each(function (i,e) {
        text = "";
        text = '<div class="innerSlide"></div>';
         $(e).append(text);
    });
    fillNewInnerSlides();
   
}

function fillNewInnerSlides() {
    slides.each(function (i,e) {
        text = "";
        for (var i = 0; i < 21; i++) {
            rand = Math.floor(Math.random() * fruits.length);
            text += `
		<div class="box">
		<img src="images/${fruits[rand]}.png" />
		</div>
		`;
        }
        
        $(e).children().last().append(text);
    });
}

function removeLastInnerSlides(parameters) {
    if(counterSpins > 2){
        slides.each(function (i,e) {
            $(e).children().first().remove();
        })
    }
        
}