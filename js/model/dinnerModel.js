//DinnerModel Object constructor
var DinnerModel = function() {

	var api_key = 'dvxSUK163SzdpwzA1C825d98lxc5YmU1'
 
	var numberOfGuests = 2
	//var menu = {starter:0, main:0, dessert:0}
	var menu = []
	var pendingPrice = 0
	this._observers = []
	var searchType = undefined
	var searchFilter = undefined

	var currentDish = undefined

	this.addObserver = function(observer){
		//adds new observer to the observer array
		this._observers.push(observer)
	}


	this.notifyObservers = function(obj){
		if(this._observers){
			//calls update method on all observers in the observer array
			//console.log("In notifyObservers, obj= " + obj)
			for(var i=0;i<this._observers.length;i++){
				this._observers[i].update(obj)
			}
		}
	}

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num
		this.notifyObservers(["setNumberOfGuests"])
	}
	// should return 
	this.getNumberOfGuests = function() {
		return numberOfGuests
	}


	this.getSearchType = function(){
		return searchType
	}

	this.setSearchType = function(type){
		searchType = type
		this.notifyObservers(["setSearchType"])
		//console.log(searchType)
	}

	this.getSearchFilter = function(){
		return searchFilter
	}

	this.setSearchFilter = function(filter){
		searchFilter = filter
		//console.log("searchFilter =" + searchFilter)
		this.notifyObservers(["setSearchFilter"])
	}
	

	this.setPending = function(dishObject){
		if(!dishObject){
			pendingPrice = 0
		}
		else{
			
			pendingPrice = this.getDishPrice(dishObject)
		}
		
		this.notifyObservers(["setPending"])
	}

	this.getPending = function(){
		return pendingPrice
	}


	this.getCurrentDish = function(){
		return currentDish
	}

	this.setCurrentDish = function(dishObject){
		currentDish = dishObject
		console.log("setting CurrentDish")
		this.notifyObservers(["setCurrentDish"])
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(dishType) {


		if(dishType == "starter"){
			return this.getDish(menu.starter)
		}
		else if(dishType == "main"){
			return this.getDish(menu.main)
		}
		else if(dishType == "dessert"){
			return this.getDish(menu.dessert)
		}
		
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {

		return menu
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredientList = []
		var dishList = this.getFullMenu()

		for(key in dishList){
			//ingredientList = ingredientList.concat(dishes[key].ingredients)
			for(ingredientKey in dishList[key].Ingredients){
				ingredientList.push(dishList[key].Ingredients[ingredientKey])
			}
		}

		return ingredientList
	}

	//returns the price for a single dish
	this.getDishPrice = function(dishObject){
		var ingredientList = dishObject.Ingredients

		var totalPrice = 0

		for(key in ingredientList){
			totalPrice = totalPrice + ingredientList[key].MetricQuantity
		}

		totalPrice = totalPrice*numberOfGuests
		return totalPrice


	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var ingredientList = this.getAllIngredients()
		var totalPrice = 0

		for(key in ingredientList){
			totalPrice = totalPrice + ingredientList[key].price
		}

		totalPrice = totalPrice*numberOfGuests + pendingPrice
		return totalPrice
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(dishObject) {

		/*dishType = this.getDish(id).Category

		if(dishType == "Starter"){
			menu.starter = id
		}
		else if(dishType == "Main Dish"){
			menu.main = id
		}
		else if(dishType == "Dessert"){
			menu.dessert = id
			
		}*/

		console.log("Add dish to menu, dishObject = ", dishObject.RecipeID)

		var notInMenu = true

		for(var i=0; i<menu.length;i++){
			if(menu[i].RecipeID === dishObject.RecipeID){
				notInMenu = false
			}
			
		}
		if(notInMenu){

				console.log("Really adding dish to menu")
				menu.push(dishObject)
				this.notifyObservers(["addDishToMenu"])
			}

	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for(key in menu){
			if(menu[key].RecipeID === id){
				menu.splice(key, 1)
			}
		}

		this.notifyObservers(["removeDishFromMenu"])
	}

	this.getDishes = function(){
		return dishes
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	
	this.getAllDishes = function(type, filter){
		var url = 'http://api.bigoven.com/recipes?pg=1&rpp=10&api_key=' + api_key
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: function(data){
				//console.log("success", data.Results)
				this.notifyObservers(["getAllDishes", data.Results])
				//return data.Results
			}.bind(this), //to get the right context
			error: function(xhr, status, error){
				console.error("gick dåligt!");
			}
		})
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  	var url = 'http://api.bigoven.com/recipe/' + id + '?api_key=' + api_key
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'json',
			success: function(data){
				console.log("success", data)
				this.setCurrentDish(data)
				this.setPending(data)
				//this.notifyObservers(["getDish", data])
				//return data.Results
			}.bind(this), //to get the right context
			error: function(xhr, status, error){
				console.error("gick dåligt!");
			}
		})
	}

}