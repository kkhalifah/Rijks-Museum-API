var app = angular.module('rijksModule', []);
//add factr name
app.controller('rijksController', function($scope, $http){
console.log("controller is connected!");

  $scope.retrieveInfo = function(category) {
    $http.get('https://www.rijksmuseum.nl/api/en/collection?key=71raKXLi&format=json&q=' + category).then (function(response) {
      console.log(response.data.artObjects);
    //  putting scope into posts creates a variable on the scope directive can access
      $scope.posts = response.data.artObjects;

    });
      };
});
