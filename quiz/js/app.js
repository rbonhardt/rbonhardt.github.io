var score = 0;
var progress = 0;
var questionCount = 1;
var arrPosition = 0;
var selected = false;

function Question(state, cities, capital) {
	this.state = state;
	this.cities = cities;
	this.capital = capital;
};

var alabama = new Question('Alabama', ['Montgomery', 'Mobile', 'Birmingham', 'Tuscaloosa'], 'Montgomery');

var florida = new Question('Florida', ['Orlando', 'Miami', 'Tampa', 'Tallahassee'], 'Tallahassee');

var georgia = new Question('Georgia', ['Macon', 'Atlanta', 'Savannah', 'Bainbridge'], 'Atlanta');

var northCarolina = ('North Carolina', ['Wake Forest', 'Salem', 'Raleigh', 'Charlotte'], 'Raleigh');

var california = ('California', ['Los Angeles', 'Sacramento', 'San Francisco', 'San Diego'], 'Sacramento');

var questions = [georgia, florida, alabama, northCarolina, california];

$(document).ready(function() {

	// on page load intro will show
	// for now, add this when done and uncomment h1s css 
	// doIntro();

	loadQuestion(arrPosition);

});

function doIntro() {
  $('.step-1').fadeIn(1500, function() {
    $(this).fadeOut(1500, function() {
      $('.step-2').fadeIn(1500, function() {
		    $(this).fadeOut(1500, function() {
	        $('.step-3').fadeIn(1500, function() {
				    $(this).fadeOut(1500, function() {
			        $('.step-4').fadeIn(1500, function() {
						    $(this).fadeOut(1500, function() {
					        $('.step-5').fadeIn(1500, function() {
								    $(this).fadeOut(1500, function() {
							        $('.step-6').fadeIn(1500, function() {
										    $(this).fadeOut(1500, function() {
									        $('.main').fadeIn(1500);
										    });
										  });
								    });
								  });
						    });
						  });
				    });
				  });
		    });
		  });
    });
  })
}

function loadQuestion() {
	// then user will be presented with a question
	$("#capital").text(questions[arrPosition].state);
	
	// cities show
	for (var i = 0; i < 4; i++) {
		var listItem = 'list-item-' + (i+1);
		$('.'+listItem+' .item').text(questions[arrPosition].cities[i]);
		console.log(i);
		console.log(questions[arrPosition]);
		console.log(questions[arrPosition].cities[i]);
	};


	// user selects an answer and it becomes selected
	$('.list').on('click', 'li', function () {
		// but first we have to make sure all other selecteds are clear
		$('.list').find('li').removeClass('selected');
		$(this).addClass('selected');
		selected = true;
	});

	// when user submits answer selected 
	$('.checkout').on('click', function() {
		// check to make sure an answer is selected
		if (selected === true) {
			// progress bar moves 20%
			progress += 20;
			questionCount += 1;
			$('#question-count').text(questionCount);
			$("#top-progress").attr("aria-valuenow", progress);
			$("#top-progress").attr("style", "width: "+progress+"%;");
			//answer is captured
			var answer = $('.list').find('li.selected .item').text();
			var capital = questions[arrPosition].capital;
			// console.log(answer);
			// console.log(capital);
			// and class goes away
			$('.list').find('li').removeClass('selected');
			selected = false;
			// and app checks if capital equals answer selected
			if (capital === answer){
				// if it does correct flashes
				$('#update h1').text("Correct!");
				// and score goes up 20 points
				score += 20;
				$('#score').text(score);
				$("#score-bar").attr("aria-valuenow", score);
				$("#score-bar").attr("style", "width: "+score+"%;");
			} else {
				$('#update h1').text("Wrong!");
			};
		} else {
			$('#update h1').text("You have to select an answer first");
		}
		console.log(arrPosition);
		arrPosition+=1;
		console.log(arrPosition);
		loadQuestion(arrPosition);
	});
};