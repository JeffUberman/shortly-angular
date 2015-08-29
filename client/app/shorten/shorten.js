angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  angular.extend($scope, Links);
});
