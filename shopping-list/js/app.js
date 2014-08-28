$(document).ready(function() {
	//add item to list
	$('.list').on('click', '.submit', function (event) {
		event.preventDefault();
		var item = $(this).closest('.list').find('.add').val();
		var listItem = $('<li class="list-item"><i class="fa fa-check"></i><i class="fa fa-close"></i><span class="item">'+item+'</span></li>')
		$('.get-list').append(listItem);
		$('.add').val('');
	});

	// complete list item
	// if click on fa-check then remove from to-get and move to basket
	$('.list-item').on('click', '.fa-check', function () {
		var item = $(this).closest('.list-item').find('.item').text();
		var listItem = $('<li class="completed-item"><i class="fa fa-check-circle"></i><span class="item">'+item+'</span></li>')
		$('.basket-list').append(listItem);
		$(this).closest('.list-item').remove();
	});

	// delete list item
	$('.list-item').on('click', '.fa-close', function () {
		$(this).closest('.list-item').remove();
	});

	// checkout aka delete all in basket
	$('.checkout').on('click', function () {
		$('.completed-item').remove();
	});

	// sort to get items
	$('.get-list').sortable({ axis: "y" });
});