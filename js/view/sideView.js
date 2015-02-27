var SideView = function (container, model, mainController){
	model.addObserver(this)
	var observs = ["setNumberOfGuests", "addDishToMenu", "setPending", "removeDishFromMenu", "getDish"]


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
				var dishID = "#remove" + dish.RecipeID
				removeCtrls = new RemoveController(dish.RecipeID, $(dishID), model)
			}
		}
	}

	this.update = function(updateObject){
		console.log("SideView updating, " + updateObject)
		if(observs.indexOf(updateObject[0])>-1){
			loadSideView()
		}
	}

	loadSideView()
	

}


var generateDishList = function(model){
		dishes = model.getFullMenu()
		var listString = "<table class='table'><tr><th>Dish name</th><th>Cost</th><td></td></tr>"

		for(d in dishes){
			if(dishes[d]){
				listString = listString + "<tr><td>" + dishes[d].Title + "</td><td>SEK " + model.getDishPrice(dishes[d].RecipeID) + "</td><td><span id='remove" + dishes[d].RecipeID + "' class='glyphicon glyphicon-remove'></span></td></tr> "
			}
		}

		listString = listString + "<tr><td>Pending</td><td>SEK " + model.getPending() + "</td><td></td></tr><tr> <td></td><td>SEK " + model.getTotalMenuPrice() + "<td></td></tr></table>"
		return listString 
	}

