angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink($scope.link).then(function() {
      $location.path('/');
    })
    .catch(function(error) {
      console.log(error);
    });
  };
});
