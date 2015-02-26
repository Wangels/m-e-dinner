var DinnerOverviewController = function(view, model, mainController){

	/*printFullRecipe = function(){
		mainController.showDinnerPrepview()
	}*/
	
}

var PrintController = function(container, mainController){
	container.click(function(){
		mainController.showDinnerPrepview()
	})
}

var GoBackController = function(container, mainController){
	container.click(function(){
		mainController.showSelectDish()
	})
}