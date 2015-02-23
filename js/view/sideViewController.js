
var SideViewController = function(view, model ) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log("+")
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		console.log("-")
	});

	view.confirmButton.click(function(){
		console.log("clicked confirmButton")
	})
}