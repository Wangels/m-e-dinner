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

		var listString = "<table class='table'><tr><th>Dish name</th><th>Cost</tr>"
		for(key in dishes){
			listString = listString + "<tr><td>" + dishes[key].name + "</td><td>SEK " + model.getDishPrice(dishes[key].id) + "</td></tr> "
		}
		listString = listString + "<tr><td>Pending</td><td> SEK 00</td></tr><tr> <td></td><td>SEK " + model.getTotalMenuPrice() + "</td></tr></table>"
		return listString
	}