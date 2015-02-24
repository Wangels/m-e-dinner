
var SideViewController = function(view, model, mainController) {
 
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		
	});

	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		
	});

	view.confirmButton.click(function(){
		mainController.showDinnerOverview()
		
	})
}