// public/js/appRoutes.js
	angular.module('appRoutes', [])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		/*.when('/home', {
			templateUrl: 'home',
			controller: 'mainController'
		})*/
		
		.when('/detail', {
			templateUrl: '/views/details.html'	
		})

		.otherwise({ redirectTo : '/home'});

	$locationProvider.html5Mode(true);

}]);

