$(function() {
	//We instantiate our model
	model = new DinnerModel();
	
	//var mainView = new MainView($("#home"), model);
	var mainController = new MainController();

	$("#createDinnerButton").click(function(){
		console.log("clicked createDinnerButton, calling showSearch()")
		$("#homeContainer").hide();
		mainController.showSelectDish();
	});



	//And create the needed controllers and views
	var sideView = new SideView($("#sideView"), model);
	var sideViewController = new SideViewController(sideView, model, mainController);

	var dishOverview = new DishOverview($("#dishOverview"), model);
	var dishOverviewController = new DishOverviewController(dishOverview, model, mainController);

	var dishView = new DishView($("#dishView"), model);
	var dishViewController = new DishViewController(dishView, model, mainController);

	var top = new TopView($("#top"), model);
	var topViewController = new TopViewController(top, model, mainController);
	var dinnerOverview = new DinnerOverview($("#dinnerOverview"), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverview, model, mainController);

	var dinnerPrepview = new DinnerPrepview($("#prepOverview"), model);
	
	$("#makeDinnerContainer").hide()
});

var MainController = function(){

	this.showSelectDish = function(){
		//shows searchView - the view with all the dishes
		$("#makeDinnerContainer").show();
		$("#bigContainer").show()
		$("#selectDish").show()

		$("#dishBigView").hide();

		$("#dinnerOverview").hide()
		$("#prepOverviewContainer").hide()
		

	}

	this.showSideview = function(){
		//shows the sideview maybe not needed

	}

	this.showDishview = function(){
		//shows view of one dish
		console.log("in showDishview()")
		model.notifyObservers()
		$("#dishBigView").show();
		$("#selectDish").hide()
	}

	this.showDinnerOverview = function(){
		//shows the dinnerOverview (after confirm dish)
		console.log("showing dinnerOverview")
		$("#bigContainer").hide()
		//$("#dishBigView").hide();
		$("#dinnerOverview").show()
		$("#dinnerOverviewDiv").show()


	}

	this.showDinnerPrepview = function(){
		//shows the dinner preview (get to from print button)

		console.log("show dinnerPrepview")
		$("#dinnerOverviewDiv").hide()
		$("#prepOverviewContainer").show()
	}

}
