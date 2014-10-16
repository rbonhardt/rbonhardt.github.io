$(document).ready( function() {
	$('.links').on('click', '.h', function() {
		console.log('clicked')
		$('.portfolio div').hide();
		$('.portfolio div.h').show();
	});

});