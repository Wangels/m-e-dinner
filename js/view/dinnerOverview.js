var DinnerOverview = function(container, model){
	this.overviewTop = container.find("#overviewTop");
	this.dinnerOverview = container.find("#dinnerOverview");

	this.overviewTop.html("<h3>My Dinner: " + model.getNumberOfGuests() + " people</h3><a href='screenAfter.html'><button type='button' class='btn btn-default' id='backbutton'><span class='glyphicon glyphicon-chevron-left'></span>   Go back and edit dinner</button></a>")

	model.addDishToMenu(1)
	model.addDishToMenu(100)
	model.addDishToMenu(200)

	var menu = model.getFullMenu()

	var dinnerOverviewText = "<div class='row'><div class='col-md-2'></div>"
	dinnerOverviewText = dinnerOverviewText + getDishDiv(menu[0], model) + getDishDiv(menu[1], model) + getDishDiv(menu[2], model)


	dinnerOverviewText = dinnerOverviewText + "<div class='col-md-2' id='total'>Total:<br/>" + model.getTotalMenuPrice() + " SEK</div></div>"

	dinnerOverviewText = dinnerOverviewText + "<div class='row'><div class='col-md-2'></div><div class='col-md-2' id='printdiv'></div><div class='col-md-2' id='printdiv'><a href='dinner_preparation.html'><button type='button' class='btn btn-default btn-lg' id='printbutton'>Print Full Recipe</button></a></div><div class='col-md-2' id=printdiv></div>"

	this.dinnerOverview.html(dinnerOverviewText)

	
}

var getDishDiv = function(dish, model){
	var dishText = "<div class='col-md-2'><div class='dish'>"
	dishText = dishText + "<img src='images/" + dish.image + "'/>"
	dishText = dishText + "<h4><span>" + dish.name + "</span></h4>"
	dishText = dishText + "<p class='dinnerView'>" + model.getDishPrice(dish.id) + " SEK</p>"
	dishText = dishText + "</div></div>"

	return dishText
}