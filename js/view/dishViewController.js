var DishViewController = function(view, model, mainController){

	confirmDish = function(){
	//view.ingredientView.find("#confirmDish").click(function(){
		model.addDishToMenu(view.dishId);
		model.setPending(0)
	}

	//view.dishText.find("#dishBack").click(function(){

	//is there a way to make this not global???
	dishBack = function(){
		mainController.showSelectDish()
		model.setPending(0)
		
	}
}