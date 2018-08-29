angular.module("App",['main']);

angular.module("main",[]);

 angular.module("main").controller("mainController",function($scope){
    
    //example of using scope
    $scope.data = "that";

    //for semantic ui dropdown
    $('.ui.dropdown')
    .dropdown()
    ;

    //for semantic ui radio buttons
    $('.ui.radio.checkbox')
    .checkbox()
;
});