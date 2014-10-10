// public/js/controllers/WishlistCtrl.js
angular.module('WishlistCtrl', []).controller('WishlistController', ['$scope','RestApi',function($scope,RestApi) {
	
	$scope.WishList = resultObj.wishlist;
	
}]);