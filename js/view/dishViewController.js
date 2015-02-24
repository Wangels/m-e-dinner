var DishViewController = function(view, model, mainController){
	console.log("DishViewController")

	confirmDish = function(){
	//view.ingredientView.find("#confirmDish").click(function(){
		console.log("clicked confirmDish dishId =" + view.dishId)
		model.addDishToMenu(view.dishId);
	}

	//view.dishText.find("#dishBack").click(function(){

	//is there a way to make this not global???
	dishBack = function(){
		console.log("clicked dishBack");
		mainController.showSelectDish()
		
	}
}