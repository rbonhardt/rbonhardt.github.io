var fizzBuzz = function(number) {
	var result = '';
	for(i = 1; i < (number + 1); i++) {
	    if ((i % 3 === 0) && (i % 5 === 0)) {
	        //$('body').append('fizz buzz, ');
	        //console.log('fizzbuzz');
	        result = result + 'fizz buzz, ';
	    } else if (i % 3 === 0) {
	        //$('body').append('fizz, ');
	        //console.log('fizz, ');
	        result = result + 'fizz, ';
	    } else if (i % 5 === 0) {
	        //$('body').append('buzz, ');
	        //console.log('buzz, ');
	        result = result + 'buzz, ';
	    } else {
	        //$('body').append(i + ', ');
	        //console.log(i + ', ');
	        result = result + i + ', ';
	    }
	}
	return result;
};

$(document).ready(function() {
	// When number in input and submit hit then shows in results
	$('#submit').on('click', function (event) {
		event.preventDefault();
		var number = $(this).closest('fieldset').find('#number').val();
		$('#result').text('');
		if (+number) {
			if (+number % 1 != 0) {
				$('#note').text("Enter a number without a decimal. Try again.");
			} else {
				//console.log("true");
				$('#result').text(fizzBuzz(+number));
				$('#note').text("Change number and click submit to do again. Your result is:");
			};
		} else {
			//console.log('false');
			$('#note').text("You didn't enter a number. Try again.");
		};
		//console.log(number);
		$('#entered').text('You entered: ' + number);
		//fizzBuzz(+number);
	});

	/*
	for(i = 1; i < 101; i++) {
	    if ((i % 3 === 0) && (i % 5 === 0)) {
	        $('body').append('fizz buzz, ');
	    } else if (i % 3 === 0) {
	        $('body').append('fizz, ');
	    } else if (i % 5 === 0) {
	        $('body').append('buzz, ');
	    } else {
	        $('body').append(i + ', ');
	    }
	}*/
});



/*
x1. create input form 
x2. when submit button is hit takes value and puts in entered paragraph
3. add fizzbuzz function so that result is put in result paragraph
4. change notes paragraph when submit
5. remove result paragraph

html needs: input with submit button, paragraph of number entered, result, and notes. */