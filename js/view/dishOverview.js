var DishOverview = function(container, model){
	this.dishGrid = container.find("#dishGrid");

	var gridString = ""
	var dishString = ""
	var allDishes = model.getDishes()

	for(key in allDishes){
		dish = allDishes[key]

		dishString = "<div class='col-md-3'><a href='meatballs.html'><div class='dish'>"
		dishString = dishString + "<img src='images/" + dish.image + "'/>"
		dishString = dishString + "<h4><span>" + dish.name + "</span></h4>"
		dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
		dishString = dishString + "</div></a></div>"
		
		gridString = gridString + dishString 
	}

	this.dishGrid.html(gridString)
}