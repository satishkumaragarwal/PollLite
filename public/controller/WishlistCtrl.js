// public/js/controllers/WishlistCtrl.js
angular.module('WishlistCtrl', []).controller('WishlistController', ['$scope','RestApi',function($scope,RestApi) {

    $scope.init = function(){
        var promise;
        promise = {};
        promise = RestApi.getBooks();
        promise.then(function(payload) { 
          $scope.Books = payload.data;
        },
        function(errorPayload) {
          console.log('failure loading movie', errorPayload);
        });
        return promise;
	}
}]);