$(function() {
	//We instantiate our model
	model = new DinnerModel();
	
	//And create the needed controllers and views
	var sideView = new SideView($("#sideView"), model);
	//var sideView3 = new SideView3($("#sideView3"), model);
	var dishOverview = new DishOverview($("#dishOverview"), model);
	var dishView = new DishView($("#dishView"), model);
	var top = new TopView($("#top"), model);
	var dinnerOverview = new DinnerOverview($("#overviewContainer"), model);
	var dinnerPrepview = new DinnerPrepview($("#prepOverview"), model);
	

});