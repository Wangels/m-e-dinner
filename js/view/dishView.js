var DishView = function (container, model){
	this.dishText = container.find("#dishText");
	this.ingredientView = container.find("#ingredientView");

	dish = model.getDish(100)

	dishString = "<h2>" + dish.name + "</h2>" 
	dishString = dishString + "<img class='dishImg' src='images/" + dish.image + "'/>"
	dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
	dishString = dishString + "<a href='index.html'><button type='button' class='btn btn-default btn-arrow-left'>back to Select Dish</button></a>"
	dishString = dishString + "<h2>Preparation</h2><p>" + dish.description + "</p>"

	this.dishText.html(dishString);


	ingredientText = "<h4>Ingredients for " + model.getNumberOfGuests() + " people</h4>"
	ingredientText = ingredientText + "<table class='table'"

	for(key in dish.ingredients){
		ingredient = dish.ingredients[key]
		ingredientText = ingredientText + "<tr><td>" + ingredient.quantity + " " + ingredient.unit + "</td><td>" + ingredient.name + "</td><td>SEK</td><td>" + ingredient.price + "</td></tr>"

	}

	ingredientText = ingredientText + "<tr><td/><td/><td>SEK</td><td>" + model.getDishPrice(dish.id) + "</td></tr></table>"
	ingredientText = ingredientText + "<a href='screenAfter.html'><button type='button' class='btn btn-default btn-arrow-left'>Confirm Dish</button></a>"

	this.ingredientView.html(ingredientText)


}
