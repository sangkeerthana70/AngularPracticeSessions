var family = angular.module("Family", []);
var app = angular.module("myApp", []); 
family.controller('familyController', function($scope) {
	//console.log("In controller");
	$scope.currentName = "undefined";
	$scope.familyDetails = [//familyDetails[0].propertyname
	{name: "Sangeetha",
	 age: 9,
	 gender: "female",
	 candyCount: 10
	}, 
	{name: "Keerthana",
	 age: 15,
	 gender: "female",
	 candyCount: 9
	 }, 
	{name: "Anuradha",
	 age: 40,
	 gender: "female",
	 candyCount: 1
	 }, 
	{name: "Senthil",
	 age: 47,
	 gender: "male",
	 candyCount: 3
	 }		
	]
	$scope.setName = function(name) {
		//console.log("In setName");
		$scope.currentName = name;
	}
});