// public/js/controllers/InventoryCtrl.js
angular.module('InventoryCtrl', []).controller('InventoryController', ['$scope','RestApi',function($scope,RestApi) {
    
    $scope.inventoryList = function(message){
        var promise;
        if(message === ''){
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
        else {
            promise = {};
            promise = RestApi.getBooksByISBN(message);
            promise.then(function(payload) { 
              $scope.Books = payload.data;
            },
            function(errorPayload) {
              console.log('failure loading movie', errorPayload);
            });
            return promise;
        }
    }
}]);

