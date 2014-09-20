// public/js/appRoutes.js
	angular.module('appRoutes', [])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/search', {
			templateUrl: '/views/search.html'	
		})
		
		.when('/wishlist', {
			templateUrl: '/views/wishlist.html'	
		})
		
		.when('/inventory', {
			templateUrl: '/views/inventory.html',
			controller:'InventoryController'
		})
		
		.when('/logout', {
			templateUrl: '/views/logout.html'	
		})

		.otherwise({ redirectTo : '/home'});

	$locationProvider.html5Mode(true);

}]);

