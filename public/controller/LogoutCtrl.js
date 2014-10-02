// public/js/controllers/MainCtrl.js
angular.module('LogoutCtrl', []).controller('LogoutController', function($location) {
    Session.clear();
    $location.path('/home');
});

