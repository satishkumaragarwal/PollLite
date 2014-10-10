// public/js/appRoutes.js
	angular.module('appRoutes', [])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/search', {
			templateUrl: '/views/search.html',
			controller:'SearchController'
		})
		
		.when('/wishlist', {
			templateUrl: '/views/wishlist.html',
			controller:'WishlistController'
		})
		
		.when('/inventory', {
			templateUrl: '/views/inventory.html',
			controller:'InventoryController'
		})
		
		.when('/logout', {
			templateUrl: '/views/logout.html',
			controller: 'LogoutController'
		})

	$locationProvider.html5Mode(true);

}]);

