$(function() {
	//We instantiate our model
	model = new DinnerModel();

	$("#makeDinnerContainer").hide()
	
	//var mainView = new MainView($("#home"), model);
	var mainController = new MainController();

	$("#createDinnerButton").click(function(){
		$("#homeContainer").hide();
		mainController.showSelectDish();
	});



	//And create the needed controllers and views
	var sideView = new SideView($("#sideView"), model, mainController);
	var sideViewController = new SideViewController(sideView, model, mainController);

	var dishOverview = new DishOverview($("#dishOverview"), model, mainController);
	//var dishOverviewController = new DishOverviewController(dishOverview, model, mainController);

	var dishView = new DishView($("#dishView"), model, mainController);
	//var dishViewController = new DishViewController(dishView, model, mainController);

	var top = new TopView($("#top"), model, mainController);
	//var topViewController = new TopViewController(top, model, mainController);
	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model, mainController);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverview, model, mainController);

	var dinnerPrepview = new DinnerPrepview($("#prepOverview"), model);

	var searchView = new SearchView($("#search"), model, mainController)
	var searchController = new SearchController(searchView, model, mainController);
	
	
});

var MainController = function(){

	this.showSelectDish = function(){
		//shows searchView - the view with all the dishes

		$("#dishBigView").hide();

		$("#dinnerOverview").hide()
		$("#prepOverviewContainer").hide()

		$("#makeDinnerContainer").show();
		$("#bigContainer").show()
		$("#selectDish").show()
		
	}

	this.showSideview = function(){
		//shows the sideview maybe not needed

	}

	this.showDishview = function(id){
		//shows view of one dish
		
		model.setPending(id)
		model.setCurrentDish(id)

		//in order to get the proper dish in the view we have to update it. 
		model.notifyObservers()
		$("#dishBigView").show();
		$("#selectDish").hide()
	}

	this.showDinnerOverview = function(){
		//shows the dinnerOverview (after confirm dish)
		
		$("#bigContainer").hide()
		//$("#dishBigView").hide();
		$("#dinnerOverview").show()
		$("#dinnerOverviewDiv").show()


	}

	this.showDinnerPrepview = function(){
		//shows the dinner preview (get to from print button)

		$("#dinnerOverviewDiv").hide()
		$("#prepOverviewContainer").show()
	}

}
