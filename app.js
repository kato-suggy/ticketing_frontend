var app = angular.module("App",["main"]);

var main = angular.module("main",[]);

main.controller("mainController", function($scope, $http){

    //this is a promise
    cinemas = $http.get("http://localhost:8080/ticketing/cinemas").
        then(function(response, status, headers, config) {
            //debugger
            $scope.cinemas = response.data;
            //$scope.chosenCinema = $scope.cinemas[0];
    });

    //another promise that will hopefully get the movies from a cinema id
    movies = $http.get("http://localhost:8080/ticketing/movies?cinemaId=2"). //example cinema/2 instead of cinema/{id}
        then(function(response, status, headers, config) {
            //debugger
            $scope.movies = response.data;
            //$scope.chosenMovie = $scope.movies[0];
    });



    
});