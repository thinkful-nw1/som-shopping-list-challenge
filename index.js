

function createListHtml(value){
	return `<li><span class="shopping-item">${value}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
}

function lineThroughItem(){
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
		e.preventDefault();
		$(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	})
}

function deleteItem(){
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		e.preventDefault();
		$(e.target).closest('li').remove();
	})
}

function createShoppingList() {
	$('#js-shopping-list-form').on('submit', function(e){
		e.preventDefault();

		const value = $('#shopping-list-entry').val();
		console.log(value);

		$('.shopping-list').append($(createListHtml(value)));
		$('#shopping-list-entry').val('');
	});
};


$(createShoppingList)
$(lineThroughItem)
$(deleteItem)
