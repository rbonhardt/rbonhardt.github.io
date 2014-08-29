$(document).ready(function() {
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
	}
});