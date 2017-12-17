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

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});

var Car = Vehicle.extend({
	start: function() {
		console.log(`Car with registration number ${this.get('registrationNumber')} started.`);
	}
});

var vehicles = new Vehicles([
	new Car({registrationNumber: 'XLI887', color: 'Blue'}),
	new Car({registrationNumber: 'ZNP123', color: 'Blue'}),
	new Car({registrationNumber: 'XUV456', color: 'Gray'})
]);

var blueCars = vehicles.where({color: 'Blue'});
console.log(blueCars);

var XLI887 = vehicles.findWhere({registrationNumber: 'XLI887'});
console.log(XLI887);

vehicles.remove({id: 'XLI887'});

var vehiclesArray = vehicles.toJSON();
_.each(vehiclesArray, function(vehicle) {
  console.log(vehicle);
});


/*
var Vehicle = Backbone.Model.extend({

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

var Vehicles = Backbone.Collection.extend({
	Model: Vehicle
});

var Car = Vehicle.extend({
	start: function(){
		console.log("Car with registration number " + this.get("registrationNumber") + " started.");
	}
});

var vehicles = new Vehicles([
	new Car({ registrationNumber: "XLI887", color: "Blue" }),
	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
	new Car({ registrationNumber: "XUV456", color: "Gray" })
]);

var blueCars = vehicles.where({ color: "Blue" });
console.log("Blue cars", blueCars);

var carXLI887 = vehicles.findWhere({ registrationNumber: "XLI887" });
console.log("Car with registration number XLI887", carXLI887);

vehicles.remove(carXLI887);

console.log("Vehicles as JSON", vehicles.toJSON());
*/