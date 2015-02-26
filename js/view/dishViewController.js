var DishViewController = function(view, model, mainController){

	/*confirmDish = function(){
	//view.ingredientView.find("#confirmDish").click(function(){
		model.addDishToMenu(model.getCurrentDish());
		model.setPending(0)
	}

	//view.dishText.find("#dishBack").click(function(){

	//is there a way to make this not global???
	dishBack = function(){
		mainController.showSelectDish()
		model.setPending(0)
		
	}*/
}

var ConfirmDishController = function(container, mainController){
	container.click(function(){
		model.addDishToMenu(model.getCurrentDish());
		model.setPending(0)
	})
}

var DishBackController = function(container, mainController){
	
	container.click(function(){
		mainController.showSelectDish()
		model.setPending(0)
	})
}