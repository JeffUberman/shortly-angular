angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  angular.extend($scope, Links);
});
