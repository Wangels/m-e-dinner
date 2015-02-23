var DishOverviewController = function(view, model, mainController){
	view.dishGrid.find(".dish").click(function(){
		console.log("clicked dish" + this.id)

		$("#dishView").attr('rel', this.id)
		mainController.showDishview()

	})
}