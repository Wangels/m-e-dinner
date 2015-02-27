var DishView = function (container, model, mainController){

	model.addObserver(this)
	var observs = ["setCurrentDish", "setNumberOfGuests"]

	var dishText = this.dishText = container.find("#dishText");
	var ingredientView = this.ingredientView = container.find("#ingredientView");

	var load = function(){

		//dish = this.dish = model.getDish($("#dishView").attr('rel'))
		currentDish = model.getCurrentDish()
		

		if(currentDish){
			dish = this.dish = model.getDish(currentDish)
			dishString = "<h2>" + dish.Title + "</h2>" 
			dishString = dishString + "<img class='dishImg' src='images/" + dish.ImageURL + "'/>"
			dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
			dishString = dishString + "<button type='button' class='btn btn-default' id='dishBack'><span class='glyphicon glyphicon-chevron-left'></span>   back to Select Dish</button>"
			dishString = dishString + "<h2>Preparation</h2><p>" + dish.Description + "</p>"

			dishText.html(dishString);

			guests = model.getNumberOfGuests()
			ingredientText = "<h4>Ingredients for " + guests + " people</h4>"
			ingredientText = ingredientText + "<table class='table'"

			for(key in dish.Ingredients){
				ingredient = dish.Ingredients[key]
				ingredientText = ingredientText + "<tr><td>" + ingredient.MetricQuantity*guests + " " + ingredient.MetricUnit + "</td><td>" + ingredient.Name + "</td><td>SEK</td><td>" + ingredient.MetricQuantity*guests + "</td></tr>"

			}

			ingredientText = ingredientText + "<tr><td/><td/><td>SEK</td><td>" + model.getDishPrice(dish.RecipeID) + "</td></tr></table>"
			ingredientText = ingredientText + "<button type='button' class='btn btn-default' id='confirmDish'>Confirm Dish</button>"

			ingredientView.html(ingredientText)

			var confirmButtonController = new ConfirmDishController(container.find("#confirmDish"), mainController)
			var dishBackController = new DishBackController(container.find("#dishBack"), mainController)
		}

	}

	this.update = function(updateObject){
		if(observs.indexOf(updateObject[0])>-1){
			//this.dishId = load() //bläääää :((
			load()
		}
	}

	load()
}
