var DishView = function (container, model){
	this.dishText = container.find("#dishText");
	this.ingredientView = container.find("#ingredientView");


	this.dishText.html("Det här är vår dishtext");
	this.ingredientView.html("Det här är vår ingredientView")


}
