var DishView = function (container, model, mainController){

	model.addObserver(this)
	var observs = ["setCurrentDish", "setNumberOfGuests", "getDish"]

	var dishText = this.dishText = container.find("#dishText");
	var ingredientView = this.ingredientView = container.find("#ingredientView");

	var load = function(updateMsg){

		var dish = model.getCurrentDish()

		if(updateMsg === "error"){

			errorString = "<p>There was an error when loading the dish</p><button type='button' class='btn btn-default' id='dishBack'><span class='glyphicon glyphicon-chevron-left'></span>   back to Select Dish</button>"

			dishText.html(errorString)
			ingredientView.html("")
			var dishBackController = new DishBackController(container.find("#dishBack"), mainController)

		}
		else if(dish){
			loadDishText(dish)
			loadIngredientView(dish)
		}
		else{
			dishText.html("Loading")
			ingredientView.html("Loading")
		}

	}

	var loadDishText = function(dish){
		dishString = "<h2>" + dish.Title + "</h2>" 
		dishString = dishString + "<img class='dishImg' src='" + dish.ImageURL + "'/>"
		dishString = dishString + "<p>" + dish.Description + "</p>"
		dishString = dishString + "<button type='button' class='btn btn-default' id='dishBack'><span class='glyphicon glyphicon-chevron-left'></span>   back to Select Dish</button>"
		dishString = dishString + "<h2>Preparation</h2><p>" + dish.Instructions + "</p>"

		dishText.html(dishString);
		
		var dishBackController = new DishBackController(container.find("#dishBack"), mainController)
	}

	var loadIngredientView = function(dish){
		guests = model.getNumberOfGuests()
		ingredientText = "<h4>Ingredients for " + guests + " people</h4>"
		ingredientText = ingredientText + "<table class='table'"

		for(key in dish.Ingredients){
			ingredient = dish.Ingredients[key]
			ingredientText = ingredientText + "<tr><td>" + Math.round(ingredient.MetricQuantity*guests) + " " + ingredient.MetricUnit + "</td><td>" + ingredient.Name + "</td><td>SEK</td><td>" + Math.round(ingredient.MetricQuantity*guests) + "</td></tr>"

		}

		ingredientText = ingredientText + "<tr><td/><td/><td>SEK</td><td>" + model.getDishPrice(dish) + "</td></tr></table>"
		ingredientText = ingredientText + "<button type='button' class='btn btn-default' id='confirmDish'>Confirm Dish</button>"

		ingredientView.html(ingredientText)

		var confirmButtonController = new ConfirmDishController(container.find("#confirmDish"), mainController)

	}


	this.update = function(updateObject){
		if(observs.indexOf(updateObject[0])>-1){
			/*
			if(updateObject[0] === "getDish"){
				dish = updateObject[1] //if we've loaded a dish from bigOven, we save it so we don't have to load it more times
			}
			else if(updateObject[0] === "setCurrentDish" && model.getCurrentDish()){
				dish = undefined //if we've updated current dish to undefined the saved dish is not current anymore
			}		*/	

			load(updateObject[1])

		}
	}

	load()
}
