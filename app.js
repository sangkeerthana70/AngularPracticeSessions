var family = angular.module("Family", []);
var app = angular.module("myApp", []); 
family.controller('familyController', function($scope) {
	console.log("In controller");
	$scope.names = ['Sangeetha', 'Keerthana', 'Anuradha', 'Senthil'];
});