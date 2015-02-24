var DinnerOverviewController = function(view, model, mainController){
	console.log("DinnerOverviewController")

	printFullRecipe = function(){
		console.log("print full recipe")
		mainController.showDinnerPrepview()
	}
	
}

var TopViewController = function(view, model, mainController){
	goBack = function(){
		mainController.showSelectDish()
		console.log("clicked backButton")

	}
}