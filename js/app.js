$(function() {
	//We instantiate our model
	model = new DinnerModel();
	
	var mainView = new MainView($("#home"), model);
	var mainViewController = new MainViewController(mainView, model);

	//And create the needed controllers and views
	var sideView = new SideView($("#sideView"), model);
	var sideViewController = new SideViewController(sideView, model);

	var dishOverview = new DishOverview($("#dishOverview"), model);
	var dishOverviewController = new DishOverviewController(dishOverview, model);

	var dishView = new DishView($("#dishView"), model);
	var dishViewController = new DishViewController(dishView, model);

	var top = new TopView($("#top"), model);
	var dinnerOverview = new DinnerOverview($("#overviewContainer"), model);
	var dinnerPrepview = new DinnerPrepview($("#prepOverview"), model);
	
	$("#makeDinnerContainer").hide()
});