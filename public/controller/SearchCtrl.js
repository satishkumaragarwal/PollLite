// public/js/controllers/SearchCtrl.js
angular.module('SearchCtrl', []).controller('SearchController', ['$scope','RestApi',function($scope,RestApi) {
    
    $scope.clickWishList = function(book){
        for(var bookObj=0; bookObj<$scope.resultObj.wishlist.length;bookObj++){
            if($scope.resultObj.wishlist[bookObj].id == book.id){
                alert('Book exists in Wishlist!');
                return;
            }
        }
        var promise = RestApi.postWishlist(book);
        promise.then(function(payload) { 
            $scope.resultObj.wishlist.push(book);
            alert(payload.data.message);
        },
        function(errorPayload) {
          alert('failure loading Wishlist', errorPayload);
        });
        return promise;
    }
    
    $scope.clickInventory = function(book){
        for(var bookObj=0; bookObj<$scope.resultObj.inventory.length;bookObj++){
            if($scope.resultObj.inventory[bookObj].id == book.id){
                alert('Book exists in Inventory!');
                return;
            }
        }
        var promise = RestApi.postInventory(book);
        promise.then(function(payload) {
            $scope.resultObj.inventory.push(book);
            alert(payload.data.message);
        },
        function(errorPayload) {
          alert('failure loading Inventory', errorPayload);
        });
        return promise;
    }
    
    $scope.searchList = function(message){
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

