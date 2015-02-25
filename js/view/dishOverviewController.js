var DishOverviewController = function(view, model, mainController){
	/*
	not needed
	view.dishGrid.find(".dish").click(function(){

		$("#dishView").attr('rel', this.id)
		mainController.showDishview(this.id)

	})*/ 
}

var DishImageController = function(id, mainController){

	var containerID = "#" + id
	
	$(containerID).click(function(){
		//$("#dishView").attr('rel', id)
		
		model.setCurrentDish(id)
		mainController.showDishview(id)
	})

}

var SearchController = function(model, mainController){

	searchFunc = function(){
		var searchText = $("#searchText").val()
		console.log("Searching, searchText=" + searchText)

		model.setSearchFilter(searchText)

	}

	allFunc = function(){
		console.log("back to All")
		model.setSearchType(undefined)
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