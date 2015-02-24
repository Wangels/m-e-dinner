var DinnerOverviewController = function(view, model, mainController){

	printFullRecipe = function(){
		mainController.showDinnerPrepview()
	}
	
}

var TopViewController = function(view, model, mainController){
	goBack = function(){
		mainController.showSelectDish()
	}
}