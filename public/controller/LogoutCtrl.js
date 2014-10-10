// public/js/controllers/MainCtrl.js
angular.module('LogoutCtrl', [])
.controller('LogoutController', ['$window','$http', function($window,$http) {
    $window.location.href = '/logout';
}]);

