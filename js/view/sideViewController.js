
var SideViewController = function(view, model, mainController) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log("+")
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		console.log("-")
	});

	view.confirmButton.click(function(){
		mainController.showDinnerOverview()
		console.log("clicked confirmButton")
	})
}