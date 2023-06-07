angular.module('myApp', [])
  .controller('MainController', function($scope, $timeout) {
    $scope.dynamicData = '';

    $timeout(function() {
      // Simulating fetching dynamic data from an API
      $scope.dynamicData = 'Hello, World!';
    }, 2000);
  });
