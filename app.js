var app = angular.module("App",["main"]);

var main = angular.module("main",[]);

main.controller("mainController", function($scope, $http){

    $scope.getCinemas = function () {
        console.log('getting cinemas');
        $scope.choosingCinema = true;

        cinemas = $http.get("http://localhost:8080/ticketing/cinemas")
            .then(function(response, status, headers, config) {
                $scope.cinemas = response.data;

            });
    }

    $scope.selectCinema = function (cinema) {
        console.log('meep', cinema)
        $scope.getMovies(cinema.id);
        $scope.cinemaSelected = true;
    }

    $scope.getMovies = function (cinemaId) {
        console.log('meep', cinemaId);
        console.log('getting movies');

        movies = $http.get(`http://localhost:8080/ticketing/movies?cinemaId=${cinemaId}`)
            .then(function(response, status, headers, config) {
                $scope.movies = response.data;
                
            });
    }

    $scope.selectMovie = function (cinema, movie) {
        $scope.movieSelected = true;
        $scope.selectedMovie = movie;
        console.log('chosen movie');

        $scope.getScreenings(cinema.id, movie.id);
    }

    $scope.getScreenings = function (cinemaId, movieId) {
        console.log('meep', cinemaId);
        console.log('meep', movieId);
        console.log('getting screenings');

        screenings = $http.get(`http://localhost:8080/ticketing/screenings?cinemaId=${cinemaId}&movieId=${movieId}`)
            .then(function(response, status, headers, config) {
                $scope.screenings = response.data;
            });
    }

    $scope.selectScreening = function (screeningId) {
        console.log('meep', screeningId);
        $scope.screeningSelected = true;
        $scope.selectedScreening = screening;
        console.log('chosen screening');
        //debugger
        $scope.getSeats(screening);
    }




    
});