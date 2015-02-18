var DinnerPrepview = function(container, model){
	this.prepTop = container.find("#prepTop");
	this.prepOverview = container.find("#prepOverview");

	this.prepTop.html("<h3>My Dinner: " + model.getNumberOfGuests() + " people</h3><a href='screenAfter.html'><button type='button' class='btn btn-default' id='backbutton'><span class='glyphicon glyphicon-chevron-left'></span>   Go back and edit dinner</button></a>")

	var menu = model.getFullMenu()

	var dinnerText = ""

	for dinner in menu:

		dinnerText = dinnerText + getPrepDishDiv(dinner, model)


	this.prepOverview.html(dinnerText)

	
}

var getPrepDishDiv = function(dish, model){
	var dishText = "<div class='row'><div class='col-md-4'>"
	dishText = dishText + "<img src='images/" + dish.image + "'/> </div>"
	dishText = dishText + "<div class='col-md-4'><h4><span>" + dish.name + "</span></h4></br> Lorem impsum dolor sit amet, consecteur adipsicing elit, sed do eisudmod tempor indcidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exertitation ullamco labris nisi ut aliquip."
	dishText = dishText + "</div><div class='col-md-4'><h4><span>PREPARATION</span></h4></br>" + dish.description 
	dishText = dishText + "</div></div>"

	return dishText
}