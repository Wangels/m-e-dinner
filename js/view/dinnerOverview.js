var DinnerOverview = function(container, model, mainController){
	model.addObserver(this)
	var observs = ["addDishToMenu", "setNumberOfGuests"]
	var dinnerOverview = this.dinnerOverview = container.find("#dinnerOverviewDiv");

	var loadDinnerOverview = function(obj){
	
		var menu = model.getFullMenu()

		var dinnerOverviewText = "<div class='row'><div class='col-md-2'></div>"
		//dinnerOverviewText = dinnerOverviewText + getDishDiv(menu[0], model) + getDishDiv(menu[1], model) + getDishDiv(menu[2], model)

		for(key in menu){
			if(!(menu[key] === 0)){
				dinnerOverviewText = dinnerOverviewText + getDishDiv(menu[key], model)
			}
			else{
				dinnerOverviewText = dinnerOverviewText + "<div class='col-md-2'></div>"
			}
		}
	
		dinnerOverviewText = dinnerOverviewText + "<div class='col-md-2' id='total'>Total:<br/>" + model.getTotalMenuPrice() + " SEK</div></div>"

		dinnerOverviewText = dinnerOverviewText + "<div class='row'><div class='col-md-2'></div><div class='col-md-2' id='printdiv'></div><div class='col-md-2' id='printdiv'><button type='button' class='btn btn-default btn-lg' id='printbutton'>Print Full Recipe</button></div><div class='col-md-2' id=printdiv></div>"

		dinnerOverview.html(dinnerOverviewText)
		var printController = new PrintController(container.find("#printbutton"), mainController)
	}

	this.update = function(updateObject){
		if(observs.indexOf(updateObject[0])>-1){
			loadDinnerOverview()
		}
	}

	loadDinnerOverview()
	
}

var getDishDiv = function(dish, model){
	console.log("Dishdiv, dish= " + dish.RecipeID)
	var dishText = "<div class='col-md-2'><div class='dish'>"
	dishText = dishText + "<img src='" + dish.ImageURL + "'/>"
	dishText = dishText + "<h4><span>" + dish.Title + "</span></h4>"
	dishText = dishText + "<p class='dinnerView'>" + model.getDishPrice(dish) + " SEK</p>"
	dishText = dishText + "</div></div>"

	return dishText
}

var TopView = function(container, model, mainController){

	model.addObserver(this)
	observs = ["setNumberOfGuests"]

	var loadTop = function(obj){

		container.html("<h3>My Dinner: " + model.getNumberOfGuests() + " people</h3><button type='button' class='btn btn-default' id='backbutton'><span class='glyphicon glyphicon-chevron-left'></span>   Go back and edit dinner</button>")
		var goBackController = new GoBackController(container.find("#backbutton"), mainController)
	}

	this.update = function(updateObject){
		if(observs.indexOf(updateObject[0])>-1){
			loadTop()
		}
	}

	loadTop()
}

var DinnerPrepview = function(container, model){
	model.addObserver(this)
	var observs = ["addDishToMenu"]

	var loadDinnerPrepview = function(obj){

		var menu = model.getFullMenu()

		var dinnerText = ""

		for(dinnerKey in menu){
			if(!(menu[dinnerKey] === 0)){
				dinnerText = dinnerText + getPrepDishDiv(menu[dinnerKey], model)
			}
		}

		container.html(dinnerText)
	}

	this.update = function(updateObject){
		if(observs.indexOf(updateObject[0])>-1){
			loadDinnerPrepview()
		}
	}

	loadDinnerPrepview()
}

var getPrepDishDiv = function(dish, model){
	var dishText = "<div class='row' id='dishPrep'><div class='col-md-6'><div class='dishDescription'>"
	dishText = dishText + "<img src='" + dish.ImageURL + "'/>"
	dishText = dishText + "<h4><span>" + dish.Title + "</span></h4></br><p>" + dish.Description + "</p>"
	dishText = dishText + "</div></div><div class='col-md-6'><h5><span>Preparation<span></h5></br><p>" + dish.Instructions + "</p>"
	dishText = dishText + "</div></div>"

	return dishText
}
