var DishOverviewController = function(view, model, mainController){
	view.dishGrid.find(".dish").click(function(){

		$("#dishView").attr('rel', this.id)
		mainController.showDishview(this.id)

	})
}


var SearchController = function(model, mainController){

	searchFunc = function(){
		console.log("Searching")
		//model.setSearchFilter(ngt)

	}

	allFunc = function(){
		console.log("back to All")
		model.setSearchType("all")
	}

	starterFunc = function(){
		console.log("Starter activated")
		model.setSearchType("starter")
	}

	mainFunc = function(){
		console.log("Main dish activated")
		model.setSearchType("main dish")
	}

	dessertFunc = function(){
		console.log("Dessert activated")
		model.setSearchType("dessert")
	}
}