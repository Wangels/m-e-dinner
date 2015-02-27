//DinnerModel Object constructor
var DinnerModel = function() {

	var api_key = 'dvxSUK163SzdpwzA1C825d98lxc5YmU1'
 
	var numberOfGuests = 2
	var menu = {starter:0, main:0, dessert:0}
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
			console.log("In notifyObservers, obj= " + obj)
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
	

	this.setPending = function(id){
		if(id === 0){
			pendingPrice = 0
		}
		else{
			
			pendingPrice = this.getDishPrice(id)
		}
		
		this.notifyObservers(["setPending"])
	}

	this.getPending = function(){
		return pendingPrice
	}


	this.getCurrentDish = function(){
		return currentDish
	}

	this.setCurrentDish = function(id){
		currentDish = id
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

		if(menu.starter != 0){
			this.getDish(menu.starter)
		}
		if(menu.main != 0){
			this.getDish(menu.main)
		}
		if(menu.dessert != 0){
			this.getDish(menu.dessert)
		}

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
	this.getDishPrice = function(id){
		var ingredientList = this.getDish(id).ingredients

		var totalPrice = 0

		for(key in ingredientList){
			totalPrice = totalPrice + ingredientList[key].price
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
	this.addDishToMenu = function(id) {

		dishType = this.getDish(id).type

		if(dishType == "starter"){
			menu.starter = id
		}
		else if(dishType == "main dish"){
			menu.main = id
		}
		else if(dishType == "dessert"){
			menu.dessert = id
			
		}

		this.notifyObservers(["addDishToMenu"])

	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		for(key in menu){
			if(menu[key] == id){
				menu[key] = 0
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
				console.log("success", data.Results)
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
		if(id =! 0){
		  	var url = 'http://api.bigoven.com/recipe/' + id + '?api_key=' + api_key
			$.ajax({
				type: 'GET',
				url: url,
				dataType: 'json',
				success: function(data){
					console.log("success", data)
					this.notifyObservers(["getDish", data])
					//return data.Results
				}.bind(this), //to get the right context
				error: function(xhr, status, error){
					console.error("gick dåligt!");
				}
			})
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}