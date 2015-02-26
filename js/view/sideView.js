var SideView = function (container, model, mainController){
	model.addObserver(this)
	var observs = ["setNumberOfGuests", "addDishToMenu", "setPending"]


	var numberOfGuests = this.numberOfGuests = container.find("#numberOfGuests");
	var plusButton = this.plusButton = container.find("#plusGuest");
	var minusButton = this.minusButton = container.find("#minusGuest");
	var dishList = this.dishList = container.find("#dishList");
	var confirmButton = this.confirmButton = container.find("#confirm")

	var loadSideView = function(){
		
		numberOfGuests.html(model.getNumberOfGuests());
		
		dishList.html(generateDishList(model));

		var removeCtrls = []

		dishes = model.getFullMenu()
		for(i=0; i<dishes.length;i++){
			dish = dishes[i]
			if(dish){
				var dishID = "#remove" + dish.id
				removeCtrls = new RemoveController(dish.id, $(dishID), mainController)
			}
		}
	}

	this.update = function(updateString){
		if(observs.indexOf(updateString)>-1){
			loadSideView()
		}
	}

	loadSideView()
	

}


var generateDishList = function(model){
		dishes = model.getFullMenu()
		var listString = "<table class='table'><tr><th>Dish name</th><th>Cost</th><td></td></tr>"

		for(key in dishes){
			if(dishes[key]){
				listString = listString + "<tr><td>" + dishes[key].name + "</td><td>SEK " + model.getDishPrice(dishes[key].id) + "</td><td><span id='remove" + dish.id + "' class='glyphicon glyphicon-remove'></span></td></tr> "
			}
		}

		listString = listString + "<tr><td>Pending</td><td>SEK " + model.getPending() + "</td><td></td></tr><tr> <td></td><td>SEK " + model.getTotalMenuPrice() + "<td></td></tr></table>"
		return listString 
	}

