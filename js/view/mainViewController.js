var MainViewController = function(view, model){
	view.createButton.click(function(){
		console.log("in MainController")
		$("#homeContainer").hide();
		$("#makeDinnerContainer").show();
		$("#dishBigView").hide();

	})
}