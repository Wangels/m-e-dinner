var DishOverview = function(container, model){

	model.addObserver(this)

	var dishGrid = this.dishGrid = container.find("#dishGrid");

	var loadDishOverview = function(){

		var gridString = ""
		var dishString = ""
		//var allDishes = model.getAllDishes(model.getSearchType, model.getSearchFilter)
		if(model.getSearchType() === "all"){
			var allDishes = model.getDishes()
		}
		else{
			var allDishes = model.getAllDishes(model.getSearchType(), model.getSearchFilter())
		}

		console.log("id=" + allDishes[0].id)


		for(i=0; i<allDishes.length;i++){
			dish = allDishes[i]

			dishString = "<div class='col-md-3'><div class='dish' id='" + dish.id + "'>"
			dishString = dishString + "<img src='images/" + dish.image + "'/>"
			dishString = dishString + "<h4><span>" + dish.name + "</span></h4>"
			dishString = dishString + "<p>Lorem ipsum balla enuhsn euhsne uhsen</p>"
			dishString = dishString + "</div></div>"
			
			gridString = gridString + dishString 
		}

		dishGrid.html(gridString)

	}

	this.update = function(obj){
		loadDishOverview()
	}

	loadDishOverview()
}