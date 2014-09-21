// public/js/services/GeekService.js
angular.module('RestApiModule', []).factory('RestApi', ['$http', function($http) {

	return {
		// call to get all Books
		getBooks : function() {
			var promise = $http.get('/api/books');
			promise.then(function(){
				console.log(promise);
			});
			
			return promise;

		},

		// call to book by id
		getBooksById : function() {
			return $http.get('/api/books/:books_id');
		},

		// call to Book by ISBN
		getBooksByISBN : function(isbn) {
			var promise = $http.get('/api/isbn/'+isbn);
			promise.then(function(){
				console.log(promise);
			});
			
			return promise;
		},
		
		postBooks : function(book) {
			var promise = $http.post('/api/books/',book);
			promise.then(function(){
				console.log(promise);
			});
			
			return promise;
		},
	}
	
}]);

