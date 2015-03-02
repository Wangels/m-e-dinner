
var ConfirmDishController = function(container, mainController){
	container.click(function(){
		model.addDishToMenu(model.getCurrentDish());
		model.setPending(undefined)
		mainController.showSelectDish()
	})
}

var DishBackController = function(container, mainController){
	
	container.click(function(){
		mainController.showSelectDish()
		model.setPending(undefined)
	})
}