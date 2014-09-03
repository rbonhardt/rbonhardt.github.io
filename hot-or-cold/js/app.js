var secretNum;
var numGuesses;
var won = false;


var newGame = function () {
	secretNum = Math.floor((Math.random() * 100) + 1);
	numGuesses = 0;
	won = false;
	$('#feedback').text("Make your Guess!");
	$('#count').text(numGuesses);
	$("#guessList").children().remove();
	console.log(secretNum);
}

//compare function
var compare = function(guessedNum, correctNum) {
	if (guessedNum === correctNum){
		$('#feedback').text('Ohh Ya! You guessed it!');
		won = true;
	}
	else {
		var difference = Math.abs(guessedNum - correctNum);
		if (difference < 10) {
			$('#feedback').text("You're getting so hot!");
		} else if (difference < 15) {
			$('#feedback').text("You're getting hotter...");
		} else if (difference < 30) {
			$('#feedback').text("You're getting warm...");
		} else {
			$('#feedback').text("You're so cold :(");
		}
	}
};


$(document).ready(function(){
	
	newGame();
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('.new').click(function() {
  		newGame();
  	});

  	/*--- Functions to run when guess is submitted --*/
  	$('#guessButton').on('click', function(event) {
  		event.preventDefault();
  		if (won === true) {
  			$('#feedback').text("You've already won. Click +New Game to start over.");
  		}
  		else {
	  		// assign value of userGuess to numGuessed
	  		var numGuessed = $('#userGuess').val();
	  		// add numGuessed to li in guessList
	  		$('#guessList').append("<li>" + numGuessed + "</li>");
	  		// increment count by 1
	  		numGuesses ++;
	  		// update count
	  		$('#count').text(numGuesses);
	  		// call compare function
	  		compare(+numGuessed, secretNum);
	  		// reset userGuess
	  		$('#userGuess').val('');
	  	};
  	});



});

/*

Game Functionality

x1. A random number is generated
x- assign a random number to secretNum

2. They put number in input and feedback is given
- show number guessed, 
- showhow many guesses they've had
- see if guessedNum is equal to secretNum
- if not equal then see by how much and give feedback
-- change feedback
-- change feedback background color
- if equal then say hey you got it

x3. They can do a new game
x- reset secretNum
x- reset num of guesses
x- reset feedback 
x- reset guestList of previous guesses


*/


