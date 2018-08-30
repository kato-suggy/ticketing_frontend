angular.module("App",["main"]);

var main = angular.module("main",[]);

main.controller("mainController", function($scope, $http){

    var cinema = $http.get("http://localhost:3000/cinema").
        then(function(response, status, headers, config) {
            debugger
            $scope.cinema = response.data;
    });

    //for semantic ui dropdown
    $('.ui.dropdown')
    .dropdown()
    ;

    //for semantic ui radio buttons
    $('.ui.radio.checkbox')
    .checkbox()
    ;
});