// public/js/controllers/InventoryCtrl.js
angular.module('InventoryCtrl', []).controller('InventoryController', ['$scope','RestApi',function($scope,RestApi) {

  //console.log('hello');
	$scope.inventoryInit = function(){
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