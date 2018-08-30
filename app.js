var app = angular.module("App",["main"]);

var main = angular.module("main",[]);

main.controller("mainController", function($scope, $http){

    //this is a promise
    var cinema = $http.get("http://localhost:3000/cinema").
        then(function(response, status, headers, config) {
            //debugger
            $scope.cinemas = response.data;
    });
});