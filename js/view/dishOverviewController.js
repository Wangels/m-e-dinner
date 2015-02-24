var DishOverviewController = function(view, model, mainController){
	view.dishGrid.find(".dish").click(function(){

		$("#dishView").attr('rel', this.id)
		mainController.showDishview(this.id)

	})
}


var SearchController = function(model, mainController){

	searchFunc = function(){
		console.log("Searching")
	}

	allFunc = function(){
		console.log("back to All")
	}

	starterFunc = function(){
		console.log("Starter activated")
	}

	mainFunc = function(){
		console.log("Main dish activated")
	}

	dessertFunc = function(){
		console.log("Dessert activated")
	}
}