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
		//console.log("id=" + allDishes[0].id)

		if(allDishes){
			for(i=0; i<allDishes.length;i++){
				dish = allDishes[i]

				dishString = "<div class='col-md-3'><div class='dish' id='" + dish.RecipeID + "'>"
				dishString = dishString + "<img src='" + dish.ImageURL + "'/>"
				dishString = dishString + "<h4><span>" + dish.Title + "</span></h4>"
				dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
				dishString = dishString + "</div></div>"

				gridString = gridString + dishString 
			}

			dishGrid.html(gridString)

			//need to add listeners to be able to click on the dishes
			for(i=0; i<allDishes.length;i++){
				dish = allDishes[i]
				imgControllers[i] = new DishImageController(dish.RecipeID, mainController)
			}
		}
		else{
			dishGrid.html("loading")
		}


	}

	this.update = function(updateObject){
		//console.log("Updating dishOverview", updateObject[0])
		if(observs.indexOf(updateObject[0])>-1){
			console.log("Updating dishOverview")
			loadDishOverview(updateObject[1])
		}

	}

	loadDishOverview()
	model.getAllDishes(model.getSearchType, model.getSearchFilter)

}

var SearchView = function(container, model, mainController){
	var searchButton = this.searchButton = container.find("#searchButton")
	var allFilter = this.allFilter = container.find("#all")
	var starterFilter = this.starterFilter = container.find("#starter")
	var mainFilter = this.mainFilter = container.find("#main")
	var dessertFilter = this.dessertFilter = container.find("#dessert")
}