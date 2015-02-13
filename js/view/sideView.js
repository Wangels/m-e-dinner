var SideView = function (container, model){
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.dishList = container.find("#dishList");


	this.numberOfGuests.html(model.getNumberOfGuests());


	this.dishList.html(generateDishList(model));

}


var generateDishList = function(model){
		dishes = model.getFullMenu()

		var listString = "Dish name cost<ul class ='list-group'>"
		for(key in dishes){
			listString = listString + "<li class='list-group-item'>" + dishes[key].name + " SEK " + model.getDishPrice(dishes[key].id) + "</li> "
		}
		listString = listString + "<li class='list-group-item'>Pending SEK 00 </li></ul> SEK " + model.getTotalMenuPrice()  
		return listString
	}