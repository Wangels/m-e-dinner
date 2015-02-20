var DishOverviewController = function(view, model){
	view.dishGrid.find(".dish").click(function(){
		console.log("clicked dish" + this.id)

		$("#dishView").attr('rel', this.id)
		$("#selectDish").hide()
		$("#dishBigView").show()

		model.notifyObservers()


	})
}