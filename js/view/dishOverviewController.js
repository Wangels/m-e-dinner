
var DishImageController = function(id, mainController){

	var containerID = "#" + id
	
	$(containerID).click(function(){
		//$("#dishView").attr('rel', id)
		
		//model.setCurrentDish()
		model.getDish(id) //get the dish to prepare for the dishView
		mainController.showDishview(id)
	})

}

var SearchController = function(view, model, mainController){

	view.searchButton.click(function(){
		var searchText = $("#searchText").val()
		//console.log("Searching, searchText=" + searchText)

		model.setSearchFilter(searchText)

	})

	view.allFilter.click(function(){
		//console.log("back to All")
		model.setSearchType(undefined)
	})

	view.starterFilter.click(function(){
		//console.log("Starter activated")
		model.setSearchType("starter")
	})

	view.mainFilter.click(function(){
		//console.log("Main dish activated")
		model.setSearchType("main dish")
	})

	view.dessertFilter.click(function(){
		//console.log("Dessert activated")
		model.setSearchType("dessert")
	})
}