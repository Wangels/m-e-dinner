
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

var RemoveController = function(id, container, model, mainController){

	console.log("removeController, id=" + id)
	container.click(function(){
		console.log("clicked")
		model.removeDish(this.id)
	})
}