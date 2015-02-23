var DishViewController = function(view, model, mainController){
	console.log("DishViewController")

	console.log(view.ingredientView.find("#confirmDish"))
	view.ingredientView.find("#confirmDish").click(function(){
		console.log("clicked confirmDish")
		model.addDishToMenu(view.dish.id);
	})

	view.dishText.find("#dishBack").click(function(){
		console.log("clicked dishBack");
		mainController.showSelectDish()
		
	})
}