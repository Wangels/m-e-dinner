
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

		model.setSearchFilter(searchText)
		model.getAllDishes()

	})

	view.allFilter.click(function(){
		
		model.setSearchType(undefined)
		model.getAllDishes()
	})

	view.starterFilter.click(function(){
		
		model.setSearchType("starter")
		model.getAllDishes()
	})

	view.mainFilter.click(function(){
		
		model.setSearchType("main dish")
		model.getAllDishes()
	})

	view.dessertFilter.click(function(){
		
		model.setSearchType("dessert")
		model.getAllDishes()
	})
}