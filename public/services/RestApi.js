// public/js/services/GeekService.js
angular.module('RestApiModule', []).factory('RestApi', ['$http', function($http) {

	return {
		// call to get all Books
		getBooks : function() {
			return $http.get('/api/books');
		},

		// call to book by id
		getBooksById : function() {
			return $http.get('/api/books/:books_id');
		},

		// call to Book by ISBN
		getBooksByISBN : function(isbn) {
			return $http.get('/api/isbn/'+isbn);
		},
		
		postWishlist : function(book) {
			return $http.post('/api/wishlist/',book);
		},
		
		postInventory : function(book) {
			return $http.post('/api/inventory/',book);
		},
	}
	
}]);

