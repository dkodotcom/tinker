

function getReceipt() {
	text1 = "<h3>You Ordered:</h3>";
  runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("Size");
	for (var s = 0; s < sizeArray.length; s++) {
			if(sizeArray[s].checked) {
				var selectedSize = sizeArray[s].value;
				text1 = text1+selectedSize+"<br>";
			}
	};

	if (selectedSize === 'Personal Pizza') {
		sizeTotal = 6;
	} else if (selectedSize === 'Medium Pizza') {
		sizeTotal = 10;
	} else if (selectedSize === 'Large Pizza') {
		sizeTotal = 14;
	} else if (selectedSize === 'Extra Large Pizza') {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	getMeat();
	getVeggies();
	getCheese();
	getSauce();
	getCrust();
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("Size text1:"+text1);
	console.log("Subtotal: $"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};

function getMeat() {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("Meats");
	for (var m = 0; m < meatArray.length; m++) {
		if (meatArray[m].checked) {
			selectedMeat.push(meatArray[m].value);
			console.log("selected meats ("+meatArray[m].value+")");
			text1 = text1+meatArray[m].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	/*document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";*/
};

function getVeggies() {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("Veggies");
	for (var v = 0; v < vegArray.length; v++) {
		if (vegArray[v].checked) {
			selectedVeg.push(vegArray[v].value);
			console.log("selected veggies ("+vegArray[v].value+")");
			text1 = text1+vegArray[v].value+"<br>";
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);
	console.log("total selected veg items: "+vegCount);
	console.log(vegCount+" veg - 1 free veg ="+"$"+vegTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
};

function getCheese() {
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("Cheese");
	for (var c = 0; c < cheeseArray.length; c++) {
		if (cheeseArray[c].checked) {
			if (c == 2) {
				runningTotal += 3
			}
		}
	}
	runningTotal = (runningTotal + cheeseTotal);
	console.log("total selected cheese items: "+selectedCheese);
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
};

function getSauce() {
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("Sauce");
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			selectedSauce.push(sauceArray[s].value);
			console.log("selected sauce ("+sauceArray[s].value+")");
			text1 = text1+sauceArray[s].value+"<br>";
		}
	}
	runningTotal = (runningTotal + sauceTotal);
	console.log("selected sauce: "+selectedSauce);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
};

function getCrust() {
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("Crust");
	for (var cr = 0; cr < crustArray.length; cr++) {
		if (crustArray[cr].checked) {
			if (cr == 2) {
				runningTotal += 3
			}
		}
	}
	var crustCount = selectedCrust.length;
	if (selectedCrust === 'Plain Crust') {
		crustTotal = 0;
	} else if (selectedCrust === 'Garlic Butter Crust') {
		crustTotal = 0;
	} else if (selectedCrust === 'Cheese Stuffed Crust') {
		crustTotal = 3;
	} else if (selectedCrust === 'Spicy Crust') {
		crustTotal = 0;
	} else if (selectedCrust === 'House Special Crust') {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	console.log("selected crust: "+selectedCrust);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
};


