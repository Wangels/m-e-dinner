var DishViewController = function(view, model){
	console.log("DishViewController")

	view.ingredientView.find("#confirmDish").click(function(){
		console.log("clicked confirmDish")
		model.addDishToMenu(view.dish.id);
	})

	view.dishText.find("#dishBack").click(function(){
		console.log("clicked dishBack");
		$("#dishBigView").hide()
		$("#selectDish").show()
	})
}