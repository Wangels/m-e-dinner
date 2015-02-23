var SideView = function (container, model){
	model.addObserver(this)

	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var plusButton = this.plusButton = container.find("#plusGuest");
	var minusButton = this.minusButton = container.find("#minusGuest");
	var dishList = this.dishList = container.find("#dishList");
	var confirmButton = this.confirmButton = container.find("#confirm")

	var loadSideView = function(){
		console.log("loading sideView")
		numberOfGuests.html(model.getNumberOfGuests());
		console.log("updated number of guests")
		dishList.html(generateDishList(model));
		console.log("updated dishList")
	}

	this.update = function(obj){
		console.log("sideView updating")
		loadSideView()

	}

	loadSideView()
	model.addDishToMenu(100)

}


var generateDishList = function(model){
		dishes = model.getFullMenu()
		console.log(dishes[1])
		var listString = "<table class='table'><tr><th>Dish name</th><th>Cost</tr>"

		for(key in dishes){
			if(dishes[key]){
				listString = listString + "<tr><td>" + dishes[key].name + "</td><td>SEK " + model.getDishPrice(dishes[key].id) + "</td></tr> "
			}
		}

		listString = listString + "<tr><td>Pending</td><td> SEK 00</td></tr><tr> <td></td><td>SEK " + model.getTotalMenuPrice() + "</td></tr></table>"
		return listString
	}

