var Vehicle = Backbone.Model.extend({
	idAttribute: 'registrationNumber',

	urlRoot: '/api/vehicles',

	start: function() {
		console.log(`Vehicle started.`);
	},

	validate: function(attrs) {
		if (!attrs.registrationNumber) {
			return `A vehicle registration number is required.`;
		}
	}
});

var Car = Vehicle.extend({
	start: function() {
		console.log(`Car with registration number ${this.get('registrationNumber')} started.`);
	}
});

var blueCar = new Car({
	registrationNumber: 'XLI887',
	color: 'Blue'
});

blueCar.unset('registrationNumber');

blueCar.isValid();

blueCar.set('registrationNumber', 'XLI887');

blueCar.start();







// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*var Vehicle = Backbone.Model.extend({

	idAttribute: "registrationNumber",

	urlRoot: "/api/vehicles",

	validate: function(attrs){
		if (!attrs.registrationNumber)
			return "Vehicle is not valid.";
	},

	start: function(){
		console.log("Vehicle started.");
	}
});

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
});

var car = new Car({
	registrationNumber: "XLI887",
	color: "Blue"
});

car.unset("registrationNumber");

if (!car.isValid())
	console.log(car.validationError);

car.set("registrationNumber", "XLI887");

if (!car.isValid())
	console.log(car.validationError);

car.start();
*/