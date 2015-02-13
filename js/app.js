$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var sideView = new SideView($("#sideView"), model);
	var dishOverview = new DishOverview($("#dishOverview"), model);

});