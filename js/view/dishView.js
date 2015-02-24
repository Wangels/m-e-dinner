var DishView = function (container, model){

	model.addObserver(this)
	var dishText = this.dishText = container.find("#dishText");
	var ingredientView = this.ingredientView = container.find("#ingredientView");

	var load = function(){

		dish = this.dish = model.getDish($("#dishView").attr('rel'))
		

		dishString = "<h2>" + dish.name + "</h2>" 
		dishString = dishString + "<img class='dishImg' src='images/" + dish.image + "'/>"
		dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
		dishString = dishString + "<button onclick ='dishBack()' type='button' class='btn btn-default' id='dishBack'><span class='glyphicon glyphicon-chevron-left'></span>   back to Select Dish</button>"
		dishString = dishString + "<h2>Preparation</h2><p>" + dish.description + "</p>"

		dishText.html(dishString);

		guests = model.getNumberOfGuests()
		ingredientText = "<h4>Ingredients for " + guests + " people</h4>"
		ingredientText = ingredientText + "<table class='table'"

		for(key in dish.ingredients){
			ingredient = dish.ingredients[key]
			ingredientText = ingredientText + "<tr><td>" + ingredient.quantity*guests + " " + ingredient.unit + "</td><td>" + ingredient.name + "</td><td>SEK</td><td>" + ingredient.price*guests + "</td></tr>"

		}

		ingredientText = ingredientText + "<tr><td/><td/><td>SEK</td><td>" + model.getDishPrice(dish.id) + "</td></tr></table>"
		ingredientText = ingredientText + "<button onclick='confirmDish()' type='button' class='btn btn-default' id='confirmDish'>Confirm Dish</button>"

		ingredientView.html(ingredientText)

		return dish.id

	}

	this.update = function(obj){
		this.dishId = load() //bläääää :((
	}

	load()
}
