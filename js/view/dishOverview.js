var DishOverview = function(container, model, mainController){

	model.addObserver(this)
	
	var observs = ["setSearchFilter", "setSearchType", "getAllDishes"] //array of what updates this view is interested in, if notifyObservers() passes one of these we 

	var dishGrid = this.dishGrid = container.find("#dishGrid");


	var loadDishOverview = function(allDishes){

		var gridString = ""
		var dishString = ""
		//var allDishes = model.getAllDishes(model.getSearchType, model.getSearchFilter)
		
		//var allDishes = model.getAllDishes(model.getSearchType(), model.getSearchFilter())
		
		var imgControllers = []

		if(allDishes === "error"){
			dishGrid.html("There was an error when trying to search")
		}
		else if(allDishes){
			for(i=0; i<allDishes.length;i++){
				dish = allDishes[i]

				dishString = "<div class='col-md-3'><div class='dish' id='" + dish.RecipeID + "'>"
				dishString = dishString + "<img src='" + dish.ImageURL + "'/>"
				dishString = dishString + "<h4><span>" + dish.Title + "</span></h4>"
				//dishString = dishString + "<p>" + dish.Description + "</p>"
				dishString = dishString + "</div></div>"

				gridString = gridString + dishString 
			}

			dishGrid.html(gridString)

			//need to add listeners to be able to click on the dishes
			for(i=0; i<allDishes.length;i++){
				dish = allDishes[i]
				imgControllers[i] = new DishImageController(dish.RecipeID, mainController)
			}

			if(allDishes.length == 0){
				dishGrid.html("No results")
			}
		}
		else{
			dishGrid.html("loading")
		}


	}

	this.update = function(updateObject){
		if(observs.indexOf(updateObject[0])>-1){
			loadDishOverview(updateObject[1])
		}

	}

	loadDishOverview()
	model.getAllDishes()

}

var SearchView = function(container, model, mainController){
	var searchButton = this.searchButton = container.find("#searchButton")
	var searchText = this.searchText = container.find("#searchText")
	var allFilter = this.allFilter = container.find("#all")
	var starterFilter = this.starterFilter = container.find("#starter")
	var mainFilter = this.mainFilter = container.find("#main")
	var dessertFilter = this.dessertFilter = container.find("#dessert")
}