angular
  .module("app", [])
  .controller("DynamicController", function ($scope, $http) {
    // Fetch dynamic data from an API
    $http
      .get("https://api.example.com/data")
      .then(function (response) {
        $scope.dynamicData = response.data;
      })
      .catch(function (error) {
        console.log("Error fetching dynamic data:", error);
      });
  });
