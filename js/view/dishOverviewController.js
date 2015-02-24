var DishOverviewController = function(view, model, mainController){
	view.dishGrid.find(".dish").click(function(){
		console.log("clicked dish" + this.id)

		$("#dishView").attr('rel', this.id)
		mainController.showDishview(this.id)

	})
}


var SearchController = function(model, mainController){

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