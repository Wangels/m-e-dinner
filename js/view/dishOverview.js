var DishOverview = function(container, model, mainController){

	model.addObserver(this)

	var observs = ["setSearchFilter", "setSearchType"] //array of what updates this view is interested in, if notifyObservers() passes one of these we 

	var dishGrid = this.dishGrid = container.find("#dishGrid");

	var loadDishOverview = function(){

		var gridString = ""
		var dishString = ""
		//var allDishes = model.getAllDishes(model.getSearchType, model.getSearchFilter)
		
		var allDishes = model.getAllDishes(model.getSearchType(), model.getSearchFilter())
		
		var imgControllers = []
		//console.log("id=" + allDishes[0].id)


		for(i=0; i<allDishes.length;i++){
			dish = allDishes[i]

			dishString = "<div class='col-md-3'><div class='dish' id='" + dish.id + "'>"
			dishString = dishString + "<img src='images/" + dish.image + "'/>"
			dishString = dishString + "<h4><span>" + dish.name + "</span></h4>"
			dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
			dishString = dishString + "</div></div>"

			gridString = gridString + dishString 
		}

		dishGrid.html(gridString)

		//need to add listeners to be able to click on the dishes
		for(i=0; i<allDishes.length;i++){
			dish = allDishes[i]
			imgControllers[i] = new DishImageController(dish.id, mainController)
		}


	}

	this.update = function(updateString){
		if(observs.indexOf(updateString)>-1){
			loadDishOverview()
		}

	}

	loadDishOverview()
}