var DishOverview = function(container, model){

	//model.addObserver(this)

	var dishGrid = this.dishGrid = container.find("#dishGrid");

	var loadDishOverview = function(){

		var gridString = ""
		var dishString = ""
		var allDishes = model.getDishes()

		for(key in allDishes){
			dish = allDishes[key]

			dishString = "<div class='col-md-3'><div class='dish' id='" + dish.id + "'>"
			dishString = dishString + "<img src='images/" + dish.image + "'/>"
			dishString = dishString + "<h4><span>" + dish.name + "</span></h4>"
			dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
			dishString = dishString + "</div></div>"
			
			gridString = gridString + dishString 
		}

		dishGrid.html(gridString)

	}

	this.update = function(obj){
		loadDishOverview()
	}

	loadDishOverview()
}